const arrayMovie = [
  {
    id: 1,
    name: "The Last of Us",
    image: "https://image.tmdb.org/t/p/w500/uQ4lG7E7mlyKsGvbASftQ6Hu2IX.jpg",
  },
  {
    id: 2,
    name: "El Camino: A Breaking Bad Movie",
    image: "https://image.tmdb.org/t/p/w500/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
  },
  {
    id: 3,
    name: "Fountain of Youth",
    image: "https://image.tmdb.org/t/p/w500/aESb695wTIF0tB7RTGRebnYrjFK.jpg",
  },
  {
    id: 4,
    name: "Rick and Morty",
    image: "https://image.tmdb.org/t/p/w500/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg",
  },
  {
    id: 5,
    name: "Until Dawn",
    image: "https://image.tmdb.org/t/p/w500/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
  },
  {
    id: 6,
    name: "Lilo & Stitch",
    image: "https://image.tmdb.org/t/p/w500/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
  },
  {
    id: 7,
    name: "Fear Street: Prom Queen",
    image: "https://image.tmdb.org/t/p/w500/qspghhpOyaBGgZDJoCbV2o9WNMU.jpg",
  },
  {
    id: 8,
    name: "Mission: Impossible - The Final Reckoning",
    image: "https://image.tmdb.org/t/p/w500/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
  },
  {
    id: 9,
    name: "A Minecraft Movie",
    image: "https://image.tmdb.org/t/p/w500/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
  },
  {
    id: 10,
    name: "Sinners",
    image: "https://image.tmdb.org/t/p/w500/nAxGnGHOsfzufThz20zgmRwKur3.jpg",
  },
  {
    id: 11,
    name: "One Piece",
    image: "https://image.tmdb.org/t/p/w500/2rmK7mnchw9Xr3XdiTFSxTTLXqv.jpg",
  },

  {
    id: 12,
    name: "Super Furball Saves the Future",
    image: "https://image.tmdb.org/t/p/w500/cYQhEjz8TcycbHpf9qHBxroYE0M.jpg",
  },

  {
    id: 13,
    name: "Future X-Cops",
    image: "https://image.tmdb.org/t/p/w500/gMpNIWkquZFFjjshcDEy3r0mR1m.jpg",
  },

  {
    id: 14,
    name: "Future Shock",
    image: "https://image.tmdb.org/t/p/w500/vA1BwFOWLHZYhwCUVyQ67GESpAY.jpg",
  },
  {
    id: 15,
    name: "With You in the Future",
    image: "https://image.tmdb.org/t/p/w500/94UuKFxMiEwTjdwBMhm1y3jKKKF.jpg",
  },
  {
    id: 16,
    name: "News Report on a Journey to a Bright Future",
    image: "https://image.tmdb.org/t/p/w500/mYfFH3Drpk6WlCJxgkwVRVOSTBT.jpg",
  },
  {
    id: 17,
    name: "Alienoid: Return to the Future",
    image: "https://image.tmdb.org/t/p/w500/4RClncz0GTKPZzSAcAalHCw0h3g.jpg",
  },
  {
    id: 18,
    name: "Orange: Future",
    image: "https://image.tmdb.org/t/p/w500/s6jYHlRCVMyLhceipAD6oHokish.jpg",
  },
  {
    id: 19,
    name: "Yor, the Hunter from the Future",
    image: "https://image.tmdb.org/t/p/w500/8cMkOOHlJaeQKgGPakxc6sEHHKJ.jpg",
  },
  {
    id: 20,
    name: "Doraemon: Nobita and the Future Notes",
    image: "https://image.tmdb.org/t/p/w500/fCi1IuxDF8RMVPl2SylhUWxHSg.jpg",
  },
  {
    id: 21,
    name: "Notes for the future",
    image: "https://image.tmdb.org/t/p/w500/jLrO2dC8oCPoApJCNW7ERgDwalu.jpg",
  },

  {
    id: 22,
    name: "Woman Is the Future of Man",
    image: "https://image.tmdb.org/t/p/w500/3bovtjGw5XB3aDKaWkfYnCupBbI.jpg",
  },

  {
    id: 23,
    name: "Warriors of Future",
    image: "https://image.tmdb.org/t/p/w500/2l9LbxBSkJseoxYcIJjclnmxyq.jpg",
  },
  {
    id: 24,
    name: "Beyond the Boundary: I'll Be Here Future",
    image: "https://image.tmdb.org/t/p/w500/oXWvj6JOmoNKiyALLNlRQDEaeQ4.jpg",
  },
  {
    id: 25,
    name: "Last Bullet",
    image: "https://image.tmdb.org/t/p/w500/qycPITRqXgPai7zj1gKffjCdSB5.jpg",
  },
  {
    id: 26,
    name: "Heavy Load",
    image: "https://image.tmdb.org/t/p/w500/3irQj0GrbhvRSO6V9cegRTwKFIH.jpg",
  },
  {
    id: 27,
    name: "The Last Night of Sandra M.",
    image: "https://image.tmdb.org/t/p/w500/ycBwDgJJ40dTE52fWBliqQKFD43.jpg",
  },
  {
    id: 28,
    name: "The Last Mercenary",
    image: "https://image.tmdb.org/t/p/w500/ttpKJ7XQxDZV252KNEHXtykYT41.jpg",
  },

  {
    id: 29,
    name: "Lover of the Last Empress",
    image: "https://image.tmdb.org/t/p/w500/aBMD9XUaerpZxJDBnHEJ1Qev0tj.jpg",
  },

  {
    id: 30,
    name: "Last Night at Terrace Lanes",
    image: "https://image.tmdb.org/t/p/w500/2yxKZFOVIcNSXqABn9KqGHlBDHZ.jpg",
  },
  {
    id: 31,
    name: "Last Stop: Rocafort St.",
    image: "https://image.tmdb.org/t/p/w500/fCjSwkDHYHib2jNNyhcuIO8d8jw.jpg",
  },
  {
    id: 32,
    name: "The Last Birthday",
    image: "https://image.tmdb.org/t/p/w500/zUjWFRvBJJkCezXzmIfj1dha34P.jpg",
  },
  {
    id: 33,
    name: "Emanuelle and the Last Cannibals",
    image: "https://image.tmdb.org/t/p/w500/8jYVCgty3i1ZzdXAgNB1NIOBgpk.jpg",
  },
  {
    id: 34,
    name: "The Last: Naruto the Movie",
    image: "https://image.tmdb.org/t/p/w500/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg",
  },
  {
    id: 35,
    name: "The Last Client",
    image: "https://image.tmdb.org/t/p/w500/oUhZzMpHAMgdRgLbsvBIqhY7fKe.jpg",
  },
  {
    id: 36,
    name: "Soy Luna: The Last Concert",
    image: "https://image.tmdb.org/t/p/w500/wKw7suet4zEZFOPul03qBEKriUV.jpg",
  },
  {
    id: 37,
    name: "Undisputed II: Last Man Standing",
    image: "https://image.tmdb.org/t/p/w500/2gMCokqpIJoh6u5o06LlOZWsI3k.jpg",
  },
  {
    id: 38,
    name: "When Did You Last See Your Father?",
    image: "https://image.tmdb.org/t/p/w500/fWzhqUMGva7sKENr4L6M1RC7BlA.jpg",
  },
  {
    id: 39,
    name: "Venom: The Last Dance",
    image: "https://image.tmdb.org/t/p/w500/vGXptEdgZIhPg3cGlc7e8sNPC2e.jpg",
  },
  {
    id: 40,
    name: "Last Harem",
    image: "https://image.tmdb.org/t/p/w500/7vDDKNnt5mp9eVYRh7nCcj3pV7S.jpg",
  },
  {
    id: 41,
    name: "The Last Tycoon",
    image: "https://image.tmdb.org/t/p/w500/kK1oJPyyXtsNpYyyIet8H2WUj1X.jpg",
  },
  {
    id: 42,
    name: "The Last Warrior",
    image: "https://image.tmdb.org/t/p/w500/lQeYTkq8Joz3hlogYrioCxU7aTo.jpg",
  },

  {
    id: 43,
    name: "MAR",
    image: "https://image.tmdb.org/t/p/w500/scSJ1y7WkHwYXHXay0s1QgjueT2.jpg",
  },

  {
    id: 44,
    name: "Mär - A German Tale",
    image: "https://image.tmdb.org/t/p/w500/jS042piKgTS03psrSAitFDBv8MI.jpg",
  },

  {
    id: 45,
    name: "Sea",
    image: "https://image.tmdb.org/t/p/w500/ixMfttncbEIpkV9Cc2qQT2HU2ng.jpg",
  },
  {
    id: 46,
    name: "Sea",
    image: "https://image.tmdb.org/t/p/w500/eCv97pJuweXtbWA5TNyFIHod59l.jpg",
  },
  {
    id: 47,
    name: "Mar",
    image: "https://image.tmdb.org/t/p/w500/ookr912QMT3iqfVMriqjcr45Nb7.jpg",
  },
  {
    id: 48,
    name: "Breaking the Silence: The Maria Soledad Case",
    image: "https://image.tmdb.org/t/p/w500/6cbUELk2kQw5QqETOvJ26D3V9TZ.jpg",
  },
  {
    id: 49,
    name: "Marrowbone",
    image: "https://image.tmdb.org/t/p/w500/iX77zMSqUv2Qt7ToEnN2mmEudEf.jpg",
  },
  {
    id: 50,
    name: "Maroun Returns to Beirut",
    image: "https://image.tmdb.org/t/p/w500/g2Kv6mdYZQgKzyG3L5dDo65cz0S.jpg",
  },
  {
    id: 51,
    name: "Mar",
    image: "https://image.tmdb.org/t/p/w500/1rJtNp4Z5oe8Yi6emdDhn5u1vMU.jpg",
  },
  {
    id: 52,
    name: "Sea",
    image: "https://image.tmdb.org/t/p/w500/kUAuFxmE9fj2toUw87is6n9MDvj.jpg",
  },
  {
    id: 53,
    name: "The Marco Effect",
    image: "https://image.tmdb.org/t/p/w500/iedopRnMHIDyQlZzTTfroJfHhSN.jpg",
  },
  {
    id: 54,
    name: "Martians vs Mexicans",
    image: "https://image.tmdb.org/t/p/w500/nJgST3eXOVB8w7aW6Cjnsc1BxEE.jpg",
  },
  {
    id: 55,
    name: "Rabbids Invasion - Mission To Mars",
    image: "https://image.tmdb.org/t/p/w500/2nQoUa3eY9YTqbcrPzdQVncDNfn.jpg",
  },
  {
    id: 56,
    name: "Chuck Billy and The Marvelous Guava Tree",
    image: "https://image.tmdb.org/t/p/w500/d2K7Zhw9yRjzoa4HBbrjt7aqlgT.jpg",
  },
  {
    id: 57,
    name: "Holiday on Mars",
    image: "https://image.tmdb.org/t/p/w500/xToifX6n4U5WZoiiBMaPiibyjXr.jpg",
  },
  {
    id: 58,
    name: "HOUBA! On the Trail of the Marsupilami",
    image: "https://image.tmdb.org/t/p/w500/yn3ydorp7YigPcnEZgNMvdNHPaF.jpg",
  },
  {
    id: 59,
    name: "- Mar -",
    image: "https://image.tmdb.org/t/p/w500/1Yp7mnUJXrCZsMzGOav61m4rNdJ.jpg",
  },
  {
    id: 60,
    name: "Royalteen: Princess Margrethe",
    image: "https://image.tmdb.org/t/p/w500/yZ6rd29u0Z4ICp4QVSXm1uQ7gjy.jpg",
  },

  {
    id: 61,
    name: "A Day Without a Mexican",
    image: "https://image.tmdb.org/t/p/w500/3vyKh5kdYw1attsNOX21Ru433Ro.jpg",
  },
  {
    id: 62,
    name: "Barbarous Mexico",
    image: "https://image.tmdb.org/t/p/w500/xQ1du8KQ0xijNQTceLmttt4Uokz.jpg",
  },
  {
    id: 63,
    name: "Salon Mexico",
    image: "https://image.tmdb.org/t/p/w500/kuxCD96B8kcDfMup0Js8GAfDmoX.jpg",
  },
  {
    id: 64,
    name: "The Olympics in Mexico",
    image: "https://image.tmdb.org/t/p/w500/gkQhstxIA3Y50bGnFPm8CPJJXjy.jpg",
  },
  {
    id: 65,
    name: "Mexican Dream",
    image: "https://image.tmdb.org/t/p/w500/1ThCRKD7RG0cN93hfhbUoDPPeme.jpg",
  },
  {
    id: 66,
    name: "MexZombies",
    image: "https://image.tmdb.org/t/p/w500/85zufUxhD97k2s5Bu2u101Qd8Sg.jpg",
  },
  {
    id: 67,
    name: "The Singer from Mexico",
    image: "https://image.tmdb.org/t/p/w500/oOTNnMCISYPDeisxaROkqOosTk9.jpg",
  },
  {
    id: 68,
    name: "Mexican Slayride",
    image: "https://image.tmdb.org/t/p/w500/fmBQLZzfLphpwZTMb0jkiuf2RL6.jpg",
  },
  {
    id: 69,
    name: "The Black Legend of Mexican Cinema",
    image: "https://image.tmdb.org/t/p/w500/nBQ5X4wfnhIOrNFBT0I9R7uemMZ.jpg",
  },

  {
    id: 70,
    name: "Mexico 2000",
    image: "https://image.tmdb.org/t/p/w500/8xl56csH4q61wn11QJ0aMQXiuy7.jpg",
  },

  {
    id: 71,
    name: "The Mexican Experiment",
    image: "https://image.tmdb.org/t/p/w500/iI7xYBzRGSCEksQTNDJSRpGTLMu.jpg",
  },
  {
    id: 72,
    name: "Hurray Mexico!",
    image: "https://image.tmdb.org/t/p/w500/dNfI9Jiv8TyYuGi3wFqVAgiIshu.jpg",
  },
  {
    id: 73,
    name: "Reed: Insurgent Mexico",
    image: "https://image.tmdb.org/t/p/w500/aSHCVDiUy1NA5rDcmVicji2C1TP.jpg",
  },
  {
    id: 74,
    name: "Mexican Gangster",
    image: "https://image.tmdb.org/t/p/w500/6lDqG116zL1hhB4jgTNDv24e5cv.jpg",
  },
  {
    id: 75,
    name: "Mexeu com uma, mexeu com todas",
    image: "https://image.tmdb.org/t/p/w500/290BiwaJe2HS4QjtZcT1U5wDZvc.jpg",
  },
  {
    id: 76,
    name: "Viva High School Musical: Mexico",
    image: "https://image.tmdb.org/t/p/w500/iZPXA4l4t5ZlIQgLUddCcr6oBk4.jpg",
  },
  {
    id: 77,
    name: "Basket of Mexican Tales",
    image: "https://image.tmdb.org/t/p/w500/ebTMLzOCSIZwuDtzurcUSjWgiT3.jpg",
  },

  {
    id: 78,
    name: "Breaking",
    image: "https://image.tmdb.org/t/p/w500/rKbgbzJbVM7MLjN7EwdO1QcIXCz.jpg",
  },
  {
    id: 79,
    name: "Breaking the Silence: The Maria Soledad Case",
    image: "https://image.tmdb.org/t/p/w500/6cbUELk2kQw5QqETOvJ26D3V9TZ.jpg",
  },

  {
    id: 80,
    name: "Breaking and Re-entering",
    image: "https://image.tmdb.org/t/p/w500/cPn85RMPzt8S2SiAxKAFOpzMp2e.jpg",
  },
  {
    id: 81,
    name: "BreakIn(g)",
    image: "https://image.tmdb.org/t/p/w500/dVGGoCeOoeIGJ5wqpVq2OFJMr6N.jpg",
  },
  {
    id: 82,
    name: "Bangkok Breaking: Heaven and Hell",
    image: "https://image.tmdb.org/t/p/w500/6VeDn4oIeUK4XwjWGWMb6qvMImQ.jpg",
  },
  {
    id: 83,
    name: "Breaking Point",
    image: "https://image.tmdb.org/t/p/w500/kMfzNO3lpATB5mxc8D06PR9T2nO.jpg",
  },
  {
    id: 84,
    name: "Breaking News",
    image: "https://image.tmdb.org/t/p/w500/zzmKQKmUNt9pUGsHsra7Tmb8CYp.jpg",
  },

  {
    id: 85,
    name: "Breaking the Limits",
    image: "https://image.tmdb.org/t/p/w500/b9ZwoLW1sD2DST53lAQAE8Fog0a.jpg",
  },
  {
    id: 86,
    name: "Don't Go Breaking My Heart",
    image: "https://image.tmdb.org/t/p/w500/l3wF8nHu1v2R1iI5ZIQ0zgyIeW.jpg",
  },
  {
    id: 87,
    name: "Breaking the Taboo",
    image: "https://image.tmdb.org/t/p/w500/vOpX1BZwvyrQ0ZpijcXHLvVfRAr.jpg",
  },
  {
    id: 88,
    name: "Breaking the Surface",
    image: "https://image.tmdb.org/t/p/w500/pPB609vfOSIn4bFceyErf03mUFK.jpg",
  },
  {
    id: 89,
    name: "A Break of Happy Moments",
    image: "https://image.tmdb.org/t/p/w500/7V6aeiGDJMlV70dY8Xt7Nt9iJKm.jpg",
  },
  {
    id: 90,
    name: "The Twilight Saga: Breaking Dawn - Part 2",
    image: "https://image.tmdb.org/t/p/w500/7IGdPaKujv0BjI0Zd0m0a4CzEjJ.jpg",
  },
  {
    id: 91,
    name: "Breaking Wind",
    image: "https://image.tmdb.org/t/p/w500/vU7kTesoBciyayvATmERXDWoZdO.jpg",
  },
  {
    id: 92,
    name: "About Luis",
    image: "https://image.tmdb.org/t/p/w500/s8qpcEl9aR10DkSA5WIDHOOdc4K.jpg",
  },
  {
    id: 93,
    name: "About Fire",
    image: "https://image.tmdb.org/t/p/w500/u1aC1Q9NvSo91u2gowHr5fpGt5J.jpg",
  },
  {
    id: 94,
    name: "How About Adolf?",
    image: "https://image.tmdb.org/t/p/w500/uJ8MvRQdlCIvqKiRBwW9Zxxa9N7.jpg",
  },
  {
    id: 95,
    name: "Tell Me About Love",
    image: "https://image.tmdb.org/t/p/w500/A3I47Gbll1NSfeAvR4aoLsQU6ue.jpg",
  },

  {
    id: 96,
    name: "Maybe It's True What They Say About Us",
    image: "https://image.tmdb.org/t/p/w500/cUT2d0Czgh3HjGrKL4J8Wo5VMw9.jpg",
  },
  {
    id: 97,
    name: "What Men Talk About",
    image: "https://image.tmdb.org/t/p/w500/kprgQJtu9I5ZWaDHeTTufDIGgaa.jpg",
  },
  {
    id: 98,
    name: "Nothing About Robert",
    image: "https://image.tmdb.org/t/p/w500/bHUzO3a0KpcKlfwo09VZksjQUWW.jpg",
  },
  {
    id: 99,
    name: "All About Lily Chou-Chou",
    image: "https://image.tmdb.org/t/p/w500/wsWykvCckkb3kkl4j4xsFJLtJKP.jpg",
  },
  {
    id: 100,
    name: "No One Knows About Persian Cats",
    image: "https://image.tmdb.org/t/p/w500/fhsZEUHpo6hRw4IKJE5qL2oRiUb.jpg",
  },
];

const butPrev = document.getElementsByTagName("button")[0];
const butNext = document.getElementsByTagName("button")[1];

let listOfMovie = document.createElement("ul");
listOfMovie.classList.add("items");

let currentPage = 0;
let itemsPage = 10;
function updateList() {
  let startItem = currentPage * itemsPage;
  let endItem = startItem + itemsPage;

  let itemsInPage = arrayMovie.slice(startItem, endItem);

  listOfMovie.innerHTML = "";

  for (let i = 0; i < itemsInPage.length; i++) {
    let item = document.createElement("li");

    item.classList.add("everyItem");

    let itemName = document.createElement("h2");
    itemName.innerText = itemsInPage[i].name;
    itemName.classList.add("everyTitle");

    let itemImg = document.createElement("img");
    itemImg.src = itemsInPage[i].image;
    itemImg.alt = itemsInPage[i].name;

    item.append(itemName, itemImg);
    listOfMovie.append(item);
  }

  const container = document.querySelector(".sectionMovie");
  container.appendChild(listOfMovie);

  if (currentPage === 0) {
    butPrev.style.visibility = "hidden";
  } else {
    butPrev.style.visibility = "visible";
  }
  if (currentPage >= Math.ceil(arrayMovie.length / itemsPage) - 1) {
    butNext.style.visibility = "hidden";
  } else {
    butNext.style.visibility = "visible";
  }

  butPrev.disabled = currentPage === 0;
  butNext.disabled =
    currentPage === Math.ceil(arrayMovie.length / itemsPage) - 1;
}

butPrev.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updateList();
  }
});
butNext.addEventListener("click", () => {
  if (currentPage < Math.ceil(arrayMovie.length / itemsPage) - 1) {
    currentPage++;
    updateList();
  }
});
updateList();
