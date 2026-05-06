const facultyData = [
  ["Aman", "JavaScript", 4.5],
  ["prateek", "Python", 4.8],
  ["Dheeraj", "Java", 4.2],
  ["Rahul", "C++", 4.0],
];

facultyData.forEach((element) => {
  console.log(element);
});

// json data
const facultyDataJson = [
  {
    name: "Rahul Sharma",
    phone: "+91-9876543210",
    city: "Bhopal",
    dob: "1998-05-14",
    profession: "Software Engineer",
  },
  {
    name: "Priya Verma",
    phone: "+91-9123456780",
    city: "Indore",
    dob: "1995-11-22",
    profession: "Doctor",
  },
  {
    name: "Aman Gupta",
    phone: "+91-9988776655",
    city: "Delhi",
    dob: "2000-03-08",
    profession: "Graphic Designer",
  },
  {
    name: "Sneha Patel",
    phone: "+91-9012345678",
    city: "Mumbai",
    dob: "1997-07-19",
    profession: "Teacher",
  },
  {
    name: "Vikram Singh",
    phone: "+91-9090909090",
    city: "Jaipur",
    dob: "1993-01-30",
    profession: "Business Analyst",
  },
];

facultyDataJson.forEach((element) => {
  console.log(element.name);
});

console.log(facultyDataJson);

console.log(facultyDataJson[1]["name"]);
console.log(facultyDataJson[1].phone);

let studentData = {
    name: "Aman",
    age: 25,
    city: "Bhopal",
    profession: "Software Engineer"
}
console.log(Object.keys(studentData));
console.log(Object.values(studentData));
console.log(Object.entries(studentData))

let arr = [23, 45, 56, 78, 90, 12, 34, 67, 89, 100, 11, 22, 33, 44, 55, 66, 77, 88, 99];
arr.sort((a, b) => a - b);
console.log(arr);
console.log(arr.find((val) => val > 50));
console.log(arr.findIndex((val)=> val === 23));
console.log(arr.findLastIndex((val) => val === 89));


let arr1 = [12, 23, 34, 45, 56];
console.log(arr1.filter((val)=> val > 20));

console.log(arr1.find((val) => val > 20));


console.log(arr1.slice(1, 4));


let string = "This$is a Web Development Course";
console.log(string.split("$"));




