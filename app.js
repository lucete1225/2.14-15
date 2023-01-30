/* 2.14 */
/* 
const age = parseInt(prompt("how old are you?"));

console.log(isNaN(age)); //15 > false, asasda > true NaN

if(condition){
    //conditon == true boolean 이어야 한다.
} else{
    //conditon == false
}// 참이면 if 아니면 else 실행*/

/* */
/* 
const age = parseInt(prompt("how old are you?"));

if(isNaN(age)){
    console.log("please write a number");// asdadasdasda(true) > please write a number
    //conditon == true boolean 이어야 한다. condition
} else{
    console.log("thank you for writing your age") // 15(false) > thank you for writing your age 
}*/



/* 2.15 */
/* 
const age = parseInt(prompt("how old are you?"));

if(isNaN(age)){
    console.log("please write a number");// asdadasdasda(true) > please write a number
    //conditon == true boolean 이어야 한다. condition
} else if(age < 18) {// true(age <18) >  you are too young. false(18< age) > you can drink
    console.log("you are too young.");
}else if(age >= 18 && age <= 50){ // && and(곱하기), || or(더하기)
    console.log("you can drink");
}else {
    console.log("you can drink");
}*/

/* 
const age = parseInt(prompt("how old are you?"));

if(isNaN(age)){
    console.log("please write a number");// asdadasdasda(true) > please write a number
    //conditon == true boolean 이어야 한다. condition
} else if(age < 18) {// true(age <18) >  you are too young. false(18< age) > you can drink
    console.log("you are too young.");
}else if(age >= 18 && age <= 50){ // && and(곱하기), || or(더하기)
    console.log("you can drink");
}else if(age > 50 && age <= 80){
    console.log("you should exercise");
}else if(age > 80){
    console.log("you can do whatever you want." );
}*/
// asdasda > please write a number, 17 > you are too young, 18 > you can drink, 51 > you should exercise

// and &&(곱하기) 10=0, 00=0, 01=0, 11=1
// or ||(더하기) 00=0, 01=1, 10=1, 11=1

/* 
const age = parseInt(prompt("how old are you?"));

if(isNaN(age)|| age < 0){
    console.log("please write a number");// asdadasdasda(true) > please write a number
    //conditon == true boolean 이어야 한다. condition
} else if(age < 18) {// true(age <18) >  you are too young. false(18< age) > you can drink
    console.log("you are too young.");
}else if(age >= 18 && age <= 50){ // && and(곱하기), || or(더하기)
    console.log("you can drink");
}else if(age > 50 && age <= 80){
    console.log("you should exercise");
}else if(age > 80){
    console.log("you can do whatever you want." );
}
// - 50 > please write a number
*/


/* 2.16 */ 
/*
const age = parseInt(prompt("how old are you?"));

if(isNaN(age)|| age < 0){
    console.log("please write a number");// asdadasdasda(true) > please write a number
    //conditon == true boolean 이어야 한다. condition
} else if(age < 18) {// true(age <18) >  you are too young. false(18< age) > you can drink
    console.log("you are too young.");
}else if(age >= 18 && age <= 50){ // && and(곱하기), || or(더하기)
    console.log("you can drink");
}else if(age > 50 && age <= 80){
    console.log("you should exercise");
}else if(age === 100){
    console.log("wow you are wise.");
}else if(age > 80){
    console.log("you can do whatever you want." );
}*/ 
/*
else if(age === 100){
    console.log("wow you are wise.");
}else if(age > 80){
    console.log("you can do whatever you want." );
}
*/ //이면 100이면 wow you are wise. 실행. 99, 88, 90 이면 you can do whatever you want. 실행
/*
else if(age > 80){
    console.log("you can do whatever you want." );
}else if(age === 100){
    console.log("wow you are wise.");
}
*/ // 이면 80이 100보다 먼저 때문에 120, 100, 110 입력시 you can do whatever you want. 순서의 중요성

/* 
const age = parseInt(prompt("how old are you?"));

if(isNaN(age)|| age < 0){
    console.log("please write a number");// asdadasdasda(true) > please write a number
    //conditon == true boolean 이어야 한다. condition
} else if(age < 18) {// true(age <18) >  you are too young. false(18< age) > you can drink
    console.log("you are too young.");
}else if(age >= 18 && age <= 50){ // && and(곱하기), || or(더하기)
    console.log("you can drink");
}else if(age > 50 && age <= 80){
    console.log("you should exercise");
}else if(age === 100){
    console.log("wow you are wise.");
}else if(age > 80){
    console.log("you can do whatever you want." );
}
*/

if((a&&b)||(c&&d)){

}












