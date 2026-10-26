const details = {
    name: "John",
    age: 30,
    city: "New York"
}


const data = { name:username, age, city } = details;

for(const key in data) {
    console.log(data[key.valueOf()]);
}