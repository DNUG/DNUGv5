$(function ()
{
    SetNavigationSize();

    $(window).resize(SetNavigationSize);
    $(window).scroll(StickNavigation);
    
    $('.flexslider').flexslider();
});


function SetNavigationSize()
{
    var navigation = $("#navigation ul");
    var width = $(".container").first().width();

    navigation.css("width", width); ;
}

function StickNavigation()
{
    var container = $("#navigation");
    var navigation = $("#navigation ul");
    var height = navigation.outerHeight();
    var threshold = $('#branding').outerHeight();

    if ($(window).scrollTop() > threshold)
    {
        container.css("height", height);
        navigation.addClass('stuck').css('top', '0');
    }
    else
    {
        container.css("height", "auto");
        navigation.removeClass('stuck');
    }
}