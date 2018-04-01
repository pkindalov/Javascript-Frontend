$(document).ready(function () {
   $('.submenu').hide();
   $('.first_subitems').hide();
   $('.second_subitems').hide();

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
    });


    $('a[name="first_subitems_mainLink"]').on('click', function () {

        $('.first_subitems').toggle();
        $('.second_subitems').hide();
    });

    $('a[name="second_subitems_mainLink"]').on('click', function () {

        $('.second_subitems').toggle();
        $('.first_subitems').hide();
    });


});