function getResponse(response) {
    console.log('getResponse', response);
}

window.addEventListener('DOMContentLoaded', function () {

    console.log('DOMContentLoaded');
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        //sendMessage(tabId: number, message: any, responseCallback?: (response: any) => void): void;
        chrome.tabs.sendMessage(tabs[0].id, {from: 'popup', subject: 'doSum'}, getResponse);
    });

    chrome.runtime.onMessage.addListener(function (message, sender) {
        console.log('popup onMessage', message, sender);
        if (message.total) {
            $('#total').text(message.total);
        }
    })

});
