// Verify if YouTube Watch page
let isValidHostname = /youtube.com\/watch\\?/.test(window.location);
if (isValidHostname) {

    // Auto Scroll Down Page 82px
    document.documentElement.scrollTop = document.body.scrollTop = 82;

    // Hide the masthead
    let body = document.querySelectorAll('#masthead-container');
    for (elt of body) {
        elt.style.setProperty('display', 'none', 'important');
    }
}
