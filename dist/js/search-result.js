// Price Range slider bar
$( function() {
    var sliderRange = $( "#slider-range" );
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
} );

$(document).ready(function(){
    $('#hamburger-icon').click(function(){
        $(this).toggleClass('open');
    });
});
