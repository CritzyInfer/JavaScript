function exe0() {
    let conta = 1
    let soma = 0
    while (conta <= 6) {
        notas = Number(prompt(`Irforme as Notas ${conta}`))
        soma = soma + notas
        conta++
    }
    let media = soma / 6
    alert(`A média das notas é ${media}`)
}

function pesquisaSatisfacao() {
    let conta = 1
    let Pnsatis = 0
    let Psatis = 0
    let somaSatisfacao = 0
    while (conta <= 10) {
        NotaSat = Number(prompt(`${conta}) Informe sua Satisfação de 0 a 10 `))
        if (NotaSat >= 0 && NotaSat <= 5) {
            Pnsatis++
        }

        else if (NotaSat >= 8 && NotaSat < 10) {
            Psatis++
        }


        else if (NotaSat < 0 || NotaSat > 10) {
            alert("Nota Invalida")
            continue
        }
        conta++
    }


    somaSatisfacao = somaSatisfacao + NotaSat


    alert(`O numero de pessoas satisfeitas é: ${Psatis}`)
    alert(`O numero de pessoas não satisfeitas é: ${Pnsatis}`)

    let media = somaSatisfacao / 10
    alert(`A media é ${media}`)

}

function exer03() {
    let a, b, c, d, aux
    let contas = 0

    while (grupo < 5) {
        let conta = 1
        a = Number(prompt(`digite o primeiro valor:`))
        b = Number(prompt(`digite o segundo valor:`))
        c = Number(prompt(`digite o terceiro valor:`))
        d = Number(prompt(`digite o quarto valor:`))

        while (conta <= 3) {
            if (a > b) {
                aux = a; a = b; b = aux
            }

            if (b > c) {
                aux = b; b = c; c = aux
            }
            if (c > d) {
                aux = c; c = d; d = aux
            }
            conta++
        }

        alert(`Ordem crescente: ${a}, ${b}, ${c}, ${d}`)
        alert(`Ordem decrescente: ${d}, ${c}, ${b}, ${a}`)
    }
}

function exer04() {
    let conta = 1
    let idade = 0
    let FaixaEta1 = 0
    let FaixaEta2 = 0
    let FaixaEta3 = 0
    let FaixaEta4 = 0
    let FaixaEta5 = 0
    let porcent = 0
    let porcent2 = 0
    let div = 0

    while (conta <= 8) {
        idade = Number(prompt(`${conta})Informe sua idade`))
        if (idade >= 0 && idade <= 15) {
            FaixaEta1++
        }
        else if (idade >= 16 && idade <= 30) {
            FaixaEta2++
        }
        else if (idade >= 31 && idade <= 45) {
            FaixaEta3++
        }
        else if (idade >= 46 && idade <= 60) {
            FaixaEta4++
        }
        else if (idade > 60) {
            FaixaEta5++
        }
        conta++
    }
    alert(`A quatidade de cada faixa etaria é: 1°(${FaixaEta1}), 2°(${FaixaEta2}), 3°(${FaixaEta3}), 4°(${FaixaEta4}), 5°(${FaixaEta5})`)

    let somas = FaixaEta1 + FaixaEta2 + FaixaEta3 + FaixaEta4 + FaixaEta5

    div = (FaixaEta1 / somas)
    porcent = div * 100
    alert(`porcentagem da Primeira faixa etaria em relação com as outras: ${porcent}`)

    alert
}

function exer05() {
    let conta = 0;
    let NumeroDigit = Number(prompt(`Informe o número desejado:`));
    let Mult = `Tabuada do ${NumeroDigit}:\n`;

    while (conta <= 10) {
        Mult += `${NumeroDigit} * ${conta} = ${NumeroDigit * conta}\n`;
        conta++;
    }

    alert(Mult);
}

function exer06() {
    for (let i = 1; i <= 10; i++) {
        let resultado = `Tabuada do ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i * j}\n`;
        }
        alert(resultado);
    }
}


function exer08() {
    let altura, peso, idade, qtdeIdade50 = 0, qtdeIdade10e20 = 0, qtdePeso40Kg = 0, somaAltura = 0
    for (let conta = 1; conta <= 5; conta++) {
        do {
            idade = Number(prompt(`${conta}-Informe a idade: `))
        }
        while (idade < 0)

        do {
            peso = Number(prompt(`${conta}-Informe o peso: `))
        }
        while (peso < 0)

        do {
            altura = Number(prompt(`${conta}-Informe a altura: `))
        }
        while (altura <= 0)

        if (idade > 50) {
            qtdeIdade50++
        }


        if (idade > 10 && idade < 20) {
            somaAltura += altura;
            qtdeIdade10e20++;

        }
        if (peso < 40) {
            qtdePeso40Kg++

        }
    }
    alert(`Item 1 ${qtdeIdade50} \n`)

    if (qtdeIdade10e20 > 0) {
        alert(`Item 2 ${(somaAltura / qtdeIdade10e20).toFixed(2)} \n`)
    } else {
        alert(`item 2: nenhuma pessoa entre 10 e 20 anos para calcular a media de altura.`)
    }
    alert(`item 3 ${(qtdePeso40Kg / 5) * 100}\n`)
}

function exer09() {
    let Altura, olhos, cabelo, Peso, Idade;
    let olhosazuis = 0;
    let qtdeIdSup50Inf60kg = 0;
    let somaIdadeAlt150 = 0;
    let contAlt150 = 0;
    let porcentBeyes = 0;
    let qtderuivosSemBeyes = 0;
    let mediaidadeAlt150 = 0;
    let TotalPessoas = 6;

    for (let conta = 1; conta <= 6; conta++) {
        do {
            Idade = Number(prompt(`${conta}-Informe a idade: `))
        }
        while (Idade < 0)
        do {
            Peso = Number(prompt(`${conta}-Informe o peso: `))
        }
        while (Peso < 0)

        do {
            Altura = Number(prompt(`${conta}-Informe a altura: `))
        }
        while (Altura <= 0)

        do {
            cabelo = prompt(`${conta}-Informe a cor do seu cabelo (P-preto; C-castanho; L-louro; R-ruivo)`).toUpperCase()
        }
        while (cabelo === ``)

        do {
            olhos = prompt(`${conta}-Informe a cor do seu olho (A-azul;P-preto;V-verde; C-castanho)`).toUpperCase()
        }
        while (olhos === ``)


        if (Idade > 50 && Peso < 60) {
            qtdeIdSup50Inf60kg++
        }

        if (Altura < 150) {
            somaIdadeAlt150 += Idade
            contAlt150++
        }

        if (olhos === `A`) {
            olhosazuis++

        }


        if (cabelo === `R` && olhos !== `A`) {
            qtderuivosSemBeyes++
        }
    }
    if (contAlt150 > 0) {
        mediaidadeAlt150 = somaIdadeAlt150 / contAlt150
    }

    porcentBeyes = olhosazuis / TotalPessoas


    alert(`1Item-${qtdeIdSup50Inf60kg} \n` +
        `2Item-${mediaidadeAlt150} \n` +
        `3Item-${porcentBeyes} \n` +
        `4Item-${qtderuivosSemBeyes}`)

}