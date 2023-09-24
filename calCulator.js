

let string = "";
let buttons = document.querySelectorAll(".button");
let deleteOne = document.querySelector("#deleteOne");
let dltIcon = document.querySelector("#deleteIcon");


Array.from(buttons).forEach((button)=>{
   
   button.addEventListener("click",(e)=>{
    if(e.target.innerHTML == "="){
        string = eval(string);
        document.querySelector("input").value = string;
       }

    else if(e.target.innerHTML == "C"){
        string = "";
        document.querySelector("input").value = string;
    }
    else if(e.target == deleteOne || e.target == dltIcon){
            string = string.slice(0,-1);
        
        document.querySelector("input").value = string;
    }
    
else{  
    console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector("input").value = string;
       
}  

 });
 button.addEventListener("mouseenter",()=>{
    button.style.opacity = 0.5;
    
 });
 button.addEventListener("mouseout",()=>{
    setTimeout(function(){
        
        button.style.opacity = 0.9;
        button.style.transform = "ease-in o.6"
},200);
 });
 

});
    
 

