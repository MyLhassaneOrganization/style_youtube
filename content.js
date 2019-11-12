// Verify if YouTube Watch page
let isValidHostname = /youtube.com\/watch\\?/.test(window.location);
if (isValidHostname) {

    // Auto Scroll Down Page 82px
    document.documentElement.scrollTop = document.body.scrollTop = 82;

}