/**
 * Created by joannamichalek on 05/09/16.
 */
console.log('ready...');


$(document).ready(function() {
    console.log('jQuery ready...');

    var findPrevAndNextImages = function (image_source) {
        // find next element
        var next_image = $('.content img[src="'+image_source+'"]').parent().parent().next().children('a').children('img');

        if (next_image.length) {
            $('.next').attr('data-src', next_image.attr('src')).show();
        } else {
            $('.next').hide();
        }

        // find prev element
        var prev_image = $('.content img[src="'+image_source+'"]').parents('.content').prev().find('img');

        if (prev_image.length) {
            $('.prev').attr('data-src', prev_image.attr('src')).show();
        } else {
            $('.prev').hide();
        }

        $('.pop_up').attr('src', image_source);


        // save current image in localStorage
        if (window.localStorage) {
            console.log('localStorage exists.');

            localStorage.setItem('image_source', image_source);
            console.log('set image_source ' + image_source + ' to localStorage.');
        } else {
            console.log('localStorage does not supported.');
        }
    };



    // refresh page when popup is visible scenario
    if (window.localStorage) {
        var image_source = localStorage.getItem('image_source');

        findPrevAndNextImages(image_source);
    }

    // click event for image
    $(".content img").click(function() {
        var image_source = $(this).attr('src');

        // $('.pop_up').attr('src', image_source);

        findPrevAndNextImages(image_source);

        // find next element
        // var next_image = $(this).parent().parent().next().children('a').children('img');
        //
        // if (next_image.length) {
        //     $('.next').attr('data-src', next_image.attr('src')).show();
        // } else {
        //     $('.next').hide();
        // }
        //
        // // find prev element
        // var prev_image = $(this).parents('.content').prev().find('img');
        //
        // if (prev_image.length) {
        //     $('.prev').attr('data-src', prev_image.attr('src')).show();
        // } else {
        //     $('.prev').hide();
        // }

    });


    // click event for next button
    $('.next').click(function (event) {
        var image_source = $(this).attr('data-src');

        // $('.pop_up').attr('src', image_source);

        findPrevAndNextImages(image_source);

        // find prev image
        // var prev_image = $('.content img[src="'+image_source+'"]').parent().parent().prev().children('a').children('img');
        //
        // if (prev_image.length) {
        //     $('.prev').attr('data-src', prev_image.attr('src')).show();
        // } else {
        //     $('.prev').hide();
        // }
        //
        // // find next image
        // var next_image = $('.content img[src="'+image_source+'"]').parent().parent().next().children('a').children('img');
        //
        // console.log(next_image.length);
        //
        // if (next_image.length) {
        //     $('.next').attr('data-src', next_image.attr('src')).show();
        // } else {
        //     $('.next').hide();
        // }

        event.preventDefault();
    });

    // click event for prev button
    $('.prev').click(function(event) {
        var image_source = $(this).attr('data-src');

        // $('.pop_up').attr('src', image_source);

        findPrevAndNextImages(image_source);

        // find prev image
        // var prev_image = $('.content img[src="'+image_source+'"]').parent().parent().prev().children('a').children('img');
        //
        // if (prev_image.length) {
        //     $('.prev').attr('data-src', prev_image.attr('src')).show();
        // } else {
        //     $('.prev').hide();
        // }
        //
        // // find next image
        // var next_image = $('.content img[src="'+image_source+'"]').parent().parent().next().children('a').children('img');
        //
        // console.log(next_image.length);
        //
        // if (next_image.length) {
        //     $('.next').attr('data-src', next_image.attr('src')).show();
        // } else {
        //     $('.next').hide();
        // }

        event.preventDefault();
    })




});

