let enq = document.querySelector(".enqr");
let card = document.querySelector(".enquire")

enq.onclick = function(){
    if (contact.classList.contains("show")){
        contact.classList.remove("show");
        contact.classList.add("hide");
    }

    if (card.classList.contains("show")){
        card.classList.remove("show");
        card.classList.add("hide");
    }else{
        card.classList.add("show");
        card.classList.remove("hide");
    }

}

let cnct = document.querySelector(".cnct");
let contact = document.querySelector(".contact")

cnct.onclick = function(){
    if (card.classList.contains("show")){
        card.classList.remove("show");
        card.classList.add("hide");
    }
    if (contact.classList.contains("show")){
        contact.classList.remove("show");
        contact.classList.add("hide");
    }else{
        contact.classList.add("show");
        contact.classList.remove("hide");
    }

}