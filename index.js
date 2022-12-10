let num= []
function findEven (n) {
    for(let i=4;i<n;i+=2 ) {
        num+= i
     
        }

    }

findEven(20)
console.log(num)
let arr =["1", "11" , "111" , "1111" ,"11111"];
let text="";
function numberOneTriangle(){
    for (let i=0; i< 5;i++) {
        text += arr[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
}
numberOneTriangle()
