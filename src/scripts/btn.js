let Planet_1 = document.getElementById("Planet_1")
let Planet_2 = document.getElementById("Planet_2")
let Planet_3 = document.getElementById("Planet_3")
let Image = document.getElementById("Planet_Img")
let Distance = document.getElementById("distance")
let Price = document.getElementById("price")


let array = [
    {
        "Title": "Earth",
        "Description": "Go around and adore the magnificent beauty of planet earth.",
        "src":"../Image/Planet3-removebg-preview.png",
        "color": "#0e1836",
        "price": "200"
    },
    {
        "Title": "Mars",
        "Description": "Explore Mars. The planet that looks like earth. Also known as the 'Red Planet'.",
        "src":"../Image/Planet4-removebg-preview.png",
        "color": "#a03f03",
        "price": "300"
    },
    {
        "Title": "Jupiter",
        "Description": "Explore Jupiter. Go around the largest planet in the entire solar system.",
        "src":"./Image/Planet1-removebg-preview.png",
        "color": "#452e1a",
        "price":"500"
    },
    {
        "Title": "Saturn",
        "Description": "Explore Saturn, one of the lightest and the planet with the best rings. ",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84"
    },
    {
        "Title": "Uranus",
        "Description": "Go around Uranus, the third largest planet, and the coldest planet.",
        "src":"./Image/AltPhotos/simon-lee-A6OTC1-Ok-A-unsplash.jpg",
        "color": "#99c7c7"
    },
    {
        "Title": "Neptune",
        "Description": "Explore Neptune, the farthest, and the planet that rains diamonds.",
        "src":"./Image/AltPhotos/simon-lee-MzZ4WW3IT_U-unsplash.jpg",
        "color": "#201dac"
    }
]

let Basic = 1000
let Standard = 2000
let BasicPremium = 5000

Planet_1.onclick = function(){
    Image.src = array[0].src
    Price.innerText = Basic + array[0].price
}
Planet_2.onclick = function(){
    Image.src = array[1].src
}
Planet_3.onclick = function(){
    Image.src = array[2].src
}