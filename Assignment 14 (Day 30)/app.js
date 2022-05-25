// Fetching Data from API and printing it

// let products = fetch("https://jsonplaceholder.typicode.com/users", {method: "GET"});
//
// products.then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))


// async function displayUsers() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "GET"
//     });
//
//     let data = await response.json();
//     console.log(data);
// }
//
// displayUsers();



// Usage of Spread Operator

// function spreadCheck(sprd) {
//     let sprdArray = [...sprd];
//     console.log(...sprd);
//     console.log(sprdArray);
// }
//
// spreadCheck([1, 2, 3, 4, 5]);
// spreadCheck("Ajay Sharma");



// Usage of Rest Operator

// function restCheck(mark1, mark2, ...restMarks) {
//     console.log(mark1, mark2);
//     console.log(restMarks);
// }
//
// restCheck(50, 60, 40, 30, 20, 55, [1, 2, 3, 4, 5]);
// restCheck(50, 60, 40, 30, 20, 55);
// restCheck(500, 200, 100, 40, 30, 20, 55);



// Mapping Data from API

// async function displayUsers() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "GET"
//     });
//
//     let data = await response.json();
//     data.map((user) => {
//         console.log(user);
//         console.log(user.name);
//         console.log(user.username);
//         console.log(user.email);
//         console.log(user.phone);
//     });
// }
//
// displayUsers();



// Json Methods Stringify and json.

async function displayUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET"
    });

    let data = await response.json();
    
    let jsonString = JSON.stringify(data);
    console.log(jsonString);

    let json = JSON.parse(jsonString);
    console.log(json);
}

displayUsers();