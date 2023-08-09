//----------------------------------------------------------------------------
// Trips Array
//----------------------------------------------------------------------------

const arrTrips = [
    {
        name: "Haiti Cruise",
        price: 18000,
        description: "Embark on a 5-day Haiti cruise for adventure and tranquility! Enjoy ocean-view cabins, delectable dining, and thrilling excursions. Experience rich Haitian culture, pristine beaches, and rejuvenating onboard activities. Unforgettable moments await on this Caribbean journey.",
        image: "Haiti.jpg"
    },
    {
        name: "Monaco Cruise",
        price: 22000,
        description: "Embark on a 7-day cruise to Monaco, the pinnacle of luxury and glamour! Enjoy elegant staterooms, gourmet dining, and attentive service. Explore opulent casinos, upscale boutiques, and iconic landmarks in this enchanting Principality. Create unforgettable memories in the Mediterranean's most exclusive destination.",
        image: "Monaco.jpg"
    },
    {
        name: "Greece Cruise",
        price: 23000,
        description: "Embark on a captivating 14-day cruise to Greece, where ancient wonders and stunning landscapes await! Enjoy panoramic sea views, indulge in Greek delicacies, and explore iconic ruins and idyllic islands. Create unforgettable memories on this enriching journey.",
        image: "Greece.jpg"
    },
    {
        name: "Portugal Cruise",
        price: 16000,
        description: "Embark on a captivating 10-day Portugal cruise, where history, culture, and natural wonders await! Enjoy stunning sea views, delightful Portuguese cuisine, and unforgettable experiences. Explore historic cities, coastal towns, and lush landscapes. Make cherished memories on this enriching journey.",
        image: "Portugal.jpg"
    }
 
];


//----------------------------------------------------------------------------
// When the document loads
//----------------------------------------------------------------------------

$(document).ready(function(){

    console.log("Hello World!");

    //----------------------------------------------------------------------------
    // Homepage
    
    // when the image loads, animate up
    $(".hero-image").animate({top: '-=100px'})


     //----------------------------------------------------------------------------
    // Trips Page

    loadTrips();
    
});

//----------------------------------------------------------------------------
// Load all trips
//----------------------------------------------------------------------------

function loadTrips() {

    console.log(arrTrips);

    for (let i = 0; i < arrTrips.length; i++) {
        const trip = arrTrips[i];

        console.log(trip);

        // 1:Select trip container and add current array to it
        $("#tripsContainer").append($("#cardTemplate").html());

        // create a variable which contains the most recently added card
        let currentChild = $("#tripsContainer").children().eq(i+1);

        // set the content for the current card from the array
        $(currentChild).find("#nameText").text(trip.name);
        $(currentChild).find("#priceText").text(trip.price);
        $(currentChild).find("#descriptionText").text(trip.description);
        $(currentChild).find(".card-img-top").attr('src', '/assets/' + trip.image)

       
        $(currentChild).find("#descriptionText").hide();

    }

};


