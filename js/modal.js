const text = ["더 나은 개발자가 되기 위해,", "꾸준히 노력하는 개발자"];
const speed = 100;
let textIndex = 0;
let letterIndex = 0;

function typing() {
  if (textIndex < text.length) {
    if (letterIndex < text[textIndex].length) {
      document.getElementById("typeText").innerHTML +=
        text[textIndex].charAt(letterIndex);
      letterIndex++;
      setTimeout(typing, speed);
    } else {
      textIndex++;
      letterIndex = 0;
      if (textIndex < text.length) {
        document.getElementById("typeText").innerHTML += "<br/>";
        setTimeout(typing, speed);
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".morebtn");
  const containers = document.querySelectorAll(".container");

  //More index 버튼에 따라 해당하는 모달 띄우기
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      //인덱스 확보
      const index = button.getAttribute("data-index");
      if (Number(index) === 1) {
        document.getElementById("typeText").innerHTML = "";
        textIndex = 0;
        letterIndex = 0;
        typing();
      }

      containers.forEach((container) => {
        if (container.getAttribute("data-index") === index) {
          container.classList.toggle("hidden");
        } else {
          container.classList.add("hidden");
        }
      });
    });
  });

  //x 버튼 누르면 모달이 사라짐
  const closeButtons = document.querySelectorAll(".xBtn");

  closeButtons.forEach((close) => {
    close.addEventListener("click", () => {
      close.closest(".container").classList.add("hidden");
    });
  });

  //모달 밖(외부 요소) 클릭시 모달이 사라짐
  containers.forEach((container) => {
    container.addEventListener("click", (event) => {
      if (event.target === container) {
        container.classList.add("hidden");
      }
    });
  });
});
