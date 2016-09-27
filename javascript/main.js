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

function createPortfolio()
{
    var portfolioManager = new PortfolioManager("skills-carousel-inner", "portfolio-projects-content", 2, 4);
    portfolioManager.addModal("pages/projects/project1Modal.html");
    portfolioManager.addProject("Graphics Engine", "Computer Graphics", "2016", "resources/images/yoga_mountains.jpeg", "project1-modal");
    portfolioManager.addProject("Harris Corner Detection", "High Performance Computing", "2016", "resources/images/yoga_mountains.jpeg", "project1-modal");
    portfolioManager.addProject("The Forest Guardian", "Computer Games", "2016", "resources/images/yoga_mountains.jpeg", "project1-modal");
    portfolioManager.addProject("FEUP Boxing", "Computer Games", "2016", "resources/images/yoga_mountains.jpeg", "project1-modal");
    portfolioManager.addProject("ERP Dashboard", "Web", "2015", "resources/images/yoga_mountains.jpeg", "project1-modal");
    portfolioManager.addProject("Mandelbrot", "Computer Graphics", "2015", "resources/images/yoga_mountains.jpeg", "project1-modal");
    portfolioManager.addProject("Perlin Noise", "Computer Graphics", "2015", "resources/images/yoga_mountains.jpeg", "project1-modal");
    portfolioManager.addProject("Raytracer", "Computer Graphics", "2015", "resources/images/yoga_mountains.jpeg", "project1-modal");
    portfolioManager.addProject("Parkinson Detector Neural Network", "Machine Learning", "2014", "resources/images/yoga_mountains.jpeg", "project1-modal");
    portfolioManager.addProject("Trench", "Computer Graphics", "2014", "resources/images/yoga_mountains.jpeg", "project1-modal");
    portfolioManager.addProject("Tower Defence", "Android", "2014", "resources/images/yoga_mountains.jpeg", "project1-modal");
    portfolioManager.addProject("Computer Laboratory", "Embedded Software", "2013", "resources/images/yoga_mountains.jpeg", "project1-modal");
    //portfolioManager.addProject("GestaMed", "", "2016", "resources/images/yoga_mountains.jpeg", "project1-modal");
    portfolioManager.create();
}

window.onload = function()
{
    includeScripts();
    w3IncludeHTML();
    initializeNavbar();
    createPortfolio();
    setupScrollify();
};
