const host = "http://127.0.0.1:3000";

function clickDownloadButton() {
    chrome.tabs.query({'active' : true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
        const url = tabs[0].url;
        downloadVideo = (videoUrl) => {
            const downloadUrlTemplate = `${host}/download_chrome_ex?videoUrl=${videoUrl}`;
            function sendRequest() {
                document.write("Sending request");
                var req = new XMLHttpRequest();
                  req.open("GET", downloadUrlTemplate, true);
                  req.onreadystatechange = function() {
                      if (req.readyState == 4) {
                        if (req.status == 200) {
                          document.write("OK");
                        }
                      }
                    };
                  req.send();
            }
            sendRequest();
        };
        downloadVideo(url);
    });
}

window.onload = () => {
    document.getElementById("dl-button").onclick = clickDownloadButton;
}