/*
    Assignment 4
    {ABhishek Paul}
*/

$(document).ready(function(){
    var htmlEle= '';

    const success = (position) => {
        //$('#youarehere').eq(0).html("The latitude is: " + position.coords.latitude);
        $('#latitude').eq(0).html(`The latitude is: ${position.coords.latitude}`);
        var $lat2 = position.coords.latitude;
        console.log($lat2);
        $('#longitude').eq(0).html(`The longitude is: ${position.coords.longitude}`);
        var $lon2 = position.coords.longitude;
        console.log($lon2);        
        localStorage.setItem("lat1", position.coords.latitude);  
        localStorage.setItem("lon1", position.coords.longitude);
        console.log(position);

    if (localStorage.getItem('lat1') && localStorage.getItem('lon1')  !== null) {
        htmlEle += '<div id="localStoragelat1"> Location in localStorage lat: '+localStorage.getItem('lat1')+'</div>';
        htmlEle += '<div id="localStoragelon1">Location in localStorage lon: '+localStorage.getItem('lon1')+'</div>';
        $('#content').append(htmlEle); 
        //console.log(calcDistance(localStorage.getItem('lat1'), localStorage.getItem('lon1'), $lat2, $lon2));
        
        var toRadians = function(num) {
            htmlEle += '<div id=" "> The person has moved from: '+num * Math.PI / 180+'</div>';
            $('#content').append(htmlEle); 
            console.log( num * Math.PI / 180);
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(localStorage.getItem('lat1'));
        var φ2 = toRadians(position.coords.latitude);
        var Δφ = toRadians(position.coords.latitude-localStorage.getItem('lat1'));
        var Δλ = toRadians(position.coords.longitude-localStorage.getItem('lon1'));        
        var φ1 = toRadians(localStorage.getItem('lat1'));


        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        console.log( R * c );
        return ( R * c );        
        }
        else{
            $('#content').eq(0).html(`Welcome!`);
        }




    };
        const fail = (error) => {
        $('#content').eq(0).html(`Geo Position not available!`); 





    };
    navigator.geolocation.getCurrentPosition(success, fail);


    // function calcDistance(lat1, lon1, lat2, lon2){
    //     var toRadians = function(num) {
    //         return num * Math.PI / 180;
    //         console.log( num * Math.PI / 180); 
    //     }
    //     var R = 6371000; // radius of Earth in metres
    //     var φ1 = toRadians(lat1);
    //     var φ2 = toRadians(lat2);
    //     var Δφ = toRadians(lat2-lat1);
    //     var Δλ = toRadians(lon2-lon1);


        // var φ1 = toRadians(localStorage.getItem('lat1'));
        // var φ2 = toRadians(position.coords.latitude);
        // var Δφ = toRadians(position.coords.latitude-localStorage.getItem('lat1'));
        // var Δλ = toRadians(position.coords.longitude-localStorage.getItem('lon1'));

    //     var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
    //     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    //     return ( R * c );

    // }
});

    
    // your code here



    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript


