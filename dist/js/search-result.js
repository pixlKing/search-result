// Price Range slider bar
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 2000,
        values: [ 200, 1800 ],
        slide: function( event, ui ) {
            $("#amount .min").html( "$" + ui.values[ 0 ] );
            $("#amount .max").html( "$" + ui.values[ 1 ] );
        }
    });
    $("#amount .min").html( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $("#amount .max").html( "$" + $( "#slider-range" ).slider( "values", 1 ) );
    //$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );
