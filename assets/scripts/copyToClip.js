document.getElementById('copy-text').addEventListener('click', function() {
    var textToCopy = this.innerText;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            this.innerText = 'Copied!';
        })
        .catch(err => {
            console.error('Unable to copy text: ', err);
        });
});