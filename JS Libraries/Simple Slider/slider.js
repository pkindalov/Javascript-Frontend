function prevMethod(mainIndex, images) {
    mainIndex--;
    if (mainIndex <= 0) {
        mainIndex = images.length - 1;
    }

    $('.picBox1 img').remove();
    $('.picBox1').append(images[mainIndex - 1]);

    $('.picBox2 img').remove();
    $('.picBox2').append(images[mainIndex]);
    return mainIndex;
}

function nextMethod(mainIndex, images) {
    mainIndex++;
    if (mainIndex >= images.length) {
        mainIndex = 1;
    }

    $('.picBox2 img').remove();
    $('.picBox2').append(images[mainIndex]);

    $('.picBox1 img').remove();
    $('.picBox1').append(images[mainIndex - 1]);
    return mainIndex;
}





$(document).ready(function () {

    let isPrevAutoTurnedOn = false;
    let isNextAutoTurnedOn = false;

    let images = [
        $('<img src="https://t00.deviantart.net/QalUaBJfN6pHaj8V86utrVGalkY=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/fd8e/th/pre/i/2014/322/a/e/horse_hdr_by_th3r3v3nan7-d86tela.jpg" />'),

        $('<img src="https://t00.deviantart.net/wHXkvxF3Vq4GZ3PMN96-Bh9VjUs=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/4fcd/th/pre/i/2014/298/3/d/persian_cat_hdr_by_th3r3v3nan7-d8423s1.jpg" />'),

      $('<img src="https://t00.deviantart.net/faDs6sRrNfyQHZIrZA5iwkFU8FU=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/1738/th/pre/i/2014/319/7/7/autumn_leaves_hdr_by_th3r3v3nan7-d86ig5j.jpg" />'),

      $('<img src="https://t00.deviantart.net/RJYBBsUBsQ_W6dH4tAMCH1liVfs=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/f580/th/pre/i/2014/314/a/1/so_green_hdr_by_th3r3v3nan7-d85xdcc.jpg" />'),

      $('<img src="https://t00.deviantart.net/0seQoc6P9I32q0C3seNIvcruEnw=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/43f2/th/pre/i/2014/298/4/9/landscape_by_th3r3v3nan7-d842cnm.jpg" />'),

      $('<img src="https://t00.deviantart.net/oj0MOe3y6Y2AqMlkDW6Z-6bosaw=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/731d/th/pre/i/2014/298/0/e/landscape_by_th3r3v3nan7-d842ek3.jpg" />'),

      $('<img src="https://t00.deviantart.net/3AiH2tcbxKPlP_OYx84qZMF42JA=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/5129/th/pre/i/2014/298/5/6/beautiful_water_reflexion_hdr_by_th3r3v3nan7-d842r1j.jpg" />'),

      $('<img src="https://t00.deviantart.net/Do5Ij7y67ZABmLTGYK1xvurq-B8=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/549c/th/pre/i/2014/298/9/4/cat_hdr_by_th3r3v3nan7-d843n7q.jpg" />'),
    ];


    let imageCont1 = $('.picBox1');
    let imageCont2 = $('.picBox2');

    imageCont1.append(images[0]);
    imageCont2.append(images[1]);

    let mainIndex = 1;

    $('a[name="prevBtn"]').click(function () {
        mainIndex = prevMethod(mainIndex, images);
    });

    $('a[name="nextBtn"]').click(function () {
        mainIndex = nextMethod(mainIndex, images);
    });


    $(document).keydown(function (event) {
       switch (event.which){
           case 37:
               mainIndex = prevMethod(mainIndex, images);
               break;
           case 39:
               mainIndex = nextMethod(mainIndex, images);
               break;
       }
    });



    let autoPrevMode;
    let autoNextMode;


    $('a[name="nextAuto"]').click(function (e) {

        e.preventDefault();


        if(isNextAutoTurnedOn){
            clearInterval(autoNextMode);
            autoNextMode = 0;
            $(this).removeClass();
            $(this).addClass('btn btn-primary');
            $(this).text('Auto Change Pics Next');
        }else {
             autoNextMode = setInterval(function () {
                mainIndex = nextMethod(mainIndex, images);
            }, 5000);

            $(this).removeClass();
            $(this).addClass('btn btn-warning');
            $(this).text('Turn Off');
        }

        isNextAutoTurnedOn = !isNextAutoTurnedOn;
    });





    $('a[name="prevAuto"]').click(function (e) {

        e.preventDefault();


        if(isPrevAutoTurnedOn){
            clearInterval(autoPrevMode);
            autoPrevMode = 0;
            $(this).removeClass();
            $(this).addClass('btn btn-primary');
            $(this).text('Auto Change Pics Prev');
        }else {
            autoPrevMode = setInterval(function () {
                mainIndex = prevMethod(mainIndex, images);
            }, 5000);

            $(this).removeClass();
            $(this).addClass('btn btn-warning');
            $(this).text('Turn Off');
        }

        isPrevAutoTurnedOn = !isPrevAutoTurnedOn;
    });



    $('a[name="stopAuto"]').click(function (event) {
        event.preventDefault();

        clearInterval(autoPrevMode);
        clearInterval(autoNextMode);

        $('a[name="prevAuto"]').removeClass()
                        .addClass('btn btn-primary')
                        .text('Auto Change Pics Prev');

        $('a[name="nextAuto"]').removeClass()
            .addClass('btn btn-primary')
            .text('Auto Change Pics Next');

    })




    // setInterval(function () {
    //     mainIndex = prevMethod(mainIndex, images);
    // }, 5000);


});