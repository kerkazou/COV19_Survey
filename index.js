// Quiz
const quizDataFr = [

    {
        question: "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null
    },
    {
        question: "Quelle est votre température corporelle ?",
        choix: [34,42],
        type: "number",
        unite: "degrer",
        response: null
    },
    {
        question: "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null
    },
    {
        question: "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null

    },
    {
        question: "Ces derniers jours, avez-vous un mal de gorge ?",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null

    },
    {
        question: "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null
    },
    {
        question: "Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null
    },
    {
        question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null
    },
    {
        question: "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null
    },
    {
        question: "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
        choix: ["bine","assez bine","fatigué(e)","trés fatigué(e)"],
        icons: ["<i class='bi bi-emoji-laughing h1'></i>","<i class='bi bi-emoji-smile h1'></i>","<i class='bi bi-emoji-frown h1'></i>","<i class='bi bi-emoji-frown h1'></i>"],
        type: "radio",
        response: null
    },
    {
        question: "Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.",
        choix: [15,110],
        type: "number",
        unite: "ans",
        response: null
    },
    {
        question: "Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
        choix: [20,250],
        type: "number",
        unite: "kg",
        response: null
    },
    {
        question: "Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
        choix: [80,250],
        type: "number",
        unite: "cm",
        response: null
    },
    {
        question: "Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null
    },
    {
        question: "Êtes-vous diabétique ?",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null
    },
    {
        question: "Avez-vous ou avez-vous eu un cancer ?",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null
    },
    {
        question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio" ,
        response: null
    },
    {
        question: "Avez-vous une insuffisance rénale chronique dialysée ?",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null
    },
    {
        question: "Avez-vous une maladie chronique du foie ?",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null
    },
    {
        question: "Êtes-vous enceinte ?",
        choix: ["yes","no","Homme"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>","<i class='bi bi-person-fill h1'></i>"],
        type: "radio",
        response: null
    },
    {
        question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null
    },
    {
        question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
        choix: ["yes","no"],
        icons: ["<i class='bi bi-check-lg h1'></i>","<i class='bi bi-x-lg h1'></i>"],
        type: "radio",
        response: null
    }
]

var btn = document.querySelector(".btn");
var button = document.querySelector(".button");
var suivant = document.getElementsByClassName("suivant");
var cont = document.getElementById("cont");
document.getElementById('suivant').disabled = true;

// gestion des pages
var page2 = document.getElementById("page2");
var quiz = document.getElementById("quiz");
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
page2.style.display = "block";
quiz.style.display = "none";
result1.style.display = "none";
result2.style.display = "none";

var informations = document.getElementById('informations');
var questions = document.getElementById('questions');
var resultat = document.getElementById('resultat');
function demarrer_test() {
    page2.style.display = "none";
    quiz.style.display = "block";
    // Header Container
    informations.classList.remove('label-circle-s');
    informations.classList.add('label-circle-ns');
    questions.classList.remove('label-circle-ns');
    questions.classList.add('label-circle-s');
}



var numbre_question = 0;
document.getElementById('precedent').style.display = "none";
document.getElementById('terminer_test').style.display = "none";
document.getElementById('progress_bar_etat').style.width = "4.545%";
document.getElementById('NbrQests').innerHTML = quizDataFr.length;
cont.innerText = numbre_question + 1 ;
document.getElementById('question').innerHTML = quizDataFr[numbre_question].question;
document.getElementById('choix').innerHTML = generate_choix();


function generate_choix() {
    var content = "";
    if(quizDataFr[numbre_question].type== "radio"){
        for(var i = 0  ; i <= quizDataFr[numbre_question].choix.length-1 ; i++){
            content += `<button id="${i}" type="button" onclick="chokinBtn(${i})" value="${quizDataFr[numbre_question].choix[i]}" class="btn btn-group btn_chois button" id="btn_${i}"><span style="font-size: 20px; margin-bottom: 8px;">${quizDataFr[numbre_question].icons[i]}</span><span style="font-size: 20px;">${quizDataFr[numbre_question].choix[i]}</span></button>`;
        }
    }
    else if(quizDataFr[numbre_question].type== "number"){
        content += `<div class="input-group btn_chois" style="width: 60%;"><input type="number" onkeypress="chokinNbr()" onchange="chokinNbr()" value="${quizDataFr[numbre_question].response}" class="form-control input_num" max="${quizDataFr[numbre_question].choix[1]}" min="${ quizDataFr[numbre_question].choix[0]}"  placeholder="${quizDataFr[numbre_question].choix[0]} - ${quizDataFr[numbre_question].choix[1]} " > <span class="input-group-text input_num" style="background-color: rgba(77, 163, 206, 0.1);">${quizDataFr[numbre_question].unite}</span></div>`;
    }
    return content;
}


function question_suivant() {
    document.getElementById('suivant').disabled = true;
    document.getElementById('precedent').style.display = "block";
    numbre_question++;
    test_fin_quiz();
    cont.innerText = numbre_question + 1 ;
    document.getElementById('progress_bar_etat').style.width = (numbre_question + 1)* 4.545 + "%";
    document.getElementById('question').innerHTML = quizDataFr[numbre_question].question;
    document.getElementById('choix').innerHTML = generate_choix();
    console.log(quizDataFr[numbre_question-1].response)
}

function test_fin_quiz() {
    if(numbre_question == quizDataFr.length-1){
        document.getElementById('suivant').style.display = "none";
        document.getElementById('terminer_test').style.display = "block";
    }
    if(numbre_question == 0){
        document.getElementById('precedent').style.display = "none";
    }
}

function question_precedent() {
    document.getElementById('suivant').disabled = false;
    document.getElementById('precedent').style.display = "block";
    document.getElementById('suivant').style.display = "block";
    document.getElementById('terminer_test').style.display = "none";
    numbre_question--;
    test_fin_quiz();
    cont.innerText = numbre_question + 1 ;
    document.getElementById('progress_bar_etat').style.width = (numbre_question + 1)* 4.545 + "%";
    document.getElementById('question').innerHTML = quizDataFr[numbre_question].question;
    document.getElementById('choix').innerHTML = generate_choix();

    // for (let i = 0; i < quizDataFr[numbre_question].choix[i]; i++) {
    //     if(quizDataFr[numbre_question].response == quizDataFr[numbre_question].choix[i]){
    //         console.log(quizDataFr[numbre_question].response);
    //         console.log(i);
    //         document.getElementById(i).classList.add('btncolor');
    //     }
    // }

}

let pre = 0;
function chokinBtn(id){
    for(var i = 0  ; i <= quizDataFr[numbre_question].choix.length-1 ; i++ ){
        document.getElementById(i).classList.remove('btncolor');
    }
    document.getElementById(id).classList.add('btncolor');
    pre = id;
    document.getElementById('suivant').disabled = false;
    quizDataFr[numbre_question].response =  document.getElementById(id).innerText;
}

function chokinNbr() {
    const input_num = document.querySelector('.input_num');
    input_num.addEventListener('input', function () {
        if(this.value < quizDataFr[numbre_question].choix[0] || this.value > quizDataFr[numbre_question].choix[1]){
            input_num.style.background = "#eedbdb";
            input_num.style.color = "#a94442";
            document.getElementById('suivant').disabled = true;
        }
        else{
            input_num.style.color = "green";
            input_num.style.background = "#ffffff";
            quizDataFr[numbre_question].response = this.value;
            document.getElementById('suivant').disabled = false;
        }
    });
}

function terminer_test() {
    page2.style.display = "none";
    quiz.style.display = "none";
    result1.style.display = "block";
    result2.style.display = "block";
    questions.classList.remove('label-circle-s');
    questions.classList.add('label-circle-ns');
    resultat.classList.remove('label-circle-ns');
    resultat.classList.add('label-circle-s');
}


// document.getElementById("myButton").onclick = function () {
//     location.href = "www.yoursite.com";
// };