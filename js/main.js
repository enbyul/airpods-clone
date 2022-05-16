const header = document.querySelector("header");
const section1Img = document.querySelector(".section1 .scroll-img");
window.addEventListener("scroll", () => {
  const scr = window.scrollY;
  if (scr >= 44) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
});

//section1 background animation
const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");
const section1Text = document.querySelector(".section1 article.txt-box-1");
const section2Text = document.querySelector(".section1 article.txt-box-2");
const section1 = document.querySelector(".section1");

const frameCount = 147; //147
const currentFrame = (index) =>
  `images/airpods/${index.toString().padStart(4, "0")}.jpeg`;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 1158;
canvas.height = 770;
img.onload = function () {
  context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};
window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const maxScrollTopBody = html.scrollHeight - window.innerHeight * 6;
  const scrollFraction = scrollTop / maxScrollTopBody; // 0 ~ 1
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  section1Text.style.transform = `translateY(-${
    50 + scrollTop
  }%) translateX(-50%)`;
  if (frameIndex <= 138) {
    requestAnimationFrame(() => updateImage(frameIndex + 1));
  }
});

preloadImages();

//--------------------------------------------------------------------------------------------------------------------------------------------text scroll--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var controller = new ScrollMagic.Controller();
var animateElem = [".animate_1", ".animate_2", ".animate_3", ".animate_4"];
var triggerElem = [".trigger_1", ".trigger_2", ".trigger_3", ".trigger_4"];

for (var i = 0; i < animateElem.length; i++) {
  var currentAnimateElem = animateElem[i];
  var currentTriggerElem = triggerElem[i];

  var timeline = new TimelineMax();

  var tween_move = TweenMax.fromTo(
    currentAnimateElem,
    1,
    {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      y: 50,
    },
    {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      y: -50,
    }
  );

  var tween_opacity = new TimelineMax();
  tween_opacity
    .to(currentAnimateElem, 0.3, {
      ease: Linear.easeNone,
      opacity: 1,
    })
    .to(
      currentAnimateElem,
      0.3,
      {
        ease: Linear.easeNone,
        opacity: 0,
      },
      "+=0.4"
    );

  timeline.add(tween_move, 0).add(tween_opacity, 0);

  var scene_main = new ScrollMagic.Scene({
    triggerElement: currentTriggerElem,
    duration: "1500px",
  })
    .setTween(timeline)
    .addTo(controller);
}
