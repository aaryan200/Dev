// var keyword are scoped to the immediate function body (hence the function scope) while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope)

// if var is not used, it becomes global

//variables declared with var keyword are hoisted (initialized with undefined before the code is run) which means they are accessible in their enclosing scope even before they are declared

//let variables are not initialized until their definition is evaluated. Accessing them before the initialization results in a ReferenceError
var a = -1 % 3;
console.log(a);
var nam="Aaryan";
console.log(nam);
let sec_nam="Kaushik";
console.log(sec_nam);
var a=5;
a++;
console.log(a);
a--;
console.log(a);
a+=5;
console.log(a);
a-=2;
console.log(a);
var str="I am \"Aaryan\""; // backslash is escape character
console.log(str);

var str= 'I am "Aaryan"';
console.log(str);
var str= `I am ' "Aaryan" '`;
console.log(str);
console.log(str.length);
// Strings are immutable
function hi(name) {
    var result="";
    result+="Hi "+name;
    return result;
}
console.log(hi(str));

var arr=[[1,2,3],[4,5],[6],"hi"]
console.log(arr)

arr[0].push(4)
console.log(arr)
var rem_elem= arr.pop(); // from end
console.log(rem_elem); //"hi"
var b= arr.shift(); // from beginning
console.log(b);
arr.unshift([1,2,3,4]) // push from beginning
console.log(arr)
var a1= typeof 'a'; // string, number, object, undefined etc.
console.log(a1);
console.log(JSON.stringify([1,2,3]));
if (true) console.log("True");
if (3=='3') console.log("This is true");
if (3!=='3') console.log("This is false");
if (10=="10" && 1) console.log("and is not used here, use embarssent")

var dict={"Aaryan":100,"Hi":"Hi"}
console.log(dict["Aaryan"])
console.log(dict["Hi"])
delete dict["Hi"];
console.log(dict);