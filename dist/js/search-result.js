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

    $("*[data-drop-trigger]").click(function(){
        var key     = $(this).attr("data-drop-trigger");
        var trigger = $(this);
        var colapse = $("*[data-drop-colapse='"+key+"']");
        var icon    = $("*[data-drop-icon='"+key+"']");

        trigger.toggleClass("active closed");
        icon.toggleClass("active closed");
        colapse.toggleClass("active closed");
    });
}
// Cluster stars
function clusterStars(){
    $(".cluster").each(function(){
        $(this).addClass('TESTTTTT');
    });
}

$(document).ready(function(){
    // Header hamburger button
    $('#hamburger-icon').click(function(){
        $(this).toggleClass('open');
    });


    // Filters
    checkAllStars();
    // Generic Dropdowns
    dropdowns();

    clusterStars();
});
