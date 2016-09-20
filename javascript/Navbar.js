function Navbar()
{
    this.keyPoints = [];
}

Navbar.prototype.addKeyPoint = function(query, isNormalColor)
{
    this.keyPoints.push({ "query": query, "isNormalColor": isNormalColor });
};

Navbar.onScroll = function()
{
    // We round here to reduce a little workload:
    var stop = Math.round($(window).scrollTop());

    for(var i = 0; i < g_navbar.keyPoints.length - 1; ++i)
    {
        var keyPoint = g_navbar.keyPoints[i];
        var nextKeyPoint = g_navbar.keyPoints[i + 1];

        if($(keyPoint.query).offset().top <= stop && stop < $(nextKeyPoint.query).offset().top)
        {
            var navbarElement = $("#custom-navbar");
            if(keyPoint.isNormalColor)
                navbarElement.removeClass('alternative-color');
            else
                navbarElement.addClass('alternative-color');

            return;
        }
    }
};