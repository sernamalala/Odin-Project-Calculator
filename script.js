//buttons and label

const label = document.getElementById("label");
const numbers = ["zero","one","two","three","four","five","six","seven","eight","nine"];
const button = document.querySelectorAll("button");

button.addEventListener("click",function(){

    console.log(this.getAttribute("class"));
})
