let inputs = document.querySelectorAll(".input");
let btn = document.querySelector("button");

let nameVal;
let surenameVal;
let passwordVal;

for (let i = 0; i < inputs.length; i++) {

    let errors = document.createElement("p")
    errors.setAttribute("class", "errors")
    inputs[i].before(errors);

    inputs[i].addEventListener("input", function(){
        if (inputs[i].name == "name") {
            if (inputs[i].value.length > 6) {
                nameVal = inputs[i].value;
                inputs[i].previousElementSibling.innerText = "";
            }
            else{
                inputs[i].previousElementSibling.innerText = "The name length must be greater than 6";
            }
        }

        if (inputs[i].name == "surename") {
            if (inputs[i].value.length > 10) {
                surenameVal = inputs[i].value;
                inputs[i].previousElementSibling.innerText = "";
            }
            else{
                inputs[i].previousElementSibling.innerText = "The surename length must be greater than 10";
            }
        }

        if (inputs[i].name == "password") {
            if (inputs[i].value.length > 8) {
                passwordVal = inputs[i].value;
                inputs[i].previousElementSibling.innerText = "";
            }
            else{
                inputs[i].previousElementSibling.innerText = "The password length must be greater than 8";
            }
        }
    })
}

let div = document.createElement('div');
div.setAttribute("class", "my-div");

btn.addEventListener("click", function(){
    if (nameVal.length !== 0 && surenameVal.length !== 0 && passwordVal.length !== 0) {
        div.innerHTML = "";
        
        let myImg = document.createElement("img");
        myImg.setAttribute("src", "https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg")
        myImg.style.width = "150px";

        div.innerHTML += `name: ${nameVal} <br> surename: ${surenameVal} <br> password: ${passwordVal} <br> profile picture <br> ${myImg}`;
        btn.after(div);
    }
})
