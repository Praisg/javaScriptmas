import { toysRequested } from './data.js';

/*
The run up to Christmas is quite a data-intensive time for Santa. In order to understand market trends, Santa's Data Elves have collated sample children’s wish list data from 4 locations and now need to know which was the most popular toy requested overall. This will help with procurement for next year. 

**Task**
- Your task is to find the most requested toy from the array of objects “toysRequested”. But remember: some toys appear in more than one location!

Expected output: "The most popular toy is 🎲 board games with 9000 requests."

**Stretch Goal**
- Complete this challenge using the .flatMap() method to work with the various "toys" arrays.

*/ 

function findMostPopularToy(toysRequested) {
    const toyCounts = {};

    // Loop through each location
    toysRequested.forEach(location => {
        // Loop through each toy in the location
        location.toys.forEach(toy => {
            const [toyName, count] = Object.entries(toy)[0];
            // Add the count to the toyCounts object
            toyCounts[toyName] = (toyCounts[toyName] || 0) + count;
        });
    });

    // Find the toy with the highest count
    let mostPopularToy = '';
    let maxCount = 0;
    for (const [toy, count] of Object.entries(toyCounts)) {
        if (count > maxCount) {
            mostPopularToy = toy;
            maxCount = count;
        }
    }

    return `The most popular toy is ${mostPopularToy} with ${maxCount} requests.`;
}

console.log(findMostPopularToy(toysRequested)); // Expected output: "The most popular toy is 🎲 board games with 9000 requests."