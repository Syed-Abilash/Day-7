//1 Question
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res = result.filter((find)=>find.region==="Asia");
  var finalresult = res.map((ele)=>console.log(ele.name.common));
}
//2 Question
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result1 = JSON.parse(data);
  var res1 = result1.filter((find)=>find.population<200000)
  var finalresult = res1.map((ele)=>console.log(ele.name.common));
}


//3 Question
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result2 = JSON.parse(data);
//   console.log(result);
  var res2 = result2.forEach((ele)=>console.log(`${ele.name.common},${ele.capital},${ele.flag}`));
}

//4 Question
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result3 = JSON.parse(data);
  var res3 = result3.reduce((acc,crr)=>acc+crr.population,0)
  console.log(res3);
}

//5 Question
// var request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/all", true);
// request.send();
// request.onload = function () {
//   var data = request.response;
//   var result = JSON.parse(data);
// //   console.log(result);
//   var res = result.forEach((ele)=>console.log(`${ele.currencies.DOP.name},${ele.currencies.DOP.symbol}`));
// }