jQuery(function($)
{
    $("a[href^='/rent/flat/']").each(function()
    {
        var self = $(this),
            originalLinkText = self.text()
        ;
        self.text("Загрузка...");
        $.ajax(
        {
            "url": self.attr("href")
        })
        .done(function(data)
        {
            var row = $("<tr>"),
                col = $("<td colspan='10'>"),
                photos = $(data).find(".object_descr_images_w").clone()
            ;
            photos.find("img").each(function()
            {
                $(this).attr("height", "200");
            });
            photos.find("a").each(function()
            {
                $(this).attr("target", "_blank");
            });
            col.append(photos);
            row.append(col);
            self.closest("tr").after(row);
            self.text(originalLinkText);
        });
    });
});
