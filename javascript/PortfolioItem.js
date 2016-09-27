function PortfolioItem(title, category, date, imageURL, modalID)
{
    this.title = title;
    this.category = category;
    this.date = date;
    this.imageURL = imageURL;
    this.modalID = modalID;
}

PortfolioItem.prototype.create = function ()
{
    return  '<div class="portfolio-item">' +
        '<img src="' + this.imageURL + '" class="img-responsive" style="width:100%" alt="Image">' +
        '<div class="portfolio-item-text-container" data-toggle="modal" data-target="#' + this.modalID + '">' +
        '<div class="portfolio-item-text">' +
        '<h5 class="portfolio-item-text-date">' + this.date + '</h5>' +
        '<h4 class="portfolio-item-text-title text-uppercase">' + this.title + '</h4>' +
        '<h5 class="portfolio-item-text-category text-uppercase">' + this.category + '</h5>' +
        '</div>' +
        '</div>' +
        '</div>';
};
