function PortfolioManager(carouselInnerID, projectsContentID, numRows, numColumns)
{
    this.carouselInnerID = carouselInnerID;
    this.projectsContentID = projectsContentID;
    this.numRows = numRows;
    this.numColumns = numColumns;
    this.items = [];
    this.modalURLs = [];
}

PortfolioManager.prototype.addProject = function(title, category, date, imageURL, modalID)
{
    this.items.push(new PortfolioItem(title, category, date, imageURL, modalID));
};
PortfolioManager.prototype.addModal = function (modalURL)
{
    this.modalURLs.push(modalURL);
};
PortfolioManager.prototype.createAsync = function()
{
    var context = this;

    return this.createModalsAsync()
        .then(
            function()
            {
                context.createPortfolioItems();
            }
        );
};
PortfolioManager.prototype.createModalsAsync = function ()
{
    var promises = [];
    var modals = [];

    for(var i = 0; i < this.modalURLs.length; ++i)
    {
        var promise = $.get(this.modalURLs[i]).done(
            function(data)
            {
                modals.push(data);
            }
        );

        promises.push(promise);
    }

    var projectsContentID = this.projectsContentID;
    return $.when.apply(null, promises).done(
        function()
        {
            for(var i = 0; i < promises.length; ++i)
            {
                $("#" + projectsContentID).append(modals[i]);
            }
        }
    );
};
PortfolioManager.prototype.createPortfolioItems = function()
{
    var itemsPerSlide = this.numRows * this.numColumns;
    var numItemsLeft = this.items.length;

    for(var i = 0; i < numItemsLeft; i += itemsPerSlide)
    {
        $("#" + this.carouselInnerID).append(this.createSlide(i == 0, this.items, i, i + itemsPerSlide));
    }
};

PortfolioManager.prototype.createColumn = function(content, columnWidth, columnOffset)
{
    var column = $('<div>');
    column.addClass('col-sm-' + columnWidth);
    if(columnOffset > 0)
        column.addClass('col-sm-offset-' + columnOffset);

    column.append(content);

    return column;
};
PortfolioManager.prototype.createRow = function(columnWidth, items, start, end)
{
    var row = $('<div>');
    row.addClass("row");
    row.addClass("portfolio-row");

    if(start  == end)
        return row;

    for(var i = start; i < end && i < items.length; ++i)
    {
        row.append(this.createColumn(items[i].create(), columnWidth, 0));
    }

    return row;
};
PortfolioManager.prototype.createSlide = function(isActive, items, start, end)
{
    var slide = $('<div>');
    slide.addClass("item");
    if(isActive)
        slide.addClass("active");

    var columnWidth = 12 / this.numColumns;
    var numRows = 0;
    for(var i = start; i < end && i < items.length; i += this.numColumns)
    {
        slide.append(this.createRow(columnWidth, this.items, i, i + this.numColumns));
        numRows++;
    }

    if(numRows != 2)
    {
        var extraRow = this.createRow(columnWidth, this.items, 0, 1);
        extraRow.css("visibility", "hidden");
        slide.append(extraRow);
    }

    return slide;
};