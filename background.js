chrome.runtime.onMessage.addListener(function (msg, sender) {
    console.log('content showPageAction',msg, sender.tab.id);
    if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
        chrome.pageAction.show(sender.tab.id);
    }
});

