function w3IncludeHTML()
{
    var allElements = document.getElementsByTagName("*");
    for (var i = 0; i < allElements.length; i++)
    {
        var currentElement = allElements[i];
        if (currentElement.getAttribute("w3-include-html"))
        {
            var clone = currentElement.cloneNode(false);
            var file = currentElement.getAttribute("w3-include-html");

            var request = new XMLHttpRequest();
            request.onreadystatechange = function()
            {
                if (request.readyState == 4 && request.status == 200)
                {
                    clone.removeAttribute("w3-include-html");
                    clone.innerHTML = request.responseText;
                    currentElement.parentNode.replaceChild(clone, currentElement);
                }
            };
            request.open("GET", file, false);
            request.send();
        }
    }
}