/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
 function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];
    
    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for(let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];
            
            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);
    }

    return listings;
}

generateListings(20);

//forEach
generateListings(37).forEach(listingSize=>
    console.log(listingSize.size)
    
);

//map

 let Prices=generateListings(37).map(listingPriz=>
    listingPriz.price
    
);
console.log(Prices);

//Filter
console.log('here is filter');
let Cheap=generateListings(37).filter(cheapPrice=>cheapPrice.price< 2000).
map(cheapPrice=>
cheapPrice.price);
console.log(Cheap);


const filter = {
    type: 'farm',
    price : 5000,
    hasGarden :true,
    size : 1000


};
let listings=generateListings(20);

function filterListings(list,filter){
return list.filter(listing=>listing.type==filter.type||true)
}
const cheapFarmListings = filterListings(listings, filter);
console.log(cheapFarmListings);