// Price Range slider bar
$( function() {
    var sliderRange = $("#slider-range");
    sliderRange.slider({
        range: true,
        min: 0,
        max: 2000,
        values: [ 200, 1800 ],
        slide: function( event, ui ) {
            $("#amount .min").html( "$" + ui.values[ 0 ] );
            $("#amount .max").html( "$" + ui.values[ 1 ] );
        }
    });
    $("#amount .min").html( "$" + sliderRange.slider( "values", 0 ) );
    $("#amount .max").html( "$" + sliderRange.slider( "values", 1 ) );
});

// Filters
function checkAllStars(){
    $('#check-all-stars').click(function(){
        $(this).closest('.filter-stars-cont').find('input:checkbox:not(:checked)').trigger('click');
    });
}

//Generic dropdown functionality
function dropdowns(){
    var trigger = $(".dropdown-trigger");
    var colapse = $(".dropdown-colapse");
    var icon    = $(".dropdown-icon");

    trigger.click(function(){
        $(this).toggleClass("active");
        $(this).parent().find(colapse).toggleClass("active");
        $(this).find(".dropdown-icon").toggleClass("active")
    });
}

$(document).ready(function(){
    // Header hamburger button
    $('#hamburger-icon').click(function(){
        $(this).toggleClass('open');
    });


    // Filters
    checkAllStars();

    dropdowns()

});
