import { user, arr, necessaryExpenses, todo } from "./data.js";

const refs = {
  userPhoto: document.querySelector(".user-photo"),
  container: document.querySelector(".container"),
  userName: document.querySelector(".user-name"),
  dreams: document.querySelector(".dreams"),
  plot1: document.querySelector(".plot-1"),
  plot2: document.querySelector(".plot-2"),
  plot3: document.querySelector(".accumulator"),
  clear: document.querySelector(".clear"),
  list: document.querySelector(".list"),
  dreamImg1: document.querySelector(".dream-1 .card-img"),
  dreamImg2: document.querySelector(".dream-2 .card-img"),
  dreamImg3: document.querySelector(".dream-3 .card-img"),
  dreamDescription1: document.querySelector(".dream-1 .card-description"),
  dreamDescription2: document.querySelector(".dream-2 .card-description"),
  dreamDescription3: document.querySelector(".dream-3 .card-description"),
};

/* =============== #PLOT ======================= */

function showPlot(array) {
  const maxHeight = 260;
  const maxValue = Math.max(...array);
  let scalingFactor = maxHeight / maxValue;
  return array
    .map(
      (e) => `
  <li class="plot-item" 
      style="height: ${e * scalingFactor}px" 
      title="${e}">
  </li> 
  `
    )
    .join("");
}

const stringHTML1 = showPlot(arr);

// filter

function isOverNecessaryExpenses(value) {
  // return value > 800;
  return value > necessaryExpenses;
}

const over = arr.filter(isOverNecessaryExpenses);

function save(element) {
  return element - necessaryExpenses;
}

const overNecessaryExpenses = over.map(save);

const stringHTML2 = showPlot(overNecessaryExpenses);

// reduce
const years = over.length;

function getSumForYear(value) {
  const forSave = value - necessaryExpenses;
  return forSave * years;
}

const sumByYear = over.map(getSumForYear);

function getSum(accumulator, element) {
  return accumulator + element;
}

const accumulation = sumByYear.reduce(getSum, 0);

const stringHTML3 = `<p>
  За ${years} років я можу накопичити<br> 
  <span class="gold">${accumulation}</span>
</p>`;

function showDreams(root, array) {
  const list = array
    .map(
      (e, i) => `
  <figure class="card dream-${i + 1}">
    <div class="card-img-wrapper">
      <img src="./images/${e.src}" 
           alt="${e.alt}" 
           class="card-img" 
      />
    </div>
    <figcaption class="card-description">${e.alt}</figcaption>
    <span class="overlay-color"><span>
    <p class="overlay-par">${e.ovrl}</p>
  </figure>
  `
    )
    .join("");
  root.insertAdjacentHTML("afterbegin", list);
}

function showPerson(ref, person) {
  const { name, surname, userPhoto} = person;
  const getFullName = `${name} ${surname}`;
  ref.userName.textContent = getFullName;
  ref.userPhoto.alt = getFullName;
  ref.userPhoto.src = `./images/${userPhoto}`;
}

function showTODO(ref, array) {
  const todos = array
    .map(
      ({ month, skill }) =>
        `<li class="list-item">
           <span class="month">${month}</span>
           <span class="skill">${skill}</span>
         </li>`
    )
    .join("");

  ref.insertAdjacentHTML("afterbegin", todos);
}

function run() {
  refs.plot1.insertAdjacentHTML("afterbegin", stringHTML1);
  refs.plot2.insertAdjacentHTML("afterbegin", stringHTML2);
  refs.plot3.insertAdjacentHTML("afterbegin", stringHTML3);
  showPerson(refs, user);
  showDreams(refs.dreams, user.dreams);
  showTODO(refs.list, todo);
}

run();

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
});

const typedTextSpan = document.querySelector(".title_typed");
const cursorSpan = document.querySelector(".cursor");

// var entities = {
//   '📅': '&#128197;',
//   '💭': '&#128173;',
//   '🎯': '&#127919;'
// }

const textArray = ["Dreams 💭", "Plans 📅", "Goals 🎯"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
