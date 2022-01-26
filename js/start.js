const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function onClickStart(){
  main.style.WebkitAnimation = "fadeOut 2s";
  main.style.animation = "fadeOut 2s";
  qna.style.WebkitAnimation = "fadeIn 2s";
  qna.style.animation = "fadeIn 2s";
  main.style.display = "none";
  qna.style.display = "block";
}