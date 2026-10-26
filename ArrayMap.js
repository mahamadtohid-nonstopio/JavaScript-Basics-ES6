/*
Needs callback function to be passed as an argument to the map() method. The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/ 

const courses =["JavaScript", "Python", "Java", "C++", "C#", "Ruby"];

const newCourses = courses.map((course) => {
    return course.toUpperCase();
});

console.log(newCourses);