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
            $('.left').on('click', 'li', function() {
                $(this).addClass('active').siblings().removeClass('active');
                var str = $(this).data('id');
                var Data = getFirst(str, res);
                temp(ullist, Data.kpListVOs, '.select-first');
                $('.select-first').on('click', 'li', function() {
                    $(this).addClass('active').siblings().removeClass('active');
                    var one = $(this).data('id');
                    var onedata = getFirst(one, Data.kpListVOs);
                    temp(ullist, onedata.kpListVOs, '.select-second');
                    $('.select-second').on('click', 'li', function() {
                        $(this).addClass('active').siblings().removeClass('active')
                        var two = $(this).data('id');
                        var thirdData = getFirst(two, onedata.kpListVOs);
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