// use JQUERY to fetch and generate image gallery using flickr API
(function () {
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI, {
            tags: "rocketlaunch",
            tagmode: "any",
            format: "json"
        })
        .done(function (data) {
            $.each(data.items, function (i, item) {
                $("<img>").attr("src", item.media.m).attr("alt", 'Randomly fetched image').appendTo("#images").addClass("box");;
                if (i === 15) {
                    return false;
                }
            });
        });
})();

// style gallery with javascript