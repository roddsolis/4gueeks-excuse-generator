let who = ["El perro ", "Mi abuela ", "La tortuga ", "Mi pájaro "];
let action = ["se comió ", "meó ", "aplastó ", "rompió "];
let what = ["mi tarea ", "las llaves ", "el auto "];
let when = [
  "antes de la clase",
  "al despertar",
  "de camino a casa",
  "durante mi almuerzo",
  "mientras estaba orando"
];

// ¿Quién es el cupable?, ¿Que hizo? , ¿Que quieres evitar? , ¿Cuando?
// Mi abuela aplasto mi tarea cuando terminé
// who - action - what - when

function onload() {
  let excuseContainer = document.getElementById("excuse-container");
  let randomImg = document.getElementById("img-random");

  let imgUrl = [
    "https://em-content.zobj.net/source/microsoft-teams/363/dog_1f415.png",
    "https://em-content.zobj.net/source/microsoft-teams/363/old-woman_1f475.png",
    "https://em-content.zobj.net/source/microsoft-teams/363/turtle_1f422.png",
    "https://em-content.zobj.net/source/microsoft-teams/363/bird_1f426.png"
  ];

  let a = Math.floor(Math.random() * 4);
  let b = Math.floor(Math.random() * 4);
  let c = Math.floor(Math.random() * 3);
  let d = Math.floor(Math.random() * 5);
  randomImg.src = imgUrl[a];
  excuseContainer.innerText = who[a] + action[b] + what[c] + when[d];
}

onload();
