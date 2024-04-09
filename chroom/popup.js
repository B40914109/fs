
// 在这里定义你想要执行的函数
function myFunction() {
    // 示例：在当前标签页上查找第一个按钮，并点击它
    console.log("Executing myFunction");
    document.querySelector("button").click();
}

function text() {
    window.location.href = "/list/5.html"
}


// 获取按钮元素
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

// 为按钮添加点击事件监听器
btn1.addEventListener("click", function () {
    console.log("Button 1 clicked");

    // chrome.tabs.update({ url: "https://www.baidu.com" }, function (tab) {
    //     chrome.tabs.executeScript({
    //         target: { tabId: tab.id, allFrames: true },
    //         function: function () {
    //             // 在这里编写按钮1点击后执行的操作
    //             alert('abc')
    //         }
    //     });
    // });


    // chrome.tabs.update({ url: "https://www.baidu.com" }, function (tab) {
    //     chrome.tabs.executeScript(tab.id, { code: 'alert("Hello from injected script!");' });
    // });

    // chrome.runtime.sendMessage({
    //     action: 'result',
    //     result: "aaaassssssssss",
    //     count: 10
    // }, function (response) {
    //     // chrome.tts.speak(`${selectedElements.length} elements are found and returned.`);
    // })


    chrome.runtime.sendMessage({ action: "executeScript" });

    // 这里可以添加你想要执行的操作
    // 例如，向当前标签页发送消息
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //     btn1.style.color = 'blue';
    //     var currentTab = tabs[0];

    //     chrome.runtime.sendMessage({ action: "executeScript" });

    //     // chrome.scripting.executeScript({
    //     //     target: { tabId: currentTab.id },
    //     //     function: function () {
    //     //         console.log("aaaaaaaa...");
    //     //         chrome.runtime.sendMessage({ action: "executeScript" });

    //     //         // window.location.href = "/list/5.html";

    //     //         // setTimeout(() => {
    //     //         //     console.log("abcc");
    //     //         // }, 5000)
    //     //     }
    //     // });

    //     // chrome.runtime.sendMessage({ action: "executeScript" });

    // });
});

btn2.addEventListener("click", function () {
    console.log("Button 2 clicked");
    // 这里可以添加你想要执行的操作
});