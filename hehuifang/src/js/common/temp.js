define([
    'jquery',
    'handlebars'
], function($, Handlebars) {
    return function(text, data, parent) {
        var compile = Handlebars.compile(text);
        $(parent).html(compile(data));
    }
});