// JSON object
const data = [
  {
    product:'apple',
    productDetials: [
      {
        model: "13 pro",
        price: 80000,
        modelNumber: 20220321,
        color: "black",
      },
      {
        model: "13",
        price: 70000,
        modelNumber: 20201210,
        color: "black",
      },
      {
        model: "13 pro max",
        price: 90000,
        modelNumber: 2021,
        color: "black",
      },
    ],
  },
];

// "name": "John",
// "age": 22,
// "hobby": {
// "reading" : true,
// "gaming" : false,
// "sport" : "football"
// },
// "class" : ["JavaScript", "HTML", "CSS"]
// }

// accessing JSON object
console.log(data.product); // John
/ // { gaming: false, reading: true, sport: "football"}

// console.log(data.productDetials.model); // football
console.log(data.productDetials[1]); // HTML
