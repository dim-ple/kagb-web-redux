

// Removing <br> tags in top-paragraph element for smaller screens (<= 480px)
let topParagraph = document.getElementById('top-paragraph');

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 480) {
        let pContentWithoutBreaks = topParagraph.innerHTML.replace(/<br\s*\/?>/g, ' ');
        topParagraph.innerHTML = pContentWithoutBreaks;
    }
});


    