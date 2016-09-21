var g_navbar = new Navbar();
function initializeNavbar()
{
    g_navbar.addKeyPoint("#home", true);
    g_navbar.addKeyPoint("#about", true);
    g_navbar.addKeyPoint("#skills", false);
    g_navbar.addKeyPoint("#portfolio", true);
    g_navbar.addKeyPoint("#contact", false);
    g_navbar.addKeyPoint("#main-footer", false);
    $(window).on('scroll', Navbar.onScroll);
}

window.onload = function()
{
    var content = $("#content");
    content.append(document.querySelector("#link-home").import.querySelector("#home"));
    content.append(document.querySelector("#link-about").import.querySelector("#about"));
    content.append(document.querySelector("#link-skills").import.querySelector("#skills"));
    content.append(document.querySelector("#link-portfolio").import.querySelector("#portfolio"));
    content.append(document.querySelector("#link-contact").import.querySelector("#contact"));

    initializeNavbar();

    $(function() {
        $.scrollify({
            section : ".section"
        });
    });
};
