In javascript body, there cannot be any </script> exist.

If it exist, browser will close the script.

So to escape it, we need to escape the “/”.
<script>
function hello(){
    alert(“<\/hello>”)
}
</script>


To include the js file from an external file, src attribute is required.
value of src is a URL linked to a file. 

<script type = text/javascript src=”**”> </script>

In XHTML, we can omit script closing tag. 
<script src = “” />
It will not support HTML, especially Internet Explorer. 

If we use src attribute, we usally include a js extension file.
Actually, it is ok use other extension. Since browser does not check
So we can use other type such as php and jsp which is able to 
return js file.

No matter how code is loaded and interpreted, the script elements are
interpreted in the order in which they are appeared as long as 
defer and async attribute do not appear.

Tradionally, <script> is placed within <head> element on a page.
However, consider there are lots of javascript loading, it will cause 
the web page loading slowly. Modern web applications typically include all of js reference
in the body tag, after the page content.
In this way, the content is rendered before js file is loaded. 
Time spent on blank is reduced. 

In HTML 4.01 defines defer attribute for the script tag. 
defer means downloading is continuing, but it will not execute before the end of 
html tag.

<!DOCTYPE html>
<html>
    <head>
        <title>Example
        </title>
        <script type = “text/javascript” defer src = “example.js”>
    </head>
    <body>
        <!---->
    </body>
</html>


And defer only works for external js file, if js is inline, then it will be executed 
in order. 
Since it is started from some version, so the best case is that we start the defer js in the 
bottom. 
For XHTML, we need to speficy the defer attribute as defer = “defer”

For async, it should also be used for external js file.
Also, it should be used for independent js files.

XHTML is a reformulation of HTML as an application of XML. 
XHTML is much strict than HTML, if we write a less than symbol “<”, in XHTML it 
will treat it as a starting tag. So we need to indicate that as below:
<script type = “text/javascript”><![CDATA[
    js content.
]]>

In old days, to deal with browser who does not support javascript, we can 
use the below one to deal with browser which does not support script.
<script><!--
    function sayHi(){
        alert(“ssdsds”);
    }
//--> </script>
However, since nowadays, the browser support javascript, and in XHTML mode, it will cause
script to be ignored.

Usually we need to use external js file:
1. Caching -> browser cache all externally linked javascript file according
to the specific setting, meaning if two pages are using the same file, the file
is downloaded only once. much faster than inline code.

2. Also it will be independent, easy for programmer to edit js.

3. By including js, it will treat html and xhtml the same, since syntax to include for
html and xhtml is the same.

Quirk mode, achieved in all browser by omitting the doctype at the beginning of the doc.
Standard type :
“<!-- HTML 4.01 Strict -->
<!DOCTYPE HTML PUBLIC “-//W3C//DTD HTML 4.01//EN”
“http://www.w3.org/TR/html4/strict.dtd”>
                   
                   <!-- XHTML 1.0 Strict -->
                   <!DOCTYPE html PUBLIC
                   “-//W3C//DTD XHTML 1.0 Strict//EN”
                   “http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd”>
                    
                    <!-- HTML5 -->
                    <!DOCTYPE html>”

                    Excerpt From: Nicholas C. Zakas. “Professional: JavaScript® for Web Developers.” iBooks. 

Later, <noscript> is developed then. It is in case of old browser and disable of javascript 
<noscript> 
    <p> This page needs js
    </p>
</noscript>

Charpter 3 Language Basics.

everything is case sensitive. ECMA script is C-like language. 

ECMAScript 5 has introduced the concept of strict mode, which is a different parsing and execution model
for js. 
“use strict”, in this way, js engine is different from ECMAScript 3’ engine.

Semicolon as the terminator; Thought it is not required, the parser can decide where to finish.
It is recommended to include one. 
Using code blocks is a good choice. 
For example:
if (js){
    alert(“jp”);
}
is recommended. 
if (js)
    alert(“dsds”);
should be avoided. 

Variables in ECMASCRIPT is loosely typed, which means it can be holding any type of object. 
var defines a variable, which is local scope. 
For example:

function test(){
    var message = “hi”;
}
test();
alert(message);

message variable is defined within a function using var. Function is called test(). 
So the last line, will cause a error.
To avoid this error, we can avoid keyword “var”, which makes the varible global.

function test(){
    message = “hi”
}
test();
alert(message);

In this situation, as long as var is called. The variable is called, the variable is defined. 
Not recommended. In strict mode, it will introduce a reference error.

In ECMASCRIPT, there are 5 simple data types: Undefined, Null, Boolean, Number and String. 
Also there is a complex data type : Object. 
typeof operator will provide the information of types:
undefined
boolean
string
number
object
function
----> typeof null ====> object
!Remember typeof is an operator.

If a variable is declared using “var”. but not initialized. It is assigned the value of undefined. 
If variable is declared using keyword var, then it is valid, but not initilized. 
So following works:

var you;
alert(you);

it will pops up “undefined”, however, without var you, it will introduce an error. 

Boolean types: true and false.
Since in js, it is case sensitive, so True and False is not right. 
All types of values have boolean equivalents in ECMAScript. Convert a value into Boolean
equivalent, Boolean() casting function is called.

In javascript, the rule to convert other types to boolean:
string: nonempty string --> true
number : any nonzero number(other than NaN);
object: any object(other than null)

Number types in ECMAScript is interesting.
basic format is decimal integer. If we want to represent a octal number, then the first number
should start with 0, and if it detect any number larger than 0 to 7, then definitely we will treat it
as a decimal number. 
To get a hexadecimal number, we need to set the first two char as 0x(case sensitive).
To make a float number, just add the decimal point. 
Since storing float number value use twice memory, so ecmascript is always trying to 
convert values into integers. 
When there is no digit after decimal point, the number becomes an integer. 

!Attention, a = 0.1 and b = 0.2
then a + b != 0.3 in js.
Because of rounding error, since computer use binary to represent the digit. 
So there are must be some error for decimals. 
So never use == for judge calculation between decimals, use a range to make the decision for that. 

Range of values:
in js, the largest number is stored as Number.MAX_VALUE (kind of similar to java, Integer.MAX_VALUE)
If exceeds the range, the number automatically gets the special value : Infinity. 

Infinity does not have any sense of calculation.
There is a function: isFinite() to determine whether the number is finite. 

NaN denotes not a number, used to indicate when a operation is failed to return a number. 
For example: dividing 0 will return NaN. 
Unique property: 1. calculation involve with NaN always return NaN. 
                 2. NaN is not equal with NaN. 
So ECMAScript provide a function: isNaN() to decide whether it is NaN. 

Any variable cannot convert to the legal digit will be NaN if force to convert.
isNaN(“blue”) will return true.

Number conversion: number(), parseInt(), parseFloat();
for null, convertiont to number will return 0;
for undefined, it will return NaN. 
For parseInt(), it can have another argument which should be radix.
For example, parseInt(“x”, 2)--> means the number is 2-radix based.

String type --> double quote and single quote are equal.
convert other types to string: toString()
if we convert some num to string, adding a argument, means what radix we are trying to use.
If types are not sure, because use null or undefined in toString() will cause an error.
In this case, just use String() cast function. 

Object type in js
it is created by using new operator followed by the object type. 
In js, var o = new object is legal, but not recommended.
Each object has the following properties:
constructor
hasOwnProperty(name)
isPrototypeOf(object)
propertyIsEnumerable(propertyName)
toLocaleString() 
toString()
valueOf()


Functions are the core of js. 
functions are declared using function keyword.
function functionName(arg0, arg1, ..., argN){
    statement;
}

and can be called by using functionName.
Functions in ECMAScript need not specify whether they return a value.
A function exit and stop when it encounter the “return” keyword.
Arguments in the function: intepreter does not complain about the argument number. 
Because internally, it is represented by array. 
All arguments are stored in arguments. 

function doAdd(par1, par2){
    arguments[0] = 10;
}
// this change par1 to 10;
However, this only goes one way. change par1 will not change arguments.

functions cannot be overloaded in javascript, it will just be overwritten.

Javascript does not allow direct access of memory locations. 

var name = new Object();
person.name = “Nicholas”;
alert(person.name);

So in this case, an object is created and has the property of name.
Only reference can have dynamica property.

typeof is not that helpful for determining which type of the object. 
To determine that, we need to use instanceof to decide. 
result = var instanceof contructor

So instanceof operator is used for objects not primitive types.

In web browser, the global contect is said to be that of window object. 

No block level scope: it means that the variable will not destroy after the curly bracket.
!Attention: So javascript has the function scope but does not have block scope.

Declaration:
when a variable declare using var, automatically added to most immediate context available. 

Javascript --> garbage-collected language. 
Find which variable is not used, and free it. 
The process is periodic, since garbage collector running at specified intervals.
Mark-sweep

Second method is reference counting. keep track of how many references made to it.
Circular reference.


OO in javascript
ECMAScript has no concept of classes, so it is kind of different from class-based language.
An object is an "unordered collection of properties each of which contains a primitive value, object, or function". An object is an array of values in no-order. Each property or method is identified by a name that is mapped to a value. So we can recognize it as a hashtable.


there are two format two write an object:
1. var person = new Object();
    person.name = "nic";
    person.age = 29;
    persona.sayName = function(){
        alert(this.name);
    };
    
    var person = {
        name : "nic";
        age : 29,
        sayName: function(){
            alert(this.name);
        }
    };







Modern web browsers will 
 the file and keep executing your current script because they load everything asynchronously to improve performance.


A callback function, also known as a higher-order function, is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (executed) inside otherFunction. A callback function is essentially a pattern (an established solution to a common problem), and therefore, the use of a callback function is also known as a callback pattern.
so callback function is just a high-order function which is passed to another function as parameter.


var friends = ["Mike", "Stacy", "Andy", "Rick"];
​
friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick​
});
Again, note the way we pass an anonymous function (a function without a name) to the forEach method as a parameter.

Closure:
The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.


As we know, closures have access to the containing function’s scope, so the callback function can access the containing functions variables, and even the variables from the global scope.



we used anonymous functions that were defined in the parameter of the containing function. That is one of the common patterns of using callback functions. Another popular pattern of using callback function is to declare a named function and pass the name of that function to the parameter.


JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished. This can create errors.

To prevent this, you can create a callback function.

A callback function is executed after the current effect is finished.

function Box(col)
{
   var color = col;

   this.getColor = function()
   {
       return color;
   }
}


function Box(color) // Constructor
{
    this.color = color;
}

Box.prototype.getColor = function()
{
    return this.color;
}


(function () {
    // ... all vars and functions are in this scope only
    // still maintains access to all globals
}());
Notice the () around the anonymous function. This is required by the language, since statements that begin with the token function are always considered to be function declarations. Including () creates a function expression instead.


in node, it is single thread, so we need to use event loop to work on this.

function start(){
    console.log("Reqeust handler start was called");

    function sleep(millisecond){
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + millisecond);
    }
    sleep(10000);
    return "Hello World";
}

function upload(){
    console.log("Request handler's upload was called");
    return "Hello World";
}
in the above work, start and upload will all wait 10 seconds which start block upload.


嘿，probablyExpensiveFunction()
（译者注：这里指的就是需要花时间处理的函数），你继续处理你的事情，
我（Node.js 线程）先不等你了，我继续去处理你后面的代码，请你提供
一个 callbackFunction()，等你处理完之后我会去调用该回调函数的，谢
谢！”



var yourNamespace = {

    foo: function() {
    },

    bar: function() {
    }
};

...

yourNamespace.foo();

Ajax --> asynchrounous javascript -->  rather than a blocking, we make a call that returns immediately
 The request itself is performed on a separate thread (yes, a browser does keep a thread pool for asynchronous actions, but it is not directly accessible for the developer).




function tryMe (param1, param2) {
    alert(param1 + " and " + param2);
}

function callbackTester (callback) {
    callback (arguments[1], arguments[2]);
}

callbackTester (tryMe, "hello", "goodbye");








A callback method is one which is passed as an argument in another method and which is invoked after some kind of event. The 'call back' nature of the argument is that, once its parent method completes, the function which this argument represents is then called; that is to say that the parent method 'calls back' and executes the method provided as an argument.


//An innocuous looking method which will become known as a callback method
//because of the way in which we will invoke it.
function meaningOfLife() {
    log("The meaning of life is: 42");
}


//An innocuous looking method which just takes an int and prints it to screen, and takes a function reference to be executed when printANumber completes
function printANumber(int number, function callbackFunction()) {
    print("The number you provided is: " + number);
}

function event() {
   printANumber(6, meaningOfLife());
}




The main difference with a desktop or a native environment is that browsers do not give access to the threading model and provide a single thread for everything accessing the user interface (i.e. the DOM).


The way browsers expose asynchronous programming to the application logic is via events or callbacks.

event-based asynchrnous:
func ("event", func(){});
if the event happens call back the



