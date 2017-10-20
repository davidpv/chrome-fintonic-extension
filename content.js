function doSum() {
    var numberPattern = /\d+/g;
    var total = 0;
    $('.importe_value.ng-binding').each(function () {
        total += parseFloat($(this).text().match(numberPattern).join('.'));
    });
    total = total.toFixed(2);
    return total;
}

// chrome.runtime.sendMessage({
//     from: 'content',
//     subject: 'showPageAction',
// });

// chrome.runtime.onMessage.addListener(function (msg, sender, response) {
//     console.log('content onMessage', msg, sender);
//     if ((msg.from === 'popup') && (msg.subject === 'doSum')) {
//         var total = doSum();
//         console.log('content total',total);
//         response({total: total});
//         chrome.runtime.sendMessage({total:total});
//     }
// });

});

chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    console.log('content chrome.runtime.onMessage', msg);
    if (msg.parseContent) {

        $(function () {
            $(document).on('click', function (e) {
                $(document).ready(function () {
                    //do some replace magic here
                    var total = doSum();
                    console.log('TOTALC', total);
                    response({total: total});
                    chrome.runtime.sendMessage({total: total});
                });
            });
        });

        $(document).ready(function () {

            console.log('msg is parseContent');
            var total = doSum();
            console.log('TOTAL', total);
            response({total: total});
            chrome.runtime.sendMessage({total: total});
        });
    }
});







