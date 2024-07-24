import hindi from "./netflix-hindi-content.js";
import english from "./netflix-english-content.js";

const homePage = document.querySelector(".home-page");
const feature = document.querySelector(".feature");
const faq = document.querySelector(".faq-container");
const footer = document.querySelector(".footer-continer")

//changing language

function changeLanguage(laguage) {
  const engLang = english;
  const hinLang = hindi;
  if (laguage == "hindi") {
    // homepage
    homePage.childNodes[1].childNodes[3].childNodes[1].childNodes[1].children[1].textContent = hinLang[0].langb;
    homePage.childNodes[1].childNodes[3].children[1].textContent = hinLang[0].singInb;
    homePage.childNodes[3].children[0].textContent = hinLang[0].heroHeading;
    homePage.childNodes[3].children[1].textContent = hinLang[0].heroSubHeading;
    homePage.childNodes[3].children[2].children[0].textContent = hinLang[0].Emailheading;
    homePage.childNodes[3].children[2].children[1].children[0].value  = hinLang[0].inputEmail;
    homePage.childNodes[3].children[2].children[1].children[1].value  = hinLang[0].btnSingup;
    //Features section
    feature.children[0].children[0].children[0].textContent = hinLang[1].box1;
    feature.children[0].children[0].children[1].textContent = hinLang[1].box1Content;

    feature.children[2].children[0].children[0].textContent = hinLang[2].box2;
    feature.children[2].children[0].children[1].textContent = hinLang[2].box2Content;
    feature.children[2].children[1].children[1].children[1].children[1].textContent = hinLang[2].downloading;

    feature.children[4].children[0].children[0].textContent = hinLang[3].box3;
    feature.children[4].children[0].children[1].textContent = hinLang[3].box3Content;

    feature.children[6].children[0].children[0].textContent = hinLang[4].box4;
    feature.children[6].children[0].children[1].textContent = hinLang[4].box4Content;

    // faq section 
    faq.children[0].textContent = hinLang[5].qaHeading;
    faq.children[1].children[0].children[0].textContent = hinLang[5].q1;
    faq.children[1].children[1].textContent = hinLang[5].a1;

    faq.children[2].children[0].children[0].textContent = hinLang[5].q2;
    faq.children[2].children[1].textContent = hinLang[5].a2;

    faq.children[3].children[0].children[0].textContent = hinLang[5].q3;
    faq.children[3].children[1].textContent = hinLang[5].a3;
    
    faq.children[4].children[0].children[0].textContent = hinLang[5].q4;
    faq.children[4].children[1].textContent = hinLang[5].a4;
    
    faq.children[5].children[0].children[0].textContent = hinLang[5].q5;
    faq.children[5].children[1].textContent = hinLang[5].a5;
    
    faq.children[6].children[0].children[0].textContent = hinLang[5].q6;
    faq.children[6].children[1].textContent = hinLang[5].a6;

    faq.children[7].children[0].textContent = hinLang[0].Emailheading;
    faq.children[7].children[1].children[0].value = hinLang[0].inputEmail;
    faq.children[7].children[1].children[1].value = hinLang[0].btnSingup;

    //footer list
    footer.children[0].children[0].innerHTML = hinLang[6].phone;

    footer.children[0].children[1].children[0].children[1].textContent = hindi[7][0][1];
    footer.children[0].children[1].children[0].children[2].textContent = hindi[7][0][2];
    footer.children[0].children[1].children[0].children[3].textContent = hindi[7][0][3];

    footer.children[0].children[1].children[1].children[0].textContent = hindi[7][1][0];
    footer.children[0].children[1].children[1].children[1].textContent = hindi[7][1][1];
    footer.children[0].children[1].children[1].children[2].textContent = hindi[7][1][2];
    footer.children[0].children[1].children[1].children[3].textContent = hindi[7][1][3];

    footer.children[0].children[1].children[2].children[0].textContent = hindi[7][2][0];
    footer.children[0].children[1].children[2].children[1].textContent = hindi[7][2][1];
    footer.children[0].children[1].children[2].children[2].textContent = hindi[7][2][2];
    footer.children[0].children[1].children[2].children[3].textContent = hindi[7][2][3];

    footer.children[0].children[1].children[3].children[0].textContent = hindi[7][3][0];
    footer.children[0].children[1].children[3].children[1].textContent = hindi[7][3][1];
    footer.children[0].children[1].children[3].children[2].textContent = hindi[7][3][2];

    footer.children[1].textContent= "Netflix भारत | Clone"
  } else {
    // homepage
    homePage.childNodes[1].childNodes[3].childNodes[1].childNodes[1].children[1].textContent = engLang[0].langb;
    homePage.childNodes[1].childNodes[3].children[1].textContent = engLang[0].singInb;
    homePage.childNodes[3].children[0].textContent = engLang[0].heroHeading;
    homePage.childNodes[3].children[1].textContent = engLang[0].heroSubHeading;
    homePage.childNodes[3].children[2].children[0].textContent = engLang[0].Emailheading;
    homePage.childNodes[3].children[2].children[1].children[0].value  = engLang[0].inputEmail;
    homePage.childNodes[3].children[2].children[1].children[1].value  = engLang[0].btnSingup;
    //Features section
    feature.children[0].children[0].children[0].textContent = engLang[1].box1;
    feature.children[0].children[0].children[1].textContent = engLang[1].box1Content;

    feature.children[2].children[0].children[0].textContent = engLang[2].box2;
    feature.children[2].children[0].children[1].textContent = engLang[2].box2Content;
    feature.children[2].children[1].children[1].children[1].children[1].textContent = engLang[2].downloading;

    feature.children[4].children[0].children[0].textContent = engLang[3].box3;
    feature.children[4].children[0].children[1].textContent = engLang[3].box3Content;

    feature.children[6].children[0].children[0].textContent = engLang[4].box4;
    feature.children[6].children[0].children[1].textContent = engLang[4].box4Content;

    // faq section 
    faq.children[0].textContent = engLang[5].qaHeading;
    faq.children[1].children[0].children[0].textContent = engLang[5].q1;
    faq.children[1].children[1].textContent = engLang[5].a1;

    faq.children[2].children[0].children[0].textContent = engLang[5].q2;
    faq.children[2].children[1].textContent = engLang[5].a2;

    faq.children[3].children[0].children[0].textContent = engLang[5].q3;
    faq.children[3].children[1].textContent = engLang[5].a3;
    
    faq.children[4].children[0].children[0].textContent = engLang[5].q4;
    faq.children[4].children[1].textContent = engLang[5].a4;
    
    faq.children[5].children[0].children[0].textContent = engLang[5].q5;
    faq.children[5].children[1].textContent = engLang[5].a5;
    
    faq.children[6].children[0].children[0].textContent = engLang[5].q6;
    faq.children[6].children[1].textContent = engLang[5].a6;

    faq.children[7].children[0].textContent = engLang[0].Emailheading;
    faq.children[7].children[1].children[0].value = engLang[0].inputEmail;
    faq.children[7].children[1].children[1].value = engLang[0].btnSingup;

    //footer list
    footer.children[0].children[0].innerHTML = engLang[6].phone;

    footer.children[0].children[1].children[0].children[1].textContent = english[7][0][1];
    footer.children[0].children[1].children[0].children[2].textContent = english[7][0][2];
    footer.children[0].children[1].children[0].children[3].textContent = english[7][0][3];

    footer.children[0].children[1].children[1].children[0].textContent = english[7][1][0];
    footer.children[0].children[1].children[1].children[1].textContent = english[7][1][1];
    footer.children[0].children[1].children[1].children[2].textContent = english[7][1][2];
    footer.children[0].children[1].children[1].children[3].textContent = english[7][1][3];

    footer.children[0].children[1].children[2].children[0].textContent = english[7][2][0];
    footer.children[0].children[1].children[2].children[1].textContent = english[7][2][1];
    footer.children[0].children[1].children[2].children[2].textContent = english[7][2][2];
    footer.children[0].children[1].children[2].children[3].textContent = english[7][2][3];

    footer.children[0].children[1].children[3].children[0].textContent = english[7][3][0];
    footer.children[0].children[1].children[3].children[1].textContent = english[7][3][1];
    footer.children[0].children[1].children[3].children[2].textContent = english[7][3][2];

    footer.children[1].textContent= "Netflix India   | Clone"
  }
  
}

export default changeLanguage;