//----------------------------------------------------------------------------
// Trips Array
//----------------------------------------------------------------------------

const arrTrips = [
    {
        name: "Haiti Cruise",
        price: 18000,
        description: "Embark on a 5-day Haiti cruise for adventure and tranquility! Enjoy ocean-view cabins, delectable dining, and thrilling excursions. Experience rich Haitian culture, pristine beaches, and rejuvenating onboard activities. Unforgettable moments await on this Caribbean journey.",
        image: "Haiti.jpg",
        tripLength: "short",
        tripNrDays: "5",
        tripDestination: "single",
        roundTrip: "round",
        rowboatSpecial:"special",
    },
    {
        name: "Monaco Cruise",
        price: 22000,
        description: "Embark on a 5-day cruise to Monaco, the pinnacle of luxury and glamour! Enjoy elegant staterooms, gourmet dining, and attentive service. Explore opulent casinos, upscale boutiques, and iconic landmarks in this enchanting Principality. Create unforgettable memories in the Mediterranean's most exclusive destination.",
        image: "Monaco.jpg",
        tripLength: "short",
        tripNrDays: "5",
        tripDestination: "multi",
        roundTrip: "round",
        rowboatSpecial:"",
    },
    {
        name: "Greece Cruise",
        price: 23000,
        description: "Embark on a captivating 14-day cruise to Greece, where ancient wonders and stunning landscapes await! Enjoy panoramic sea views, indulge in Greek delicacies, and explore iconic ruins and idyllic islands. Create unforgettable memories on this enriching journey.",
        image: "Greece.jpg",
        tripLength: "long",
        tripNrDays: "14",
        tripDestination: "single",
        roundTrip: "round",
        rowboatSpecial:"special",
    },
    {
        name: "Portugal Cruise",
        price: 16000,
        description: "Embark on a captivating 10-day Portugal cruise, where history, culture, and natural wonders await! Enjoy stunning sea views, delightful Portuguese cuisine, and unforgettable experiences. Explore historic cities, coastal towns, and lush landscapes. Make cherished memories on this enriching journey.",
        image: "Portugal.jpg",
        tripLength: "long",
        tripNrDays: "10",
        tripDestination: "multi",
        roundTrip: "",
        rowboatSpecial:"",
    },
    {
        name: "Transatlantic Cruise",
        price: 76000,
        description: "Sail on a 21-day transatlantic cruise, a grand journey across the Atlantic. Revel in sea-view cabins, exquisite dining, and onboard activities. Explore multiple ports, all while embracing the serenity of the open ocean. Join us for an ocean odyssey like no other!",
        image: "trans atlantic.jpeg",
        tripLength: "long",
        tripNrDays: "21",
        tripDestination: "multi",
        roundTrip: "round",
        rowboatSpecial:"",
    },
    {
        name: "Hawaiian Cruise",
        price: 16000,
        description: "Embark on a 5-day Hawaiian cruise and escape to paradise. Indulge in ocean-view cabins, savor Hawaiian flavors, and explore the islands with guided excursions. Join us for an unforgettable journey through the Pacific's gems. Aloha!",
        image: "Hawaii.jpeg",
        tripLength: "short",
        tripNrDays: "5",
        tripDestination: "single",
        roundTrip: "",
        rowboatSpecial:"special",
    },
    
];

let appliedFilter = "";



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

    filterSortTrips();
    
});

//----------------------------------------------------------------------------
// Load all trips
//----------------------------------------------------------------------------

function loadTrips(tripsToShow) {

    console.log(tripsToShow);

    // Clear all elements in trips container

    $("#tripsContainer").empty();

    // loop through trips

    for (let i = 0; i < tripsToShow.length; i++) {
        const trip = tripsToShow[i];

        console.log(trip);

        // 1:Select trip container and add current array to it
        $("#tripsContainer").append($("#cardTemplate").html());

        // create a variable which contains the most recently added card
        let currentChild = $("#tripsContainer").children().eq(i);

        // set the content for the current card from the array
        $(currentChild).find("#nameText").text(trip.name);
        $(currentChild).find("#priceText").text(trip.price);
        $(currentChild).find("#descriptionText").text(trip.description);
        $(currentChild).find(".card-img-top").attr('src', '/assets/' + trip.image)

       
        $(currentChild).find("#descriptionText").hide();

    }

};

// ---------------------------------------------------------------
// When the filter clicked
// ---------------------------------------------------------------

$("input[name='filterRadio']").click(function() {
    appliedFilter = $(this).attr('value');

    console.log(appliedFilter);
    filterSortTrips();

});


function filterSortTrips() {
    
    let filteredSortedArrTrips = [];

    // Filter trips

    if (appliedFilter) {
        filteredSortedArrTrips = arrTrips.filter(trip => trip.tripLength == appliedFilter);
    } else {
        filteredSortedArrTrips = arrTrips;
    }
    
    
    loadTrips(filteredSortedArrTrips);

}









// ---------------------------------------------------------------
// When the card is clicked
// ---------------------------------------------------------------
$("#tripsContainer").on('click','.card', function() {

    // toggle price and description
    $(this).find("#descriptionText").toggle();
    $(this).find("#priceText").toggle();
    
    

    // Resize the image to fit the additional content 
    $(this).find(".card-img-top").toggleClass("small");
    
})




// when "Remove" button is clicked
$("#btn-all").click(function (){
    $(".all").hide("slow");
})

$("#btn-1").click(function (){
    $(".row-1").hide("slow");
})

$("#btn-2").click(function (){
    $(".row-2").hide("slow");
})

$("#btn-3").click(function (){
    $(".row-3").hide("slow");
})