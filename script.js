// 1

const mcuShows = ["Loki", "Moon Knight"];

const starWarsShows = ["The Mandalorian", "The Book of Boba Fett"];

const disneyPlusShows = [...mcuShows, ...starWarsShows, "The Beatles: Get Back"];

console.log(disneyPlusShows);

// 2
const netflixMovies = {
    action: "Extraction",
    crime: "The Irishman"
}

const amazonPrimeMovies = {
    action: "The Tomorrow War",
    drama: "One Night in Miami"
}

const streamingMovies = {
    ...amazonPrimeMovies,
    ...netflixMovies,
    musical: "Hamilton"
}

console.log(streamingMovies);

// 3
const disneyJunior = ["Mickey Mouse Clubhouse", "Spidey and His Amazing Friends"];

let [mickey, spidey] = disneyJunior;

console.log(mickey, spidey);

// 4
const avengers = {
    warMachine: "James Rhodes",
    theHulk: "Bruce Banner"
}

let {warMachine, theHulk} = avengers;

console.log(warMachine, theHulk);

const moreAvengers = {
    blackWidow: "Natasha Romanoff",
    hawkeye: "Clint Barton",
    ironMan: "Tony Stark"
}

let {blackWidow: nat, ...others} = moreAvengers;

console.log(nat, others);

// BONUS

const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

  const {first, second, third} = bonus;
  const all = [...first, ...second, ...third];
  console.log(all);

//   OR
// const all = [
    // ...bonus["first"],
    // ...bonus["second"],
    // ...bonus["third"]
// ];

const [one, two, three, four, five, six, seven, eight, nine] = all;
console.log(one);