function courseMod(name, code, startDate, endDate, courseName, Students){

}
var Mathematics = {
"name":"Fractions",
"code": "MFR04", 
"startDate":"16/09/2020",
"endDate":"24/06/2021",
"courseName":"Mathematics",
"Students": ["Girolamo Cardano", "Leonahard Euler", "Carl Friedrich Gauss"]
}
var Computer_science = {
"name":"Programming", 
"code": "CSP08", 
"startDate":"18/09/2020",
"endDate":"20/06/2021",
"courseName":"Computer science",
"Students": ["Sergey Brin", "Peter Sunde", "Larry Page"]
}
var English = {
"name":"Poetry", 
"code": "ENP07", 
"startDate":"10/09/2020",
"endDate":"21/07/2021",
"courseName":"English",
"Students": ["Wordworth William", "Wilde Oscar", "Shakespeare William"]  
}   
var Spanish = {
"name":"Speaking", 
"code": "SPS08", 
"startDate":"25/09/2020",
"endDate":"16/07/2021",
"courseName":"Spanish",
"Students": ["Pablo Picasso", "El Cid", "Hernan Cortes"]  
}
var Science = { 
"name":"Biology", 
"code": "SCB09", 
"startDate":"28/09/2020",
"endDate":"10/08/2021",
"courseName":"Science",
"Students": ["Albert Einsten", "Marie Curie", "Isaac Newton"]  
}

var myArray = [Mathematics, Computer_science, English, Spanish, Science];
var courses = myArray.filter((i)=>{
    return i.course == "Mathematics";
});
console.log(array);
console.log(courses);