let inputs = document.querySelectorAll(".input");
let btn = document.querySelector("button");

for (let i = 0; i < inputs.length; i++) {
    let errors = document.createElement("p")
    errors.setAttribute("class", "errors")
    inputs[i].before(errors);
}

let div = document.createElement('div');
div.setAttribute("class", "my-div");
btn.after(div);

btn.addEventListener("click", function(){

    div.innerText = "";

    for (let i = 0; i < inputs.length; i++) {
        
        if (inputs[i].name == "name") {
            if (inputs[i].value.length > 6) {
                div.innerHTML += `<p>${inputs[i].value}</p>`;
                inputs[i].previousElementSibling.innerText = "";
            }
            else{
                inputs[i].previousElementSibling.innerText = "The name length must be greater than 6";
            }
        }

        if (inputs[i].name == "surename") {
            if (inputs[i].value.length > 10) {
                div.innerHTML += `<p>${inputs[i].value}</p>`;
                inputs[i].previousElementSibling.innerText = "";
            }
            else{
                inputs[i].previousElementSibling.innerText = "The surename length must be greater than 10";
            }
        }
  
        if (inputs[i].name == "password") {
            if (inputs[i].value.length > 8) {
                div.innerHTML += `<p>${inputs[i].value}</p>`;
                inputs[i].previousElementSibling.innerText = "";
            }
            else{
                inputs[i].previousElementSibling.innerText = "The password length must be greater than 8";
            }
        }
    }
    btn.after(div);
})
