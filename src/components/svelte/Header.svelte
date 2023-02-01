<script >
    import Img from "../Img.svelte";
    import Typewriter from 'typewriter-effect/dist/core';
    
    export let source=string;

    var app = document.getElementById('Header');

    var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
    });

    typewriter
    .pauseFor(1000)
    .typeString('Making space travel <span style="color: #5ec183;">convenient.</span>')
    .pauseFor(300)
    .deleteChars(11)
    .typeString('<span style="color: #5ec183;">faster.</span>')
    .pauseFor(1000)
    .deleteChars(8)
    .typeString('<span style="color: #5ec183;">easier.</span>')
    .pauseFor(1000)
    .deleteChars(7)
    .typeString('<span style="color: #5ec183;">enjoyable.</span>')
    .pauseFor(1000)
    .deleteChars(11)
    .typeString('<span style="color: #5ec183;">educating.</span>')
    .pauseFor(1000)
    .start();
</script>
    <header class="text-white pt-24 md:p-16 flex flex-row justify-center md:justify-start h-screen">
        <div class="flex flex-col gap-11">
        <div class=" flex flex-col gap-11">
        <!-- svelte-ignore a11y-missing-content -->
        <h1 class="text-3xl text-center md:text-left font-bold w-96 md:w-[30rem]" id="Header"></h1>
        <h1 class="text-lg text-center md:text-left font-semibold w-96">From low Earth orbit to the Moon and beyond, RocketSpace provides state-of-the-art spacecraft and <span class=" text-yellow-400">highly trained pilots</span> to ensure a <span class=" text-blue-400">safe and exciting </span>space travel experience for all. <br> Made by <span class="text-purple-500">#2043-901</span></h1>
        </div>
        <div class=" flex gap-x-4 justify-center md:justify-start">
            <a href="#About"><button class=" w-20 h-10 rounded-lg bg-red-500 text-black font-semibold">About ▼</button></a>
           <a href="./pricing.html"><button class=" w-20 h-10 rounded-lg bg-emerald-600 text-black font-semibold">Pricing</button></a>
        </div>
        </div>
        <div class=" w-0 md:w-screen flex justify-end">
            <Img Link={source}/>
        </div>
    </header>
    