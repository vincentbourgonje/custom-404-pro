$(function() {

   $('.btn-download').click(function() {
       var that = this;
       $(this).attr('disabled', true);
       $(this).find('i').removeClass('fa-download').addClass('fa-spinner fa-spin');
       setTimeout(function() {
           $(that).find('i').removeClass('fa-spinner fa-spin').addClass('fa-download');
           $(that).attr('disabled', false);
       }, 2000);
       location.href = "https://downloads.wordpress.org/plugin/custom-404-pro.1.4.1.zip";
   });

});