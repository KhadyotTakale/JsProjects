const containerElement = document.querySelector(".container");



const careers = ["YouTuber", "Web Developer", "Influencer", "Freelancer"]

let careerIndex = 0;

let charIndex = 0;

updateText()

function updateText(){
charIndex++;
containerElement.innerHTML = `
<h1>I am ${careers[careerIndex].slice(0,1) === 'I'? "an":"a" } ${careers[careerIndex].slice(0,charIndex)}</h1>
`



    if(charIndex === careers[careerIndex].length){
        careerIndex++;
        charIndex = 0;
    }
    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    

    setTimeout(updateText,200)
}