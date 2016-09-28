function Template(id, url)
{
    this.id = id;
    this.file = new File(url);
    this.numParameters = null;
    this.jqueryObject = null;
}

Template.prototype.createInstance = function(element)
{
    var parameterAttributeBaseName = "data-template-parameter-";
    var argumentAttributeBaseName = "data-template-argument-";

    var templateContent = this.jqueryObject[0].content;

    for(var i = 0; i < this.numParameters; ++i)
    {
        var parameterAttributeName = parameterAttributeBaseName + i.toString();
        var argumentAttributeName = argumentAttributeBaseName + i.toString();

        var elementWithParameter = templateContent.querySelector("[" + parameterAttributeName + "]");
        var parameter = elementWithParameter.getAttribute(parameterAttributeName);
        var argument = element.getAttribute(argumentAttributeName);
        elementWithParameter.setAttribute(parameter, argument);

        element.removeAttribute(argumentAttributeName);
    }

    return document.importNode(templateContent, true);
};

Template.prototype.getAsync = function()
{
    var context = this;
    return this.file.getAsync().done(
        function()
        {
            context.jqueryObject = $(context.file.getData());
            context.numParameters = parseInt(context.jqueryObject[0].getAttribute("data-template-parameter-count"));
        }
    );
};
