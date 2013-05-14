jQuery(function($)
{
	$("a[href^='/showphoto.php']").each(function()
	{
		var self = $(this);
		$.ajax(
		{
			"url": self.attr("href")
		})
		.done(function(data)
		{
			var row = $("<tr>");
			var col = $("<td colspan='10'>");
			var photos = $(data).find("#photos").clone();
			photos.find("img").each(function()
			{
				$(this).attr("height", "200");
			});
			col.append(photos);
			row.append(col);
			self.closest("tr").after(row);
		});
	});
});
