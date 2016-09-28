function File(url)
{
    this.url = url;
    this.data = null;
}

File.prototype.getAsync = function()
{
    var context = this;
    return $.get(this.url).done(
        function(data)
        {
            context.setData(data);
        }
    )
};

File.prototype.getData = function()
{
    return this.data;
};
File.prototype.setData = function(data)
{
    this.data = data;
};
