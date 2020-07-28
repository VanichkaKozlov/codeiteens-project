const user = {
  name: "Ivan",
  surname: "Kozlov",
  userPhoto: "my-photo.jpg",
  dreams: [
    {
      src: "Programming.jpg",
      alt: "To start community service project as a Frontend Developer",
      ovrl:
        "Personally for me, there is no better chance to give back to community than social project that would make a difference. So, I trully want to create something usefull. Something that would be matter, even despite of lacking experience.",
    },
    {
      src: "Stanford.jpg",
      alt: "To get Computer Science degree in Stanford University",
      ovrl:
        "Stanford University is known for its excellence in various academic and technical fields and this helps students to gain the knowledge needed for real life by learning from the one of the best tutors in the world.",
    },
    {
      src: "KARATE.jpg",
      alt: "To become a Champion of Europe in kyokushinkai karate",
      ovrl:
        "“It's about finding that balance where you have one foot in the familiar, one foot in the unfamiliar. If you have two feet in the unfamiliar it's overwhelming. If you have two feet in the familiar then there's just boredom. It's about having both.” - Humble the Poet",
    },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  750,
  1000,
  1200,
  1400,
  1500,
  1500,
  1800,
  2100,
  2400,
  2700,
  3000,
  3300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "HTML & CSS" },
  { month: "Липень", skill: "JavaScript" },
  { month: "Серпень", skill: "Java" },
  { month: "Вересень", skill: "React.js" },
  { month: "Жовтень", skill: "ReactNative" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
