const answers=  document.querySelectorAll(".q-container");

for (let answer of answers){
    const question = answer.children[0];
    // console.log(question);
    const dropdown= answer.children[0].children[1];
    console.log(dropdown);
    question.addEventListener("click",()=>{
        const toggleAnswer= answer.children[1];
        toggleAnswer.classList.toggle("ans-on");
        dropdown.classList.toggle("rotated-dropdown")
    })
}

const langBtn= document.querySelectorAll(".main-lang-ctn")
const languageButton= document.querySelectorAll(".lang-dropdown-list")
console.log(languageButton);
// console.log(languageButton);
for (const langbtn of langBtn) {
    langbtn.addEventListener("click",()=>{

        for (const langButton of languageButton) {
            langButton.classList.toggle("lang-on");
            console.log("im working");
            
        }
    })
}
