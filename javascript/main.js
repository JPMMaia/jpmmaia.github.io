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
    w3IncludeHTML();
    initializeNavbar();
};
