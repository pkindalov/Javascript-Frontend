$(document).ready(function () {
   $('.submenu').hide();

   $('a[name="first_items"]').on('click', function () {
       $('ul[name="first_items_submenus"]').toggle('slow');

       $('ul[name="second_items_submenus"]').hide();
       $('ul[name="third_items_submenus"]').hide();
       $('ul[name="forth_items_submenus"]').hide();

   });

    $('a[name="second_items"]').on('click', function () {
        $('ul[name="second_items_submenus"]').toggle('slow');

        $('ul[name="first_items_submenus"]').hide();
        $('ul[name="third_items_submenus"]').hide();
        $('ul[name="forth_items_submenus"]').hide();
    });

    $('a[name="third_items"]').on('click', function () {
        $('ul[name="third_items_submenus"]').toggle('slow');

        $('ul[name="second_items_submenus"]').hide();
        $('ul[name="first_items_submenus"]').hide();
        $('ul[name="forth_items_submenus"]').hide();
    });

    $('a[name="forth_items"]').on('click', function () {
        $('ul[name="forth_items_submenus"]').toggle('slow');

        $('ul[name="second_items_submenus"]').hide();
        $('ul[name="third_items_submenus"]').hide();
        $('ul[name="first_items_submenus"]').hide();
    })

});