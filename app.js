let rslt = document.querySelector(".rslt");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");

let a = 0;
inc.addEventListener('click', function(){
    if(a===5){
        alert("Enough");
    }else{
        a++;
        rslt.innerHTML= a;
    }
});

let b=0;
dec.addEventListener('click',()=>{
    if(a<1){
        alert("Opps.....!");
    }else{
        a--;
        rslt.innerHTML= a;
    }
});



let clrmaker = document.querySelector("#clrmaker");
let clrbtn = document.querySelector(".clrbtn");
let clr1 = document.querySelector(".clr1");
let clr2 = document.querySelector(".clr2");
let clr3 = document.querySelector(".clr3");

clrbtn.addEventListener('click', function(){ 

    let red= Math.round(Math.random()* 255);
    let green= Math.round(Math.random()* 255);
    let blue= Math.round(Math.random()* 255);


    clr1.innerHTML= red;
    clr2.innerHTML= green;
    clr3.innerHTML= blue;

    console.log(red);
    clrmaker.style.background = `rgb(${red},${green},${blue})`;

});