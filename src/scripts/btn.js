let Btn_1 = document.getElementById("Btn_1")
let Btn_2 = document.getElementById("Btn_2")
let Btn_3 = document.getElementById("Btn_3")
let Btn_4 = document.getElementById("Btn_4")
let Btn_5 = document.getElementById("Btn_5")
let Btn_6 = document.getElementById("Btn_6")
let Prev = document.getElementById("Prev")
let Heading = document.getElementById("Heading")
let Next = document.getElementById("Next")
let Desc = document.getElementById("Desc")
let Image = document.getElementById("Planet_Img")
let Distance = document.getElementById("distance")
let Price = document.getElementById("price")


let array = [
    {
        "Title": "Free Float",
        "Description": "Free floating in space is an incredible experience that is unlike anything else you can do. Imagine weightlessly soaring through the vast expanse of space, taking in the stunning views of the stars, planets, and galaxies around you. With no gravity to hold you down, you'll be able to move and explore in ways that are impossible on Earth. Space tourists will have the opportunity to experience the thrill and excitement of free floating in space, and to see the universe in a whole new way. Book your trip to experience the adventure of a lifetime!",
        "src":"../Image/Planet3-removebg-preview.png",
        "color": "#0e1836",
        "price": "200"
    },
    {
        "Title": "Earth",
        "Description": "Earth is the third planet from the sun and the only known planet to support life. It is a terrestrial planet, meaning it has a solid surface, and is the largest of the terrestrial planets in the solar system. Earth has a diverse range of habitats, from lush forests and sandy deserts, to frozen tundra and vast oceans. It is also home to an incredible variety of plant and animal life, including humans. Space tourists will have the opportunity to experience the beauty and diversity of Earth, and to witness first-hand the amazing life forms that call this planet home. Book your trip to Earth today and experience the adventure of a lifetime!",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price": "1500"
    },
    {
        "Title": "Moon",
        "Description": "The Moon is Earth's only natural satellite and is the fifth-largest moon in the solar system. It is a rocky, terrestrial body that has a heavily cratered surface and is covered in a layer of fine, powdery soil called regolith. It has no atmosphere and experiences extreme temperature fluctuations, with temperatures on its surface ranging from boiling hot to freezing cold. Despite these challenges, the Moon is an exciting destination for space tourists who want to experience the thrill of being on another world. Book your trip to the Moon today and take part in the adventure of a lifetime!",
        "src":"../Image/Planet3-removebg-preview.png",
        "color": "#0e1836",
        "price": "200"
    },
    {
        "Title": "Mars",
        "Description": "Mars is an exciting destination for space tourists who want to experience the thrill of being on another planet. Its unique landscape, with its towering volcanoes and deep canyons, is unlike anything you'll see on Earth. The thin atmosphere of Mars makes for beautiful sunrises and sunsets, and you can even see the stars in greater detail than you would on Earth. Plus, with its milder temperatures and lower gravity, Mars is a great place to enjoy outdoor activities like hiking and exploring. Book your trip to Mars today and experience the adventure of a lifetime!",
        "src":"../Image/Planet4-removebg-preview.png",
        "color": "#a03f03",
        "price": "300"
    },
    {
        "Title": "Jupiter",
        "Description": "Jupiter is a must-see destination for space tourists who want to explore the outer reaches of the solar system. Its massive size and stunning beauty make it a truly awe-inspiring sight. From its colorful stripes to its iconic red spot, there is always something interesting to see on Jupiter. Plus, with its many moons, you'll have plenty of opportunities to go on exciting excursions and discover new and fascinating worlds. Book your trip to Jupiter today and experience the adventure of a lifetime!",
        "src":"./Image/Planet1-removebg-preview.png",
        "color": "#452e1a",
        "price":"500"
    },
    {
        "Title": "Saturn",
        "Description": "Saturn is the sixth planet from the sun and the second-largest planet in the solar system. Known for its stunning rings, which are made up of countless small particles of ice and rock.  Saturn is also the home of several moons, including the largest moon in the solar system, called Titan. Space tourists will be amazed by the beauty and majesty of Saturn and its many moons, making it a must-see destination for anyone interested in exploring the solar system. Book your trip to Saturn today and experience the adventure of a lifetime!",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price":"500"
    },
]

let Plans = [
    // "",
    // "","The premium plan would offer a truly luxurious space travel experience, with a larger and more advanced rocket, extended stays in orbit, and access to exclusive facilities and services. This plan might include private cabins, gourmet meals, and personalized training and support from experienced astronauts. The price for this plan could be upwards of $500,000.",
    {
        "Title": "Basic",
        "Description": "This plan would include a trip on a small, reliable rocket with a few amenities such as food and water. The rocket would travel to low Earth orbit and provide passengers with a few minutes of weightlessness and stunning views of Earth. The price for this plan might be around $50,000.",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price":"2000"
    },
    {
        "Title": "Standard",
        "Description": "The standard plan would offer a more extensive trip on a larger and more advanced rocket. This plan might include multiple days in orbit, with opportunities for spacewalks and other activities. It would also include more comfortable accommodations and a wider range of food options. The price for this plan might be around $100,000.",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price":"5000"
    },
    {
        "Title": "Premium",
        "Description": "This plan would include a trip on a small, reliable rocket with a few amenities such as food and water. The rocket would travel to low Earth orbit and provide passengers with a few minutes of weightlessness and stunning views of Earth. The price for this plan might be around $50,000.",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price":"15000"
    },
]

let Pg = 1
let Curr_Plnt = array[0]
let Curr_Pln = Plans[0]
let TotalPrice = Curr_Pln.price + Curr_Plnt.price


function Btn1Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[0]
        Desc.innerText = array[0].Description
        Distance.innerText = "10000"
        Price.innerText = Curr_Plnt.price
    }
    if (Pg == 2) {
        Curr_Pln = Plans[0]
        Desc.innerText = Plans[0].Description
    }
}
function Btn2Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[1]
        Desc.innerText = array[1].Description
        Distance = 10000
        Price.innerText = Curr_Plnt.price

    }
    if (Pg == 2) {
        Curr_Pln = Plans[1]
        Desc.innerText = Plans[1].Description
    }
}function Btn3Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[2]
        Desc.innerText = array[2].Description
        Distance = 10000
        Price.innerText = Curr_Plnt.price    
    }
    if (Pg == 2) {
        Curr_Pln = Plans[2]
        // Desc.innerText = Plans[2]
        Desc.innerText = Plans[2].Description

    }
}function Btn4Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[3]
        Desc.innerText = array[3].Description
        Distance = 10000
        Price.innerText = Curr_Plnt.price    
    }
}function Btn5Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[4]
        Desc.innerText = array[4].Description
        Distance = 10000
        Price.innerText = Curr_Plnt.price    
    }
}function Btn6Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[5]
        Desc.innerText = array[5].Description
        Distance = 10000
        Price.innerText = Curr_Plnt.price    
    }
}

window.onload = function() {
    if (Pg==1) {
        Btn_1.innerText = "Free Float"
        Btn_2.innerText = "Earth"
        Btn_3.innerText = "Moon"
        Btn_4.innerText = "Mars"
        Btn_5.innerText = "Jupiter"
        Btn_6.innerText = "Saturn" 
        Desc.innerText = Curr_Plnt.Description
    } if(Pg==2) {
        Btn_1.innerText = "Standard"
        Btn_2.innerText = "Economy"
        Btn_3.innerText = "Premium"
        Btn_4.innerText = "--"
        Btn_5.innerText = "--"
        Btn_6.innerText = "--"
    }
}
function Updte() {
    if (Pg==1) {
        Btn_1.innerText = "Free Float"
        Btn_2.innerText = "Earth"
        Btn_3.innerText = "Moon"
        Btn_4.innerText = "Mars"
        Btn_5.innerText = "Jupiter"
        Btn_6.innerText = "Saturn" 
        Heading.innerText = "Select your destination"
        Desc.innerText = Curr_Plnt.Description
    } if(Pg==2) {
        Btn_1.innerText = "Standard"
        Btn_2.innerText = "Economy"
        Btn_3.innerText = "Premium"
        Btn_4.innerText = "--"
        Btn_5.innerText = "--"
        Btn_6.innerText = "--"
        Heading.innerText = "Select your pricing plan"
        Desc.innerText = Curr_Pln.Description
    } if(Pg==3) {
        Btn_1.innerText = "Plant: " + Curr_Plnt.Title 
        Btn_2.innerText = "Pricing Plan: " + Curr_Pln.Title
        Btn_3.innerText = "--"
        Btn_4.innerText = "--"
        Btn_5.innerText = "--"
        Btn_6.innerText = "--"
        Desc.innerText = Desc.innerText = "You have selected, " + Curr_Plnt.Title + " as your destination in space. You also selected " + Curr_Pln.Title + " plan as your pricing plan. Your total price is " + TotalPrice + ". Do you want to continue?" 
        Heading.innerText = "Check your information"
    } if(Pg==4) {
        Btn_1.innerText = "Plant: " + Curr_Plnt.Title 
        Btn_2.innerText = "Pricing Plan: " + Curr_Pln.Title
        Btn_3.innerText = "--"
        Btn_4.innerText = "--"
        Btn_5.innerText = "--"
        Btn_6.innerText = "--"
        Desc.innerText = Desc.innerText = "Booked! Thank you for choosing RocketSpace! 🚀" 
        Heading.innerText = "Success! ✌️"
    }
}

Next.onclick = function() {
    Price.innerText = Curr_Plnt.price
    Pg += 1
    Updte()
}

Prev.onclick = function() {
    if( Pg< 1){
        Pg = 1
    }
    Price.innerText = Curr_Plnt.price
    Pg -= 1
    Updte()
}