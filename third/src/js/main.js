require.config({
    baseUrl: 'js/',
    paths: {
        index: "app/index",
        flexible: "libs/flexible", //计算单位
        handlebars: "libs/handlebars-v4.0.11",
        jquery: 'libs/jquery01',
        text: "libs/require.text",
        template: "../template/",
        temp: "common/temp"
    }
});

require(['flexible'])