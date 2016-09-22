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

function setupScrollify()
{
    $(function() {
        $.scrollify({
            section : ".section",
            scrollSpeed: 1200
        });
    });
}

function isMobile()
{
    try
    {
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e)
    {
        return false;
    }
}

function includeScripts()
{
    if(isMobile())
    {
        var scriptElement = document.createElement("script");
        scriptElement.type = "text/javascript";
        scriptElement.src = "external/Scrollify/jquery.scrollify.min.js";
        $("head").append(scriptElement);

        $.scrollify.disable()
    }
}

window.onload = function()
{
    includeScripts();
    w3IncludeHTML();
    initializeNavbar();
    setupScrollify();
};
