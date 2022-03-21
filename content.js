chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.command === 'pasted') {
        document.getElementById('form-input--userNote').innerText = 'LOL';
        console.log('pasted');
    }
    sendResponse({result: 'success'});
});