// chrome.action.onClicked.addListener((tab) => {
//     chrome.action.openPopup();
// });


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "executeScript") {
        // 在这里执行你想要的操作，例如执行脚本
        console.log("Received executeScript message from popup.js");
        // 这里是示例的执行代码，你需要替换成实际的执行代码
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var currentTab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: currentTab.id },
                function: function () {
                    console.log("Script executed on the current tab");
                    // 在这里执行你想要在当前标签页执行的脚本
                }
            });
        });
    }
});