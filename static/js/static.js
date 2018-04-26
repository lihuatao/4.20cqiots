$(function() {
    $('.fancybox-media1').click(function() {
        videoPopup()
    })

    $(".fancybox-close").click(function() {
        vadeoClose()
    })



    function videoPopup() {
        $('.fancybox-overlay').css("display", "block");
        $("#videoFile").attr("src", "./static//video/360.mp4");
    }

    function vadeoClose() {
        $('.fancybox-overlay').css("display", "none");
        $("#videoFile").removeAttr("src");
    }
})