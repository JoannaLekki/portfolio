/**
 * Created by joannamichalek on 05/09/16.
 */
console.log('ready...');


$(document).ready(function() {
    console.log('jQuery ready...');

    // $("img").hide();
    // var show = $(".show_images");

    // show.click(function() {$("img").show();});

    var hideImages = function() {
        console.log('hiding images...');
        $("img").hide();
    }

    var showImages = function() {
        console.log('showing images...')
        $("img").show();
    }
    $(".hide_images").click(hideImages);

    $(".show_images").click(showImages);







    // $(".project_1").hasClass("red_gallery"){
    //     $(this).removeClass("red_gallery")
    // });





    $("img").click(function() {


    // $(".pop_up").show(image_source);

    // 1.
    var image_source = $(this).attr('src');

    $('.pop_up').attr('src', image_source);

    // 2.
    $('.pop_up').attr('src', $(this).attr('src'));



    // $

    // console.log(image_source);
    console.log($(this));
    console.log($(this).parent().next().children().attr('src'));
    // $(this).attr();
});

    // hideImages();


    // setTimeout(showImages, 5000);
    // setTimeout(showImages, 5000);

});

