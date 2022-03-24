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
// document.getElementById('suivant').disabled = true;


var numbre_question = 0;
document.getElementById('precedent').style.display = "none";
document.getElementById('terminer_test').style.display = "none";
document.getElementById('question').innerHTML = quizDataFr[numbre_question].question;
document.getElementById('progress_bar_etat').style.width = "4.545%";
document.getElementById('choix').innerHTML = generate_choix();


function generate_choix() {
    var content = "";
    if(quizDataFr[numbre_question].type== "radio"){
        for(var i = 0  ; i <= quizDataFr[numbre_question].choix.length-1 ; i++ ){
            content += '<button value="'+ quizDataFr[numbre_question].choix[i] +'" class="btn btn-group btn_chois button" id="btn_'+i+'"><span style="font-size: 20px; margin-bottom: 8px;">'+quizDataFr[numbre_question].icons[i]+'</span><span style="font-size: 20px;">'+quizDataFr[numbre_question].choix[i]+'</span></button>';
            // 
        }
    }
    if(quizDataFr[numbre_question].type== "number"){
        content += '<div class="input-group btn_chois" style="width: 60%;"><input type="number" class="form-control input_num" max="'+quizDataFr[numbre_question].choix[1]+'" min="'+ quizDataFr[numbre_question].choix[0]+'"  placeholder="'+quizDataFr[numbre_question].choix[0] +"-"+ quizDataFr[numbre_question].choix[1] +'" > <span class="input-group-text input_num" style="background-color: rgba(77, 163, 206, 0.1);">'+ quizDataFr[numbre_question].unite +'</span></div>'
    }
    return content;
}



function question_suivant() {
    document.getElementById('precedent').style.display = "block";
    numbre_question++;
    test_fin_quiz();
    cont.innerText = numbre_question + 1 ;
    document.getElementById('progress_bar_etat').style.width = (numbre_question + 1)* 4.545 + "%";
    document.getElementById('question').innerHTML = quizDataFr[numbre_question].question;
    document.getElementById('choix').innerHTML = generate_choix();
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
    document.getElementById('precedent').style.display = "block";
    document.getElementById('suivant').style.display = "block";
    document.getElementById('terminer_test').style.display = "none";
    numbre_question--;
    test_fin_quiz();
    cont.innerText = numbre_question + 1 ;
    document.getElementById('progress_bar_etat').style.width = (numbre_question + 1)* 4.545 + "%";
    document.getElementById('question').innerHTML = quizDataFr[numbre_question].question;
    document.getElementById('choix').innerHTML = generate_choix();
}

function terminer_test() {
    alert("the quiz is finish")
}



// const message = document.querySelector('#message');
// const result = document.querySelector('#result');
// message.addEventListener('input', function () {
//     if(this.value<5){
//         result.textContent = this.value;
//         message.style.color = "red";
//     }else{
//         result.textContent = this.value;
//         message.style.color = "black";
//     }
// });          