chrome.runtime.onMessage.addListener(function (msg, sender) {
    console.log('background onMessage',msg, sender);
    if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
        chrome.pageAction.show(sender.tab.id);
    }
});

