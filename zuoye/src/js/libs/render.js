define(['jquery', 'handlebars'], function($, handlebars) {
    function render(data, source, target, isHtml) {
        var source = $(source).html();
        var template = handlebars.compile(source);

        var html = template(data);
        if (isHtml) {
            $(target).html(html);
        } else {
            $(target).append(html);
        }
    }
    return render;
})