// function hridoy() {
//     console.log("manik");
// }
// let onotr = hridoy;
// onotr();


// function orjun(alif,rakib) {
//     console.log(alif +"" +rakib);
// }
// console.log("sojol","arman");

// //----------------callback
// function audio() {
//     console.log("Hridoyn to start working ");// ----------sincronas
// }

// function video() {
//     setTimeout(() => {
//         console.log('video arrive');// eita holo Asincronas
//         two();
//     }, 1000);
// }


// function two() {
//     console.log('two');// eita hoilo sincronas
// }

// video();
// audio();
// two();

//----------------------start now new callback---------------------------


function datafetch(callback) {
    setTimeout(() =>{
        console.log("fetching data");
        callback(10);
    },2000);
}


function display (x) {
    console.log("display the data",x);   
}

datafetch((valu) =>{
    console.log('im from datafetch function',valu);
    display(valu);
});




function one(callback10) {
    setTimeout(()=> {
        console.log("One");   
        callback10();
    },2000);
}


function two(callback9) {
    setTimeout(()=> {
        console.log("two");   
        callback9();
    },1000);
}


function three(callback8) {
    setTimeout(()=> {
        console.log("three"); 
        callback8();  
    },1100);
}


function Four(callback7) {
    setTimeout(()=> {
        console.log("four");  
        callback7(); 
    },1300);
}


function Five(callback6) {
    setTimeout(()=> {
        console.log("five");   
        callback6();
    },1400);
}


function six(callback5) {
    setTimeout(()=> {
        console.log("six"); 
        callback5()  
    },1500);
}


function seven(callback4) {
    setTimeout(()=> {
        console.log("seven");   
        callback4();
    },1600);
}


function eight(callback3) {
    setTimeout(()=> {
        console.log("eight");  
        callback3 ();
    },1700);
}


function nine(callback2) {
    setTimeout(()=> {
        console.log("nine");  
        callback2(); 
    },1800);
}


function teen(callback1) {
    setTimeout(()=> {
        console.log("teen"); 
        callback1();  
    },1900);
}

function finished() {
    console.log("finally end");
}


teen(() =>{
    nine(()=>{
        eight(()=>{
            seven(()=>{
                six(()=>{
                    Five(()=>{
                        Four(()=>{
                            three(()=>{
                                two(()=>{
                                    one(()=>{
                                        finished();
                                    });
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});
