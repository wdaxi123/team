define(["jquery", "render"], function($, render) {
    $.ajax({
        url: "/api/",
        dataType: "json",
        success: function(res) {
            // console.log(res);
            render(res, "#ul-tpl", ".list-ul");
            $(".list-ul").on("click", "li", function() {
                var str = $(this).data("id");
                res.map(function(v, i) {
                    var id = v.kpId;
                    // console.log(id);
                    if (str === id) {
                        render(v.kpListVOs, "#ol-tpl", ".list-ol");
                        $('.ol-ol').on('click', 'li', function() {
                            var firststr = $(this).data("id");
                            v.kpListVOs.map(function(v, i) {
                                var firstid = v.kpId;
                                if (firststr === firstid) {
                                    render(v.kpListVOs, "#ol-tpl", ".list-ol");
                                    $('.ol-ol').on('click', 'li', function() {
                                        var secstr = $(this).data("id");
                                        v.kpListVOs.map(function(v, i) {
                                            var secid = v.kpId;
                                            // console.log(secid);
                                            if (secstr === secid) {
                                                render(v.kpListVOs, "#ol-tpl", ".list-ol");
                                                $('.ol-ol').on('click', 'li', function() {
                                                    var thrstr = $(this).data("id");
                                                    var thrid = v.kpId;
                                                    if (thrstr === thrid) {
                                                        render(v.kpListVOs, "#ol-tpl", ".list-ol");
                                                    }
                                                })
                                            }
                                        })
                                    })
                                }
                            })
                        })
                    }
                })
            });

        }
    })
})