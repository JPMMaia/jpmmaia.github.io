function TemplateManager()
{
    this.templates = {};
}

TemplateManager.prototype.addTemplate = function(template)
{
    this.templates[template.id] = template;
};

TemplateManager.prototype.createAsync = function ()
{
    // Get all templates:
    var promises = [];
    for(var key in this.templates)
    {
        if(this.templates.hasOwnProperty(key))
            promises.push(this.templates[key].getAsync());
    }

    var context = this;
    return $.when.apply(null, promises).done(
        function()
        {
            var elements = $("div[data-template]");

            for(var i = 0; i < elements.length; ++i)
            {
                var element = elements[i];

                var templateID = elements[i].getAttribute("data-template");
                var template = context.templates[templateID];

                $(element).replaceWith(template.createInstance(element));
            }
        }
    );
};
