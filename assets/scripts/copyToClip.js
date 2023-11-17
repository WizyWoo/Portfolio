document.getElementById('copy-text').addEventListener('click', function() {
    var textToCopy = this.innerText;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            // Change the text to "Copied!" on successful copy
            this.innerText = 'Copied!';
        })
        .catch(err => {
            console.error('Unable to copy text: ', err);
        });
});