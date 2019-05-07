// var hello;
//
// function onLoad(){
//   console.log("running onload function");
//   hello= "good day";
//   console.log(hello);
// }
//
// onLoad();
// console.log(hello);

//Exercise based on Shopping List from Tuesday//
var days= ["Monday", "Tuesday", "Wednesday"]
//var days= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
var tasks= [];

for (var i = 0; i < days.length; i++){
  tasks.push([]);
}

var start = prompt("Do you want to add tasks for the week?");

console.log(days);
console.log(tasks);
