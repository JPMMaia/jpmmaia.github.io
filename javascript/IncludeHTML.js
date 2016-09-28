function IncludeHTML()
{
}

IncludeHTML.prototype.executeAsync = function()
{
    this.elements = $("div[data-include-html]");

    var promises = [];
    for(var i = 0; i < this.elements.length; ++i)
    {
        var element = this.elements[i];

        var url = element.getAttribute("data-include-html");
        element.removeAttribute("data-include-html");

        element.file = new File(url);
        promises.push(element.file.getAsync());
    }

    var context = this;
    return $.when.apply(this, promises).done(
        function()
        {
            for(var i = 0; i < context.elements.length; ++i)
            {
                var element = $(context.elements[i]);
                element.replaceWith(context.elements[i].file.getData());
            }
        }
    );
};
