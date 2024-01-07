// Problem 1
// Print "Masai School" in the console followed by "A Transformation in Education" in next line

let A = "Masai School";
let B = "A Transformation in Education";

console.log(A);
console.log(B);

// Problem 2
// Define a variable called name with your Name as the assigned value
// Print the value stored in the variable name
// Change the variable to store your father's name
// Print the value stored in the variable name
// Change the variable again to store your mother's name.
// Print the value stored in the variable name

var Myname = "Subham Singh";

console.log(Myname);

Fathername = "Satendra Singh";

console.log(Fathername);

Mothername = "Manju Singh";

console.log(Mothername);

// Problem 3
// Create a variable name to store your name
// Create a variable age to store your age
// Concatenate and console them in a new string to get the output like this : ("My name is"+ name +"and my age is"+ age +".")

let Myname = "Subham Singh";

let age = 27;
console.log(Myname, age);
console.log(typeof(Myname), typeof(age));

// PROBLEM 4
// Problem 4
// Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
// Print the report card of the student (You can make it look nice by using some keyboard symbols )
// Explore ASCII ART (https://en.wikipedia.org/wiki/ASCII_art (Links to an external site.)) or Text Art (https://fsymbols.com/text-art/ (Links to an external site.)) for some inspiration

let student = {
    name: "Subham Singh",
    school: "Masai School",
    grade: "12",
    section: "B",
    rollno: "Cap07",
  
    marks: {
      subject1 : 95,
      subject2 : 98,
      subject3 : 99
    }
  
  };
  
  console.log( "Name: " + student.name);
  console.log("School:" + student.school);
  console.log("Grade:" + student.grade + " - Section " + student.section);
  console.log("Roll No:" + student.rollno);
  console.log("Marks in Subjects:");
  console.log("Subject 1: " + student.marks.subject1);
  console.log("Subject 2: " + student.marks.subject1);
  console.log("Subject 3: " + student.marks.subject1);