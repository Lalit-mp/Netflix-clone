import hindi from "./netflix-hindi-content.js";
import english from "./netflix-english-content.js";
import changeLanguage from "./change-lang.js"
// Faq opener
const answers = document.querySelectorAll(".q-container");

for (let answer of answers) {
  const question = answer.children[0];
  const dropdown = answer.children[0].children[1];
  question.addEventListener("click", () => {
    const toggleAnswer = answer.children[1];
    toggleAnswer.classList.toggle("answer-active");
    dropdown.classList.toggle("rotated-dropdown");
  });
}

// laguage change button
const langButton = document.querySelectorAll(".main-lang-ctn");
for (const langbtn of langButton) {
  const dropDownButton = document.getElementsByClassName("lang-dropdown-list");
  langbtn.addEventListener("click",(e)=>{
    for (const iterator of dropDownButton) {
      iterator.classList.toggle("lang-dropdown-list-on");
      if (e.target.textContent == "हिन्दी") {
        langbtn.childNodes[1].children[1].textContent="हिन्दी";
        changeLanguage("hindi");
      }else if(e.target.textContent == "English") {
        langbtn.childNodes[1].children[1].textContent="English";
        changeLanguage("english");
      }
    }

    })
     
};
