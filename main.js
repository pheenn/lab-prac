const $ = identifier => document.querySelector(identifier);

$("#btn").addEventListener("click", function(){
    alert("You clicked the button");
})