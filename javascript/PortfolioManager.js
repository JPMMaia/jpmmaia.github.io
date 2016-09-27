function PortfolioManager(carouselInnerID, projectsContentID, numRows, numColumns)
{
    this.carouselInnerID = carouselInnerID;
    this.projectsContentID = projectsContentID;
    this.numRows = numRows;
    this.numColumns = numColumns;
    this.items = [];
}

PortfolioManager.prototype.addProject = function(title, category, date, imageURL, modalID)
{
    this.items.push(new PortfolioItem(title, category, date, imageURL, modalID));
};
PortfolioManager.prototype.addModal = function (modalURL)
{
    $("#" + this.projectsContentID).append($("<div>").load(modalURL));
};
PortfolioManager.prototype.create = function()
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