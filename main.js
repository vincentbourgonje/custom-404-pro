$(function () {

    var faviconUrl = "http://kunalnagar.github.io/custom-404-pro/favicon.ico",
        css = "background-image: url('" + faviconUrl + "');" +
            "background-repeat: no-repeat;" +
            "display: block;" +
            "background-size: 13px 13px;" +
            "padding-left: 13px;" +
            "margin-left: 5px;",
        text = "So. You like to investigate. I get it. You're a nosey dude. And I like fixing things. Visit www.kunalnagar.in/contact ";
    if (navigator.userAgent.match(/chrome/i)) {
        console.log(text + '%c', css);
    } else {
        console.log('%c   ' + text, css);
    }

    $('.btn-download').click(function () {
        var that = this;
        $(this).attr('disabled', true);
        $(this).find('i').removeClass('fa-download').addClass('fa-spinner fa-spin');
        setTimeout(function () {
            $(that).find('i').removeClass('fa-spinner fa-spin').addClass('fa-download');
            $(that).attr('disabled', false);
        }, 2000);
        location.href = "https://downloads.wordpress.org/plugin/custom-404-pro.1.4.1.zip";
    });

});