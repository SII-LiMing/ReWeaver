function setCopyState(button, copyText, text) {
    button.classList.add('copied');
    copyText.textContent = text;

    window.setTimeout(function() {
        button.classList.remove('copied');
        copyText.textContent = 'Copy';
    }, 2000);
}

function copyBibTeX() {
    const bibtexElement = document.getElementById('bibtex-code');
    const button = document.querySelector('.copy-bibtex-btn');

    if (!bibtexElement || !button) {
        return;
    }

    const copyText = button.querySelector('.copy-text');
    const bibtex = bibtexElement.textContent;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(bibtex).then(function() {
            setCopyState(button, copyText, 'Copied');
        }).catch(function() {
            fallbackCopyBibTeX(bibtex, button, copyText);
        });
        return;
    }

    fallbackCopyBibTeX(bibtex, button, copyText);
}

function fallbackCopyBibTeX(text, button, copyText) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setCopyState(button, copyText, 'Copied');
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');

    if (!scrollButton) {
        return;
    }

    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});
