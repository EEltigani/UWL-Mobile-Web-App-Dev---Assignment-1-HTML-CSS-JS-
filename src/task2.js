
function courseMod(name, code, startDate, endDate, courseName, Students){
    this.name = name; //Displays the name of the student
    this.code = code; //Displays the course code
    this.start = startDate; //Displays start date
    this.end = endDate; //Displays end date
    this.course = courseName; //Displays course name
    this.Student = Students; //Displays students
}

var Mathematics = new courseMod("Percentages", "M504", "16/09/2020", "24/08/2021", "Mathematics", ["James Brown", "Fernando Torres", "Barry Chuckle"]);
var Computer_Science = new courseMod("Programming", "CS088", "18/09/2020", "26/06/2021", "Computer science", ["Henry Osly", "Pete Parker", "Myles Morales"]);
var English = new courseMod("Poetry", "EN092", "10/09/2020", "21/08/2021", "English", ["Thornbatch Cayde", "Oscar Wilder", "Jamie Olives"]);
var French = new courseMod("Listening", "FR08", "25/09/2020", "16/09/2021", "French", ["Pablo Escobar", "Barry Allen", "Bruce Wayne"]);
var Additional_Science = new courseMod("Physics", "AS099", "28/09/2020", "11/09/2021", "Additional Science", ["Boruto Uzumaki", "Ichigo Kurosaki", "Kakarot Goku"]);

var myArray = [Mathematics, Computer_Science, English, French, Additional_Science];

var courses = myArray.filter((i)=>{
    return i.course == "Mathematics";
});

var af = myArray.map((af) => {
    return af.course.toUpperCase(); //Will display text in upper-case
});

console.log(myArray);
console.log(courses);
console.log(af);
