function doSum() {
    var numberPattern = /\d+/g;
    var total = 0;
    $('.importe_value.ng-binding').each(function () {
        total += parseFloat($(this).text().match(numberPattern).join('.'));
    });
    total = total.toFixed(2);
    return total;
}

chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction'
});

chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    console.log('popup doSum', msg);
    if ((msg.from === 'popup') && (msg.subject === 'doSum')) {
        var total = doSum();
        console.log('content total',total);
        response({total: total});
        chrome.runtime.sendMessage({total:total});
    }
});







