// for the before you know part of the HTML

let Pre = [
    {
        "Title" : "Planning",
        "Desc" : "At our space travel company, we have a team of experienced professionals who carefully plan every aspect of the space travel experience. From choosing the ideal launch window to selecting the most efficient spacecraft for the journey, our planning process is thorough and detailed to ensure a safe and successful trip to space."
    },
    {
        "Title" : "Training",
        "Desc" : "Before embarking on their space journey, all of our customers undergo rigorous training to prepare them for the physical and mental challenges of space travel. Our training program covers everything from zero-gravity simulations to emergency procedures, giving our customers the skills and confidence they need to succeed in space."
    },
    {
        "Title" : "Vehicles",
        "Desc" : "We operate a fleet of state-of-the-art spacecraft designed to safely transport people to and from space. Our vehicles are equipped with advanced technology to ensure a smooth and comfortable journey, and are regularly maintained to the highest standards to ensure the safety of our customers."
    },
    {
        "Title" : "Safety",
        "Desc" : "Safety is our top priority at our space travel company. We have implemented strict safety protocols and procedures at every stage of the space travel process, from pre-launch planning to post-landing recovery. Our experienced team of engineers and technicians work tirelessly to ensure that every aspect of the space travel experience meets the highest standards of safety."
    },
    {
        "Title" : "Launch",
        "Desc" : "The launch of a spacecraft is a complex and highly coordinated process, and at our space travel company, we have the expertise and resources to ensure a smooth and successful launch. From countdown to liftoff, our team works to ensure that all systems are functioning properly and that the spacecraft is ready for the journey ahead."
    },
    {
        "Title" : "Recovery",
        "Desc" : "After a successful journey to space, our team is responsible for safely returning our customers back to Earth. Our recovery process is designed to ensure a smooth and comfortable landing, with trained professionals on hand to assist with any needs."
    }
]

let B4UK_1 = document.getElementById("B4UK_1")
let B4UK_2 = document.getElementById("B4UK_2")
let B4UK_3 = document.getElementById("B4UK_3")
let B4UK_4 = document.getElementById("B4UK_4")
let B4UK_5 = document.getElementById("B4UK_5")
let B4UK_6 = document.getElementById("B4UK_6")
let B4UK_Ttl = document.getElementById("B4UK_Ttl")
let B4UK_Desc = document.getElementById("B4UK_Desc")


B4UK_1.onclick = function() {
    B4UK_Ttl.innerText = Pre[0].Title
    B4UK_Desc.innerText = Pre[0].Desc
}
B4UK_2.onclick = function() {
    B4UK_Ttl.innerText = Pre[1].Title
    B4UK_Desc.innerText = Pre[1].Desc
}
B4UK_3.onclick = function() {
    B4UK_Ttl.innerText = Pre[2].Title
    B4UK_Desc.innerText = Pre[2].Desc
}
B4UK_4.onclick = function() {
    B4UK_Ttl.innerText = Pre[3].Title
    B4UK_Desc.innerText = Pre[3].Desc
}
B4UK_5.onclick = function() {
    B4UK_Ttl.innerText = Pre[4].Title
    B4UK_Desc.innerText = Pre[4].Desc
}
B4UK_6.onclick = function() {
    B4UK_Ttl.innerText = Pre[5].Title
    B4UK_Desc.innerText = Pre[5].Desc
}


