let crd_ttl = document.getElementById("card_title")
let crd_desc = document.getElementById("desc")
let crd_btn_rght = document.getElementById("Card_right")
let crd_btn_lft = document.getElementById("Card_left")
let planetimg = document.getElementById("Img")

let array = [
    {
        "Title": "Earth",
        "Description": "Go around and adore the magnificent beauty of planet earth.",
        "src":"./Image/AltPhotos/simon-lee-eGALMCJ_Cvk-unsplash.jpg"
    },
    {
        "Title": "Mars",
        "Description": "Explore Mars. The planet that looks like earth. Also known as the 'Red Planet'.",
        "src":"./Image/AltPhotos/simon-lee-hrOXaenH640-unsplash.jpg"
    },
    {
        "Title": "Jupiter",
        "Description": "Explore Jupiter. Go around the largest planet in the entire solar system.",
        "src":"./Image/AltPhotos/simon-lee-_B7LjqNXu5Q-unsplash.jpg"
    },
    {
        "Title": "Saturn",
        "Description": "Explore Saturn, one of the lightest and the planet with the best rings. ",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg"
    },
    {
        "Title": "Uranus",
        "Description": "Go around Uranus, the third largest planet, and the coldest planet.",
        "src":"./Image/AltPhotos/simon-lee-A6OTC1-Ok-A-unsplash.jpg"
    },
    {
        "Title": "Neptune",
        "Description": "Explore Neptune, the farthest, and the planet that rains diamonds.",
        "src":"./Image/AltPhotos/simon-lee-MzZ4WW3IT_U-unsplash.jpg"
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

