function Utils()
{
}

Utils.isTouchable = function()
{
    try
    {
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e)
    {
        return false;
    }
};
