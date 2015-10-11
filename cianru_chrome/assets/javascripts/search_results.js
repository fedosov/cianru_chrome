jQuery(function($)
{
    $(".offer_container").each(function(k, v)
    {
        var $container = $(v);
        var $user_data = $container.find(".object_user_data");

        $container.find(".objects_item_images_w a").each(function()
        {
            var self = $(this);
            var $a = $("<a class='fancybox' target='_blank'></a>").attr("rel", "group" + k).attr("href", self.attr("href"));
            $a.append($("<img height='150px' style='margin: 0 4px 0 0;' />").attr("src", self.attr("href")));
            $user_data.append($a);
        });
    });
});
