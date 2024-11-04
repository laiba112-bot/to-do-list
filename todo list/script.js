let input = document.getElementById("inp")
let text = document.querySelector(".text")

function add(){
    if(input.value == ""){
        alert("enter your task")
    }else{
        let newELe = document.createElement("ul");
        newELe.innerHTML=`${input.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newELe);
        input.value="";
        newELe.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newELe.remove()
        }
    }
}