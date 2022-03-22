const quizDataFr = [

    {
        question: "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",
        choix: ["yes","no"],
        type: "radio",
        response: null
    },
    {
        question: "Quelle est votre température corporelle ?",
        choix: [34,42],
        type: "number",
        response: null
    },
    {
        question: "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
        choix: ["yes","no"],
        type: "radio",
        response: null
    },
    {
        question: "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
        choix: ["yes","no"],
        type: "radio",
        response: null

    },
    {
        question: "Ces derniers jours, avez-vous un mal de gorge ?",
        choix: ["yes","no"],
        type: "radio",
        response: null

    },
    {
        question: "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",
        choix: ["yes","no"],
        type: "radio",
        response: null
    },
    {
        question: "Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",
        choix: ["yes","no"],
        type: "radio",
        response: null
    },
    {
        question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
        choix: ["yes","no"],
        type: "radio",
        response: null
    },
    {
        question: "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
        choix: ["yes","no"],
        type: "radio",
        response: null
    },
    {
        question: "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
        choix: ["bine","assez bine","fatigué(e)","trés fatigué(e)"],
        type: "radio",
        response: null
    },
    {
        question: "Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.",
        choix: [15,110],
        type: "number",
        response: null
    },
    {
        question: "Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
        choix: [20,250],
        type: "number",
        response: null
    },
    {
        question: "Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
        choix: [80,250],
        type: "number",
        response: null
    },
    {
        question: "Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
        choix: ["yes","no"],
        type: "radio",
        response: null
    },
    {
        question: "Êtes-vous diabétique ?",
        choix: ["yes","no"],
        type: "radio",
        response: null
    },
    {
        question: "Avez-vous ou avez-vous eu un cancer ?",
        choix: ["yes","no"],
        type: "radio",
        response: null
    },
    {
        question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
        choix: ["yes","no"],
        type: "radio" ,
        response: null
    },
    {
        question: "Avez-vous une insuffisance rénale chronique dialysée ?",
        choix: ["yes","no"],
        type: "radio",
        response: null
    },
    {
        question: "Avez-vous une maladie chronique du foie ?",
        choix: ["yes","no"],
        type: "radio",
        response: null
    },
    {
        question: "Êtes-vous enceinte ?",
        choix: ["yes","no","Homme"],
        type: "radio",
        response: null
    },
    {
        question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
        choix: ["yes","no"],
        type: "radio",
        response: null
    },
    {
        question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
        choix: ["yes","no"],
        type: "radio",
        response: null
    }
]


// animation button de reponce



var btn_oui = document.querySelector("#btn_oui");
var btn_non = document.querySelector("#btn_non");
var btn = document.querySelector(".btn");
var suivant = document.getElementsByClassName("suivant");
document.getElementById('precedent').style.display = "none";
document.getElementById('suivant').disabled = true;
    numbre_question = 0;
    document.getElementById('question').innerHTML = quizDataFr[numbre_question].question;
    document.getElementById('progress_bar_etat').style.width = "4.545%";
    // if(quizDataFr[numbre_question].type == radio){
    //     document.getElementById('choix').innerHTML = "radio";
    // }



btn_oui.addEventListener('click', () => {
    btn_oui.classList.add("btncolor");
    btn_non.classList.remove("btncolor");
    document.getElementById('suivant').disabled = false;
}); 
btn_non.addEventListener('click', () => {
    btn_non.classList.add("btncolor");
    btn_oui.classList.remove("btncolor");
    document.getElementById('suivant').disabled = false;
});

var cont = document.getElementById("cont");

function switch_question() {
    document.getElementById('precedent').style.display = "block";
    numbre_question++;
    document.getElementById('question').innerHTML = quizDataFr[numbre_question].question;
    document.getElementById('progress_bar_etat').style.width = (numbre_question + 1)* 4.545 + "%";
    cont.innerText = numbre_question + 1 ;
}

function generate_choix() {
    // console.log(numbre_question);
    document.getElementById('choix').innerHTML = quizDataFr[numbre_question].choix;
}

