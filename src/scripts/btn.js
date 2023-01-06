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
        "Title": "Sightseeing",
        "Description": "Free floating in space is an incredible experience that is unlike anything else you can do. Imagine weightlessly soaring through the vast expanse of space, taking in the stunning views of the stars, planets, and galaxies around you. With no gravity to hold you down, you'll be able to move and explore in ways that are impossible on Earth. Space tourists will have the opportunity to experience the thrill and excitement of free floating in space, and to see the universe in a whole new way. Book your trip to experience the adventure of a lifetime!",
        "src":"../Image/Planet3-removebg-preview.png",
        "color": "#0e1836",
        "price": 500000
    },
    {
        "Title": "Earth",
        "Description": "Earth is the third planet from the sun and the only known planet to support life. It is a terrestrial planet, meaning it has a solid surface, and is the largest of the terrestrial planets in the solar system. Earth has a diverse range of habitats, from lush forests and sandy deserts, to frozen tundra and vast oceans. It is also home to an incredible variety of plant and animal life, including humans. Space tourists will have the opportunity to experience the beauty and diversity of Earth, and to witness first-hand the amazing life forms that call this planet home. Book your trip to Earth today and experience the adventure of a lifetime!",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price": 1000000
    },
    {
        "Title": "Moon",
        "Description": "The Moon is Earth's only natural satellite and is the fifth-largest moon in the solar system. It is a rocky, terrestrial body that has a heavily cratered surface and is covered in a layer of fine, powdery soil called regolith. It has no atmosphere and experiences extreme temperature fluctuations, with temperatures on its surface ranging from boiling hot to freezing cold. Despite these challenges, the Moon is an exciting destination for space tourists who want to experience the thrill of being on another world. Book your trip to the Moon today and take part in the adventure of a lifetime!",
        "src":"../Image/Planet3-removebg-preview.png",
        "color": "#0e1836",
        "price": 5500000
    },
    {
        "Title": "Mars",
        "Description": "Mars is an exciting destination for space tourists who want to experience the thrill of being on another planet. Its unique landscape, with its towering volcanoes and deep canyons, is unlike anything you'll see on Earth. The thin atmosphere of Mars makes for beautiful sunrises and sunsets, and you can even see the stars in greater detail than you would on Earth. Plus, with its milder temperatures and lower gravity, Mars is a great place to enjoy outdoor activities like hiking and exploring. Book your trip to Mars today and experience the adventure of a lifetime!",
        "src":"../Image/Planet4-removebg-preview.png",
        "color": "#a03f03",
        "price": 8230780
    },
    {
        "Title": "Jupiter",
        "Description": "Jupiter is a must-see destination for space tourists who want to explore the outer reaches of the solar system. Its massive size and stunning beauty make it a truly awe-inspiring sight. From its colorful stripes to its iconic red spot, there is always something interesting to see on Jupiter. Plus, with its many moons, you'll have plenty of opportunities to go on exciting excursions and discover new and fascinating worlds. Book your trip to Jupiter today and experience the adventure of a lifetime!",
        "src":"./Image/Planet1-removebg-preview.png",
        "color": "#452e1a",
        "price":14030450
    },
    {
        "Title": "Saturn",
        "Description": "Saturn is the sixth planet from the sun and the second-largest planet in the solar system. Known for its stunning rings, which are made up of countless small particles of ice and rock.  Saturn is also the home of several moons, including the largest moon in the solar system, called Titan. Space tourists will be amazed by the beauty and majesty of Saturn and its many moons, making it a must-see destination for anyone interested in exploring the solar system. Book your trip to Saturn today and experience the adventure of a lifetime!",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price":26780000
    },
]

let Plans = [
    // "",
    // "","The premium plan would offer a truly luxurious space travel experience, with a larger and more advanced rocket, extended stays in orbit, and access to exclusive facilities and services. This plan might include private cabins, gourmet meals, and personalized training and support from experienced astronauts. The price for this plan could be upwards of $500,000.",
    {
        "Title": "Basic",
        "Description": "This plan would include a trip on a small, reliable rocket with a few amenities such as food and water. The rocket would travel to low Earth orbit and provide passengers with a few minutes of weightlessness and stunning views of Earth. The price for this plan might be around $100,000.",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price":100000
    },
    {
        "Title": "Standard",
        "Description": "The standard plan would offer a more extensive trip on a larger and more advanced rocket. This plan might include multiple days in orbit, with opportunities for spacewalks and other activities. It would also include more comfortable accommodations and a wider range of food options. The price for this plan might be around $105,000.",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price":105000
    },
    {
        "Title": "Premium",
        "Description": "This plan will have access to our top-of-the-line spacecraft, equipped with the latest technology and comfortable amenities. You will also have access to our exclusive training program, where you will learn how to navigate and operate your spacecraft, as well as participate in simulated space missions to prepare you for the real thing. Additionally, you will be able to bring along a guest of your choice on your journey, and you will both receive VIP treatment at all of our space stations and landing sites. The price for this plan might be around $805,000.",
        "src":"./Image/AltPhotos/simon-lee-z1vpjHAq1o8-unsplash.jpg",
        "color": "#b6aa84",
        "price": 805000
    },
]

let Pg = 1
let Curr_Plnt = array[0]
let Curr_Pln = Plans[0]
// let TotalPrice = Curr_Pln.price + Curr_Plnt.price


function Btn1Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[0]
        Desc.innerText = array[0].Description
        Distance.innerText = "256,600 km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber
    }
    if (Pg == 2) {
        Curr_Pln = Plans[0]
        Desc.innerText = Plans[0].Description
        const formattedNumber = Curr_Pln.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber
    }
}
function Btn2Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[1]
        Desc.innerText = array[1].Description
        // Distance = 10000
        Distance.innerText = "256,600 km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber

    }
    if (Pg == 2) {
        Curr_Pln = Plans[1]
        Desc.innerText = Plans[1].Description
        const formattedNumber = Curr_Pln.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber
    }
}function Btn3Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[2]
        Desc.innerText = array[2].Description
        Distance.innerText = "384,400 km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber    
    }
    if (Pg == 2) {
        Curr_Pln = Plans[2]
        // Desc.innerText = Plans[2]
        Desc.innerText = Plans[2].Description
        const formattedNumber = Curr_Pln.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber
    }
}function Btn4Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[3]
        Desc.innerText = array[3].Description
        Distance.innerText = "97.821 million km"
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber    
    }
}function Btn5Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[4]
        Desc.innerText = array[4].Description
        Distance = 10000
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber    
    }
}function Btn6Clk() {
    if (Pg == 1) {
        Curr_Plnt = array[5]
        Desc.innerText = array[5].Description
        Distance = 10000
        const formattedNumber = Curr_Plnt.price.toLocaleString("en-US");
        Price.innerText = "$"+formattedNumber    
    }
}

window.onload = function() {
    if (Pg==1) {
        Btn_1.innerText = "SightSeeing"
        Btn_2.innerText = "Earth"
        Btn_3.innerText = "Moon"
        Btn_4.innerText = "Mars"
        Btn_5.innerText = "Jupiter"
        Btn_6.innerText = "Saturn" 
        Desc.innerText = "Click on the text to select your destination then click the continue button."
        Prev.style.display = "none"
    } if(Pg==2) {
        Btn_1.innerText = "Standard"
        Btn_2.innerText = "Economy"
        Btn_3.innerText = "Premium"
        Btn_4.innerText = " "
        Btn_5.innerText = " "
        Btn_6.innerText = " "
    }
}

const abbrNum = (number, decPlaces) => {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces)
  
    // Enumerate number abbreviations
    var abbrev = ['k', 'm', 'b', 't']
  
    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {
      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10, (i + 1) * 3)
  
      // If the number is bigger or equal do the abbreviation
      if (size <= number) {
        // Here, we multiply by decPlaces, round, and then divide by decPlaces.
        // This gives us nice rounding to a particular decimal place.
        number = Math.round((number * decPlaces) / size) / decPlaces
  
        // Handle special case where we round up to the next abbreviation
        if (number == 1000 && i < abbrev.length - 1) {
          number = 1
          i++
        }
  
        // Add the letter for the abbreviation
        number += abbrev[i]
  
        // We are done... stop
        break
      }
    }
  
    return number
  }

function Updte() {
    if (Pg==1) {
        Btn_1.innerText = "SightSeeing"
        Btn_2.innerText = "Earth"
        Btn_3.innerText = "Moon"
        Btn_4.innerText = "Mars"
        Btn_5.innerText = "Jupiter"
        Btn_6.innerText = "Saturn" 
        Heading.innerText = "Select your destination"
        Desc.innerText = Curr_Plnt.Description
        Prev.style.display = "none"
    } if(Pg==2) {
        Btn_1.innerText = "Standard"
        Btn_2.innerText = "Economy"
        Btn_3.innerText = "Premium"
        Btn_4.innerText = " "
        Btn_5.innerText = " "
        Btn_6.innerText = " "
        Heading.innerText = "Select your pricing plan"
        Desc.innerText = Curr_Pln.Description
        Price.innerText = "0"
        Prev.style.display = "block"
    } if(Pg==3) {
        Btn_1.innerText = "Plant: " + Curr_Plnt.Title 
        Btn_2.innerText = "Pricing Plan: " + Curr_Pln.Title
        Btn_3.innerText = " "
        Btn_4.innerText = " "
        Btn_5.innerText = " "
        Btn_6.innerText = " "
        let TotalAmt = Curr_Pln.price + Curr_Plnt.price
        const Ttlprc2 = TotalAmt.toLocaleString("en-US");
        Desc.innerText = Desc.innerText = "You have selected, " + Curr_Plnt.Title + " as your destination in space. You also selected " + Curr_Pln.Title + " plan as your pricing plan. Your total price is $" + (Ttlprc2) + ". Do you want to continue?" 
        Heading.innerText = "Check your information"
        let abb = abbrNum(TotalAmt,2)
        Price.innerText = "$"+ abb
        Next.style.display = "block"
    } if(Pg==4) {
        Btn_1.innerText = "Plant: " + Curr_Plnt.Title 
        Btn_2.innerText = "Pricing Plan: " + Curr_Pln.Title
        Btn_3.innerText = " "
        Btn_4.innerText = " "
        Btn_5.innerText = " "
        Btn_6.innerText = " "
        Desc.innerText = Desc.innerText = "Booked! Thank you for choosing RocketSpace! 🚀" 
        Heading.innerText = "Success! ✌️"
        Next.style.display = "none"
        let TotalAmt = Curr_Pln.price + Curr_Plnt.price
        let abb = abbrNum(TotalAmt,2)
        Price.innerText = abb
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