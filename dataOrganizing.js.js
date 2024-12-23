const persons = [
  {
    name: "Rahul",
    age: 32,
    studied: "Computer Science",
    profession: "Software Engineer",
    place: "Pune",
    skills: ["graphic design"],
    hobbies: [
      { name: " Games", interest: ["chess"] },
      { name: "Gardening", interest: [] },
      { name: "trips", interest: [] },
    ],
    pets: [
      {
        type: "dog",
        bread: "golden retriever",
        name: "Max",
        age: 4,
        vaccinted: true,
        activities: ["loves playing fetch in the park"],
      },
    ],
    vehicles: ["car"],
  },
  {
    name: "Ananya",
    age: 30,
    studied: "Computer Science",
    profession: false,
    place: "Bengaluru",
    skills: ["graphic design"],
    hobbies: [{ name: "cooking", interest: ["Italian recipes"] }],
    pets: [
      {
        type: "parrot",
        name: "Kiwi",
        bread: 0,
        age: 3,
        vaccinted: true,
        activities: ["mimics her voice"],
      },
    ],
    vehicles: false,
  },
  {
    name: "Ramesh",
    age: 45,
    studied: false,
    profession: "Business Owner",
    place: "Jaipur",
    skills: [],
    hobbies: [
      { name: "Gardening", interest: ["Rose Gardening"] },
      { name: "reading", interest: ["historical fiction"] },
    ],
    pets: [
      {
        type: "cat",
        name: "Belli",
        bread: "Persian",
        age: 3,
        vaccinted: true,
        activities: ["love lounging in the sun"],
      },
      {
        type: "cat",
        name: "Leo",
        bread: "Persian",
        age: 3,
        vaccinted: true,
        activities: ["love lounging in the sun"],
      },
    ],
    vehicles: false,
  },
  {
    name: "Kavya",
    age: 28,
    studied: false,
    profession: false,
    place: "Chennai",
    skills: ["professional dancer"],
    hobbies: [
      { name: "reading", interest: ["modern fantasy novels"] },
      { name: "watching", interest: ["binge-watching sci-fi shows"] },
    ],
    pets: [
      {
        type: "Rabbit",
        name: "Snowy",
        bread: 0,
        age: 2,
        vaccinted: true,
        activities: ["hopping around her backyard", "nibbling on carrots"],
      },
    ],
    vehicles: false,
  },
];

const display = (attribute) => {
  console.log("---", attribute, "----");
  persons.forEach((person) => {
    console.log(person[attribute]);
  });
};

// display("name");
// display("age");
// display("studied");
// display("profession");
// display("place");
// display("skills");
// display("hobbies");
// display("pets");
// display("vehicles");

// 1. How many individuals are currently employed?
const employed = persons.filter((person) => !person.profession).length;
// console.log(employed);

// 2. How many people own a car?
const carOwners = persons.filter((person) => person.vehicles).length;
// console.log(carOwners);

// 3. How many pets are fully vaccinated?
const allPets = persons.flatMap((person) => person.pets);
const vaccinatedPets = allPets.filter((pet) => pet.vaccinted).length;
// console.log(vaccinatedPets);

// 4. What are the names of all the pets, and what type of animal is each?
const petNamesAndTypes = allPets.map((pet) => {
  return { name: pet.name, type: pet.type };
});
// console.log(petNamesAndTypes);

// 5. Which cities do the individuals live in?
// const cities = persons.map((person) => [person.name, person.place]);
const cities = persons.map((person) => {
  return { name: person.name, place: person.place };
});
console.log(cities);

// 6. How many hobbies are shared across the group? What are they?
const getHobbies = (hobbies) => hobbies.map((hobby) => hobby.name);
const AllHobbies = persons.map((person) => [
  person.name,
  getHobbies(person.hobbies),
]);
// console.log(AllHobbies);

// 7. How many pets belong to people who are currently unemployed?
const unEmployed = persons.filter((person) => !person.profession);
const petCount = unEmployed.map((person) => [person.name, person.pets.length]);
// console.log(petCount);

// 8. What is the average age of the individuals mentioned in the passage?
const sumOfAges = persons.reduce((total, person) => total + person.age, 0);
const averageAge = sumOfAges / persons.length;
// console.log(averageAge);

// 9. How many individuals have studied computer science, and how many of them have pets?
const studiedCSHavingPets = persons
  .filter(
    (person) =>
      person.studied === "Computer Science" && person.pets.length !== 0
  )
  .map((person) => person.name);
// console.log(studiedCSHavingPets);

// 10. How many individuals own more than one pet?
const morePetsPeople = persons
  .filter((person) => person.pets.length > 1)
  .map((person) => person.name);
// console.log(morePetsPeople);

// 11. Which pets are associated with specific favorite activities?
const petsAndActivities = allPets.map((pet) => [pet.name, pet.activities]);
// console.log(petsAndActivities);

// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai?
const bangaloreOrChennai = persons.filter((person) =>
  ["Bengaluru", "Chennai"].includes(person.place)
);
const bangaloreOrChennaiPets = bangaloreOrChennai.map((person) => person.pets);
const namesOfPets = bangaloreOrChennaiPets
  .map((pets) => pets.map((pet) => pet.name))
  .flat();
// console.log(namesOfPets);

// 13. How many vaccinated pets belong to people who do not own a car?
const personDoesNotOwnCar = persons
  .filter((person) => person.vehicles)
  .filter((person) => person.pets.every((pet) => pet.vaccinted));
// console.log(personDoesNotOwnCar);

// 14. What is the most common type of pet among the group?
const petTypes = allPets.map((pet) => pet.type);
const petTypesFreq = petTypes.map((pet) => [
  pet,
  petTypes.reduce(
    (count, petCompare) => (pet === petCompare ? count + 1 : count),
    0
  ),
]);
petTypesFreq.sort((pet1, pet2) => pet1[1] - pet2[1]);
const commonPet = petTypesFreq.at(-1)[0];
// console.log(commonPet);

// 15. How many individuals have more than two hobbies?
const personHaveMoreHobbies = persons.filter(
  (person) => person.hobbies.length > 1
).length;
// console.log(personHaveMoreHobbies);

// 16. How many individuals share at least one hobby with Ramesh?
const rameshHobbies = persons
  .find((person) => person.name === "Ramesh")
  .hobbies.map((hobby) => hobby.name);
const sharingWith = persons.filter((person) =>
  person.hobbies.some(
    (hobby) => rameshHobbies.includes(hobby.name) && person.name !== "Ramesh"
  )
).length;
// console.log(sharingWith);

// 17. Which pet is the youngest, and what is its name?
const minAge = Math.min(...allPets.map((pet) => pet.age));
const youngestPet = allPets.find((pet) => pet.age === minAge).name;
// console.log(youngestPet);

// 18. What types of books are mentioned as interests, and who reads them?
const isPersonReading = (hobbies) =>
  hobbies.some((hobby) => hobby.name === "reading");
const readers = persons.filter((person) => isPersonReading(person.hobbies));

const getBooks = (hobbies) =>
  hobbies
    .filter((hobby) => hobby.name === "reading")
    .map((hobby) => hobby.interest)
    .flat();
const readersInterestIn = readers.map((reader) => [
  reader.name,
  getBooks(reader.hobbies),
]);
// console.log(readersInterestIn);

// 19. How many individuals live in cities starting with the letter "B"?
const personPlaceStartsWithB = persons
  .filter((person) => person.place.at(0) === "B")
  .map((person) => person.name);
// console.log(personPlaceStartsWithB);

// 20. Which individuals do not own any pets?
const personHaveNotPet = persons
  .filter((person) => person.pets.length === 0)
  .map((person) => person.name);
// console.log(personHaveNotPet);
