$(document).ready(
    function()
    {
        // Display default page:
        $("#page-content").load("pages/Profile.html");

        // Setup sidebar:
        setupSidebar();
    }
);

function setupSidebar()
{
    $("#sidebar-profile").click(
        function ()
        {
            $("#page-content").load("pages/Profile.html");
        }
    );
}