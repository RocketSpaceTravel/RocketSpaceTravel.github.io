// for the before you know part of the HTML

let Pre = [
    {
        "Title" : "Planning",
        "Desc" : "At our space travel company, we have a team of experienced professionals who carefully plan every aspect of the space travel experience. From choosing the ideal launch window to selecting the most efficient spacecraft for the journey, our planning process is thorough and detailed to ensure a safe and successful trip to space. The planning process is based off of the pricing plan you chose, the number of people you have with you, and the time of the year. Our team will contact you to discuss the details of your space travel experience. Furthermore, our team pre-plans the space ship that you will be traveling to make sure that you have the best experience possible."
    },
    {
        "Title" : "Training",
        "Desc" : 'Before embarking on their space journey, all of our customers undergo rigorous training to prepare them for the physical and mental challenges of space travel. Our training program covers everything from zero-gravity simulations to emergency procedures, giving our customers the skills and confidence they need to succeed in space. If you chose the Premium plan, you will also have access to our exclusive training program, where you will learn how to navigate and operate your spacecraft, as well as participate in simulated space missions to prepare you for the real thing. However, if you have either of these conditions, you are unable to go into space. \n -High blood pressure \n -Heart Problems \n -Respiratory Problems \n -Not passed High School'
    },
    {
        "Title" : "Vehicles",
        "Desc" : "We operate a fleet of state-of-the-art spacecraft designed to safely transport people to and from space. Our vehicles are equipped with advanced technology to ensure a smooth and comfortable journey, and are regularly maintained to the highest standards to ensure the safety of our customers. The rocket's feature may vary depending on the price plan you select. However, all the safety, launch, etc will remain the same throughout the space ships no matter the pricing plan. The space ship is selected by our team which is based off of the time of the year, pricing plan that you chose, and the number you people you have with you may also affect the type of space ship you are traveling in."
    },
    {
        "Title" : "Safety",
        "Desc" : "Safety is our top priority at our space travel company. We have implemented strict safety protocols and procedures at every stage of the space travel process, from pre-launch planning to post-landing recovery. Our experienced team of engineers and technicians work tirelessly to ensure that every aspect of the space travel experience meets the highest standards of safety."
    },
    {
        "Title" : "Launch",
        "Desc" : "The launch of a spacecraft is a complex and highly coordinated process, and at our space travel company, we have the expertise and resources to ensure a smooth and successful launch. From countdown to liftoff, our team works to ensure that all systems are functioning properly and that the spacecraft is ready for the journey ahead. The space ship is selected by our team which is based off of the time of the year, pricing plan that you chose, and the number you people you have with you."
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


