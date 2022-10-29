let crd_ttl = document.getElementById("card_title")
let crd_desc = document.getElementById("desc")
let crd_btn_rght = document.getElementById("Card_right")
let crd_btn_lft = document.getElementById("Card_left")

let array = [
    {
        "Title": "Venus",
        "Description": "Explore one of the hottest planet in our solar system."
    },
    {
        "Title": "Earth",
        "Description": "This is the description part 2"
    },
    {
        "Title": "Mars",
        "Description": "Explore one of the hottest planet in our solar system."
    },
    {
        "Title": "Jupiter",
        "Description": "Explore one of the hottest planet in our solar system."
    },
    {
        "Title": "Saturn",
        "Description": "Explore one of the hottest planet in our solar system."
    },
    {
        "Title": "Uranus",
        "Description": "Explore one of the hottest planet in our solar system."
    },
    {
        "Title": "Neptune",
        "Description": "Explore one of the hottest planet in our solar system."
    }
]

let counter = 0

crd_btn_rght.onclick = function(){
    counter += 1
    if (counter>=array.length){
        counter = 0
    }
    crd_ttl.innerText=array[counter].Title
    crd_desc.innerText=array[counter].Description
}

crd_btn_lft.onclick = function(){
    counter -= 1
    if (counter<=0){
        counter = 0
    }
    crd_ttl.innerText=array[counter].Title
    crd_desc.innerText=array[counter].Description
}

function loadtxt() {
    crd_ttl.innerText=array[counter].Title
    crd_desc.innerText=array[counter].Description
}

window.onload(loadtxt())

