/*
const huidigeDag = prompt("Welke dag is het vandaag?");

if (huidigeDag === "maandag" || "dinsdag" || "donderdag" || "vrijdag") {
    console.log("Ik moet naar school");
}else {
    console.log("Ik heb weekend");
}
---------------
let huidigeTijd = new Date();
console.log(huidigeTijd.getHours());

if(huidigeTijd.getHours() > 8 || huidigeTijd.getHours() < 17) {
    console.log("Ik moet naar school");
} else {
    console.log("Ik ben vrij");
}
*/

console.log(document.documentElement.lang);

const translations = {
    en: {
        title: "Hello world!",
        text: "Max, the curious dog, discovered a secret garden full of colorful flowers one day. While playing, he found an old key that led to a hidden treasure."
    },
    nl: {
        title: "Hallo wereld!",
        text: "Max, de nieuwsgierige hond, ontdekte op een dag een geheime tuin vol kleurrijke bloemen. Terwijl hij speelde, vond hij een oude sleutel die naar een verborgen schat leidde."
    },
    ua: {
        title: "Привіт, світ!",
        text: "Макс, допитливий собака, одного дня відкрив таємний сад, повний яскравих квітів. Під час гри він знайшов старий ключ, який привів до прихованого скарбу."
    }
};
document.getElementById('language-select').addEventListener('change', function() {
    const lang = this.value;
    document.getElementById('main-title').textContent = translations[lang].title;
    document.getElementById('main-text').textContent = translations[lang].text;
    document.documentElement.lang = lang; 
    console.log(document.documentElement.lang);
});