chrome.tabs.onUpdated.addListener(function (tabId, change, tab) {
    console.log('background chrome.tabs.sendMessage');
    chrome.tabs.sendMessage(tabId,{parseContent: true});
    // chrome.tabs.executeScript(null, {file: 'content.js'});
    // chrome.pageAction.show(tabId);
});


// chrome.runtime.onMessage.addListener(function (msg, sender) {
//     console.log('background onMessage',msg, sender);
//     if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
//         chrome.pageAction.show(sender.tab.id);
//         console.log('content page sent message');
//     }
// });

