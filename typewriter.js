var app = document.getElementById('Header');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Making space travel <span style="color: #9390FF;">convenient.</span>')
  .pauseFor(300)
  .deleteChars(11)
  .typeString('<span style="color: #9390FF;">faster.</span>')
  .pauseFor(1000)
  .deleteChars(8)
  .typeString('<span style="color: #9390FF;">easier.</span>')
  .pauseFor(1000)
  .deleteChars(7)
  .typeString('<span style="color: #9390FF;">enjoyable.</span>')
  .pauseFor(1000)
  .deleteChars(11)
  .typeString('<span style="color: #9390FF;">educating.</span>')
  .pauseFor(1000)
  .start();