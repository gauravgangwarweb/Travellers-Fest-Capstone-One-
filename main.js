const activeMenu = document.getElementById('active-menu');
const hamMenu = document.getElementById('hamburger-menu');
const closeMenu = document.getElementById('close-menu');
const hideAll = document.querySelectorAll('section');

activeMenu.addEventListener('click', () => {
  hamMenu.style.display = 'flex';
  hideAll.forEach((i) => { i.style.display = 'none'; });
});

closeMenu.addEventListener('click', () => {
  hamMenu.style.display = 'none';
  hideAll.forEach((i) => { i.style.display = 'block'; });
});

hamMenu.addEventListener('click', () => {
  hamMenu.style.display = 'none';
  hideAll.forEach((i) => { i.style.display = 'block'; });
});

const teamMembers = [
  {
    mainImg: ['./Assets/staff1.jfif'],
    name: 'Romsha',
    designation: 'Founder $ CEO',
    about: 'Romsha is a passionate outdoor enthusiast with over 30 years of experience as a world traveller. Her first overseas trip was a 5 year stint where she worked her way around the world.',
  },
  {
    mainImg: ['./Assets/staff2.jfif'],
    name: 'Jorgon',
    designation: 'Manager, North Operations',
    about: 'Jorgen has been living and guiding in Ecuador for the past 10 years. He was born in Sweden in the town of Kiruna, but decided to swap the Arctic Circle for the Equator almost 20 years ago.',
  },
  {
    mainImg: ['./Assets/staff3.jpg'],
    name: 'Rolando',
    designation: 'Manager, South America Operations',
    about: 'Rolando (“Rolo”) lives for the outdoors and adventure. Also a recognized conservationist, Rolando provides our travellers with an unmatched level of connectivity to the real Panama.',
  },
  {
    mainImg: ['./Assets/staff4'],
    name: 'Miguel',
    designation: 'Operations Director',
    about: 'Miguel was born in the beautiful Andean city of Cusco where he learned to speak Quechua at the age of three. He now also speaks English and Spanish fluently.',
  },
  {
    mainImg: ['./Assets/staff5.jpg'],
    name: 'Meghan',
    designation: 'Manager, Spain',
    about: 'Meghan has been working at BikeHike Adventures as the Director of Operations for the past 15 years. Her passion for travel was passed on to her by her parents.',
  },
  {
    mainImg: ['./Assets/staff6.jpg'],
    name: 'Saaid',
    designation: 'Manager, East Operations',
    about: 'Saaid comes from the village of Tagleft, in the Central High Atlas Mountains. He has established a niche as a mountain biking and road cycling guide and has a superb knowledge of the back roads of Morocco.',
  },
];

let staffSec = '';

teamMembers.forEach((members) => {
  staffSec += `<div class="staff-cards flex gap-4">
              <div class="w-[30%] relative flex justify-center items-center">
                <img class="hidden absolute top-[-1.2vw] md:flex left-[0.1vw] h-20" src="./Assets/15ff7fa140f8de845d81db8dce526700.jpg" alt="pixels">
                <img class="h-48  md:w-[80%] justify-self-center z-10" src=${members.mainImg} alt=${members.name}>
              </div>
              <div class="w-[70%] text-left flex flex-col gap-2">
                <h4 class="text-[6vw] md:text-[1.4vw]">${members.name}</h4>
                <h5 class="text-[3vw] md:text-[1.1vw] italic text-[#f06042]">${members.designation}</h5>
                <p class="md:text-[1.2vw]">${members.about}</p>
              </div>
            </div>`;
});

document.querySelector('#staffCont').innerHTML = staffSec;

const moreBut = document.getElementById('more');
const lessBut = document.getElementById('less');
const card3 = document.querySelector('.staff-cards:nth-child(3)');
const card4 = document.querySelector('.staff-cards:nth-child(4)');
const card5 = document.querySelector('.staff-cards:nth-child(5)');
const card6 = document.querySelector('.staff-cards:nth-child(6)');

function hideFunction(i) {
  if (i.matches) {
    lessBut.style.display = 'none';
    moreBut.style.display = 'none';
    card3.style.display = 'flex';
    card4.style.display = 'flex';
    card5.style.display = 'flex';
    card6.style.display = 'flex';
  } else {
    moreBut.style.display = 'flex';
    card3.style.display = 'none';
    card4.style.display = 'none';
    card5.style.display = 'none';
    card6.style.display = 'none';
    moreBut.addEventListener('click', () => {
      card3.style.display = 'flex';
      card4.style.display = 'flex';
      card5.style.display = 'flex';
      card6.style.display = 'flex';
      moreBut.style.display = 'none';
      lessBut.style.display = 'flex';
    });

    lessBut.addEventListener('click', () => {
      card3.style.display = 'none';
      card4.style.display = 'none';
      card5.style.display = 'none';
      card6.style.display = 'none';
      moreBut.style.display = 'flex';
      lessBut.style.display = 'none';
    });
  }
}

const i = window.matchMedia('(min-width: 768px)');
hideFunction(i);
i.addListener(hideFunction);
