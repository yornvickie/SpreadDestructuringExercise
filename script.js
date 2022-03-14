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

console.log(disneyJunior);

// 4
const avengers = {
    warMachine: "James Rhodes",
    theHulk: "Bruce Banner"
}

let {warMachine, theHulk} = avengers;

console.log(avengers);

const moreAvengers = {
    blackWidow: "Natasha Romanoff",
    hawkeye: "Clint Barton",
    ironMan: "Tony Stark"
}

let {nat, ...others} = moreAvengers;

console.log(moreAvengers);