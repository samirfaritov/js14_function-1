// function sayHi(arg) { 
//     console.log(arg);
// }


// for(let i = 0; i < 10; i++) {
// sayHi("Hello")
// }

// let pr = prompt("Ismni kirit")

// function f() {
//     console.log("Hi");
//     if ('Hi' === pr.concat()) {
//         console.log(pr);
//     }
// }
// f()

function sayHi(a, ...b) { 
    console.log(a);
    console.log(b);
}

sayHi("Salom", true, false, 14, "Hello")