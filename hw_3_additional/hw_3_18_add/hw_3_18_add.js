let usersWithId = [
  { id: 1, name: "vasya", age: 31, status: false },
  { id: 2, name: "petya", age: 30, status: true },
  { id: 3, name: "kolya", age: 29, status: true },
  { id: 4, name: "olya", age: 28, status: false },
];

let citiesWithId = [
  { user_id: 3, country: "USA", city: "Portland" },
  { user_id: 1, country: "Ukraine", city: "Ternopil" },
  { user_id: 2, country: "Poland", city: "Krakow" },
  { user_id: 4, country: "USA", city: "Miami" },
];

let newArray = [];

for (let id = 0; id < usersWithId.length; id++) {
  for (let user_id = 0; user_id < citiesWithId.length; user_id++) {
    if (usersWithId[id].id === citiesWithId[user_id].user_id) {
      newArray.push({
        id: usersWithId[id].id,
        name: usersWithId[id].name,
        age: usersWithId[id].age,
        status: usersWithId[id].status,
        address: {
          user_id: citiesWithId[user_id].user_id,
          country: citiesWithId[user_id].country,
          city: citiesWithId[user_id].city,
        },
      });
    }
  }
}
console.log("newArray:", newArray);
