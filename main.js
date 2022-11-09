//Autônomo: Variable Quantidade
const qt1 = document.querySelector("#qt1");
const qt2 = document.querySelector("#qt2");
const qt3 = document.querySelector("#qt3");
const qt4 = document.querySelector("#qt4");
const qt5 = document.querySelector("#qt5");

//Autônomo: Variable subTotal
const sub1 = document.querySelector("#sub1");
const sub2 = document.querySelector("#sub2");
const sub3 = document.querySelector("#sub3");
const sub4 = document.querySelector("#sub4");
const sub5 = document.querySelector("#sub5");
const sub6 = document.querySelector("#sub6");
const sub7 = document.querySelector("#sub7");
const sub8 = document.querySelector("#sub8");
const sub9 = document.querySelector("#sub9");

//Autônomo: Variable Não
const nao1 = document.querySelector("#nao1");
const nao2 = document.querySelector("#nao2");
const nao3 = document.querySelector("#nao3");
const nao4 = document.querySelector("#nao4");

//Reta Final: Variable Não
const nao1b = document.querySelector("#nao1b");
const nao2b = document.querySelector("#nao2b");
const nao3b = document.querySelector("#nao3b");
const nao4b = document.querySelector("#nao4b");

//Teleoperado: Variable Quantidade
const qt1a = document.querySelector("#qt1a");
const qt2a = document.querySelector("#qt2a");
const qt3a = document.querySelector("#qt3a");
const qt4a = document.querySelector("#qt4a");
const qt5a = document.querySelector("#qt5a");

//Teleoperado: Variable subTotal
const sub1a = document.querySelector("#sub1a");
const sub2a = document.querySelector("#sub2a");
const sub3a = document.querySelector("#sub3a");
const sub4a = document.querySelector("#sub4a");
const sub5a = document.querySelector("#sub5a");

//Reta Final: Variable subTotal
const sub1b = document.querySelector("#sub1b");
const sub2b = document.querySelector("#sub2b");
const sub3b = document.querySelector("#sub3b");
const sub4b = document.querySelector("#sub4b");

//Resultados
const resultado = document.querySelector("#resultado");
const resultadoA = document.querySelector("#resultadoA");
const resultadoB = document.querySelector("#resultadoB");

//Inputs: ChangeColor
const inputBody = document.querySelector("#inputBody");
const inputTextColor = document.querySelector("#inputTextColor");
const inputTitle = document.querySelector("#inputTitle");
const inputTableBody = document.querySelector("#inputTableBody");

const allP = document.querySelectorAll("p");
const allA = document.querySelectorAll("a");
const allSpan = document.querySelectorAll("span");
const allH2 = document.querySelectorAll("h2");
const tableTitle = document.querySelectorAll(".tableTitle");


const titleChangeColor = document.querySelectorAll(".titleChangeColor");
const text = document.querySelectorAll(".text")

const teamName = document.querySelector("#teamName");
const inputTeamName = document.querySelector("#inputTeamName");


inputBody.addEventListener("change", () => {
    document.body.style.backgroundColor = inputBody.value;
});
inputTitle.addEventListener("change", () => {
    for (let i = 0; i < titleChangeColor.length; i++) {
        titleChangeColor[i].style.backgroundColor = inputTitle.value;
    }
})
inputTableBody.addEventListener("change", () => {
    for (let i = 0; i < text.length; i++) {
        text[i].style.backgroundColor = inputTableBody.value;
    }
})
inputTextColor.addEventListener("change", () => {
    for (let i = 0; i < text.length; i++) {
        text[i].style.color = inputTextColor.value;
    }
    for (let i = 0; i < tableTitle.length; i++) {
        tableTitle[i].style.color = inputTextColor.value;
    }
    for (let i = 0; i < allP.length; i++) {
        allP[i].style.color = inputTextColor.value;
    }
    for (let i = 0; i < allA.length; i++) {
        allA[i].style.color = inputTextColor.value;
    }
    for (let i = 0; i < allSpan.length; i++) {
        allSpan[i].style.color = inputTextColor.value;
    }
    for (let i = 0; i < allH2.length; i++) {
        allH2[i].style.color = inputTextColor.value;
    }
    resultado.style.color = inputTextColor.value;
    resultadoA.style.color = inputTextColor.value;
    resultadoB.style.color = inputTextColor.value;

})

inputTeamName.addEventListener("change", () => {
    teamName.textContent = `- ${inputTeamName.value} -`
})
sub6.value = 0;
sub7.value = 0;
sub8.value = 0;
sub9.value = 0;

sub1a.value = 0;
sub2a.value = 0;
sub3a.value = 0;
sub4a.value = 0;
sub5a.value = 0;

sub1b.value = 0;
sub2b.value = 0;
sub3b.value = 0;
sub4b.value = 0;





nao1.addEventListener("click", () => {
    if (nao1.value === "Não") {
        nao1.value = "Sim"
        sub6.value = 10
        sub6.textContent = sub6.value

    } else {
        nao1.value = "Não"
        sub6.value = 0
        sub6.textContent = "Falso"
    }
});

nao2.addEventListener("click", () => {
    if (nao2.value === "Não") {
        nao2.value = "Sim"
        sub7.value = 20
        sub7.textContent = sub7.value
    } else {
        nao2.value = "Não"
        sub7.value = 0
        sub7.textContent = "Falso"
    }
});
nao3.addEventListener("click", () => {
    if (nao3.value === "Não") {
        nao3.value = "Sim"
        sub8.value = 2
        sub8.textContent = sub8.value
    } else {
        nao3.value = "Não"
        sub8.value = 0
        sub8.textContent = "Falso"
    }
});
nao4.addEventListener("click", () => {
    if (nao4.value === "Não") {
        nao4.value = "Sim"
        sub9.value = 2
        sub9.textContent = sub9.value
    } else {
        nao4.value = "Não"
        sub9.value = 0
        sub9.textContent = "Falso"
    }
});


nao1b.addEventListener("click", () => {
    if (nao1b.value === "Não") {
        nao1b.value = "Sim";;
        sub1b.value = 3;
        sub1b.textContent = sub1b.value

    } else {
        nao1b.value = "Não";
        sub1b.value = 0;
        sub1b.textContent = "Falso";
    }
});

nao2b.addEventListener("click", () => {
    if (nao2b.value === "Não") {
        nao2b.value = "Sim";
        sub2b.value = 10;
        sub2b.textContent = sub2b.value;

    } else {
        nao2b.value = "Não";
        sub2b.value = 0;
        sub2b.textContent = "Falso";
    }
});

nao3b.addEventListener("click", () => {
    if (nao3b.value === "Não") {
        nao3b.value = "Sim";
        sub3b.value = 20;
        sub3b.textContent = sub3b.value;

    } else {
        nao3b.value = "Não";
        sub3b.value = 0;
        sub3b.textContent = "Falso";
    }
});

nao4b.addEventListener("click", () => {
    if (nao4b.value === "Não") {
        nao4b.value = "Sim";
        sub4b.value = 2;
        sub4b.textContent = sub4b.value;

    } else {
        nao4b.value = "Não";
        sub4b.value = 0;
        sub4b.textContent = "Falso";
    }
});




function calcular() {
    // Cone(s) no Terminal
    sub1.value = Number(qt1.value);
    sub1.textContent = sub1.value;

    //Cone(s) na Junção Térrea
    sub2.value = Number(qt2.value * 2);
    sub2.textContent = sub2.value;

    //Cone(s) na Junção Baixa
    sub3.value = Number(qt3.value * 3);
    sub3.textContent = sub3.value;

    //Cone(s) na Junção Média
    sub4.value = Number(qt4.value * 4);
    sub4.textContent = sub4.value;

    //Cone(s) na Junção Alta
    sub5.value = Number(qt5.value * 5);
    sub5.textContent = sub5.value;

    resultado.textContent = Number(sub1.value + sub2.value + sub3.value + sub4.value + sub5.value + sub6.value + sub7.value + sub8.value + sub9.value)

}

function calcularA() {

    sub1a.value = Number(qt1a.value);
    sub1a.textContent = sub1a.value;

    sub2a.value = Number(qt2a.value * 2);
    sub2a.textContent = sub2a.value;

    sub3a.value = Number(qt3a.value * 3);
    sub3a.textContent = sub3a.value;

    sub4a.value = Number(qt4a.value * 4);
    sub4a.textContent = sub4a.value;

    sub5a.value = Number(qt5a.value * 5);
    sub5a.textContent = sub5a.value;

    resultadoA.textContent = Number(sub1a.value + sub2a.value + sub3a.value + sub4a.value + sub5a.value);

}

function calcularB() {
    resultadoB.textContent = Number(sub1b.value + sub2b.value + sub3b.value + sub4b.value);

}

