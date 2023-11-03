//1 Question
var request1= new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
  var data = request1.response;
  var result = JSON.parse(data);
  var res = result.filter((find)=>find.region==="Asia");
  var finalresult = res.map((ele)=>console.log(ele.name.common));
}
//2 Question
var request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload = function () {
  var data = request2.response;
  var result1 = JSON.parse(data);
  var res1 = result1.filter((find)=>find.population<200000)
  var finalresult = res1.map((ele)=>console.log(ele.name.common));
}


//3 Question
var request3 = new XMLHttpRequest();
request3.open("GET", "https://restcountries.com/v3.1/all", true);
request3.send();
request3.onload = function () {
  var data = request3.response;
  var result2 = JSON.parse(data);
//   console.log(result);
  var res2 = result2.forEach((ele)=>console.log(`${ele.name.common},${ele.capital},${ele.flag}`));
}

//4 Question
var request4 = new XMLHttpRequest();
request4.open("GET", "https://restcountries.com/v3.1/all", true);
request4.send();
request4.onload = function () {
  var data = request4.response;
  var result3 = JSON.parse(data);
  var res3 = result3.reduce((acc,crr)=>acc+crr.population,0)
  console.log(res3);
}

//5 Question
var request5 = new XMLHttpRequest();
request5.open("GET", "https://restcountries.com/v3.1/all", true);
request5.send();
request5.onload = function () {
  var data = request5.response;
  var result5 = JSON.parse(data);
  console.log(result5);
  var res4 = result5.filter((ele)=> ele.currencies && ele.currencies.USD);
  res4.forEach((ele)=>console.log(ele.name.common));

}