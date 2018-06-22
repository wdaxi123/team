require([
    'jquery',
    'temp',
    'text!template/ul-left-list.html'
], function($, temp, ullist) {
    $.ajax({
        url: '/api/left',
        dataType: 'json',
        success: function(res) {
            temp(ullist, res, '.left')
            var text = ''
            $('.left').on('click', 'li', function() {
                $(this).addClass('active').siblings().removeClass('active')
                text = $(this).text().trim();
                $('.right .input').val(text)
                var str = $(this).data('id');
                var Data = getFirst(str, res);

                temp(ullist, Data.kpListVOs, '.select-first');
                $('.select-first').on('click', 'li', function() {
                    $(this).addClass('active').siblings().removeClass('active')
                    var t = $(this).text().trim();
                    text += '/' + t;
                    $('.right .input').val(text);
                    var secondStr = $(this).data('id');
                    var secondData = getFirst(secondStr, Data.kpListVOs);

                    
                    temp(ullist, secondData.kpListVOs, '.select-second');

                    $('.select-second').on('click', 'li', function() {
                        $(this).addClass('active').siblings().removeClass('active')
                        text += '/' + $(this).text().trim();
                        $('.right .input').val(text);
                        var secondStr = $(this).data('id');
                        var thirdData = getFirst(secondStr, secondData.kpListVOs);
                        console.log(thirdData.kpListVOs);
                        temp(ullist, thirdData.kpListVOs, '.select-third');
                    });
                })
            })
        }
    })


    function getFirst(str, res) {
        var obj = null;
        res.map(function(v, i) {
            if (v['kpId'] == str) {
                obj = v;
            }
        });
        return obj;
    }
})