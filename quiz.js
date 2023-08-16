const questions = [
  {
    q: "2+2",
    a: 4,
    options: [5, 4, 3, 2],
  },
  {
    q: "2*2*0",
    a: 0,
    options: [22, 4, 0, 2],
  },
  {
    q: "3+3-3",
    a: 3,
    options: [9, 3, 33, 333],
  },
  {
    q: "4*4/2",
    a: 8,
    options: [8, 16, 4, 44],
  },
];




let pera = document.querySelector(".ques");
let lable = document.querySelectorAll("label")


let y = 0;
pera.innerHTML = questions[y].q

function skm() {

  pera.innerHTML = questions[y].q

  y = y + 1;

  for(let j=0; j<lable.length; j++){
    // console.log(questions[y].options[j]);
   lable[j].innerHTML = questions[y].options[j]

  }

  if (y == 4) {
    clearInterval(x)
  }
}



let x;
let z = () => {
  x = setInterval(skm, 3000)

}

z();

