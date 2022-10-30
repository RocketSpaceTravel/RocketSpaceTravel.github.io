let crd_ttl = document.getElementById("card_title")
let crd_desc = document.getElementById("desc")
let crd_btn_rght = document.getElementById("Card_right")
let crd_btn_lft = document.getElementById("Card_left")
let planetimg = document.getElementById("Img")

let array = [
    {
        "Title": "Venus",
        "Description": "Explore one of the hottest planet in our solar system.",
        "src":"./Image/Planet2-removebg-preview.png"
    },
    {
        "Title": "Earth",
        "Description": "This is the description part 2",
        "src":"./Image/Planet3-removebg-preview.png"
    },
    {
        "Title": "Mars",
        "Description": "Explore one of the hottest planet in our solar system.",
        "src":"./Image/Planet4-removebg-preview.png"
    },
    {
        "Title": "Jupiter",
        "Description": "Explore one of the hottest planet in our solar system.",
        "src":"./Image/Planet5-removebg-preview.png"
    },
    {
        "Title": "Saturn",
        "Description": "Explore one of the hottest planet in our solar system.",
        "src":"./Image/Planet6-removebg-preview.png"
    },
    {
        "Title": "Uranus",
        "Description": "Explore one of the hottest planet in our solar system.",
        "src":"./Image/Planet7-removebg-preview.png"
    },
    {
        "Title": "Neptune",
        "Description": "Explore one of the hottest planet in our solar system.",
        "src":"./Image/Planet8-removebg-preview.png"
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
    planetimg.src=array[counter].src
}

crd_btn_lft.onclick = function(){
    counter -= 1
    if (counter<=0){
        counter = 0
    }
    crd_ttl.innerText=array[counter].Title
    crd_desc.innerText=array[counter].Description
    planetimg.src=array[counter].src
}

function loadtxt() {
    crd_ttl.innerText=array[counter].Title
    crd_desc.innerText=array[counter].Description
    planetimg.src=array[counter].src
}

window.onload(loadtxt())

