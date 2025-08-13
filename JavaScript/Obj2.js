function Ex02() {
    let Funcionarios = [];
    let mediaSal = 0
    let FuncAcima = 0
    let MaiorSal = 0
    let qtdeGere = 0

    for (let i = 0; i < 3; i++) {
        let nome = prompt(`Informe o nome do Funcionario ${i + 1}:`);
        let Cargo = prompt(`Informe o cargo do Funcionario ${i + 1}:`);
        let Salario = Number(prompt(`Digite o salario do funcionário ${i + 1}:`));
        let TempoServ = Number(prompt(`Digite o tempo de serviço (em anos) do Funcionário ${i + 1}:`));

        let Dados = {
            nome: nome,
            Cargo: Cargo,
            Salario: Salario,
            TempoServ: TempoServ
        };
        Funcionarios.push(Dados);
    }
    for (let i = 0; i < Jogos.length; i++) {
     if(Funcionarios[i].Cargo = `Gerente`){
        qtdeGere++
     }   

    }
    for (let i = 0; i < Jogos.length; i++) {
        if (Funcionarios[i].Salario > 5000 && Funcionarios[i].TempoServ > 5) {
            FuncAcima += Funcionarios[i].nome
        }
    }
    for (let i = 0; i < Funcionarios.length; i++) {
        mediaSal = Funcionarios[1].Salario + Funcionarios[i + 2].Salario
    }
    for (let i = 0; i < Funcionarios.length; i++) {
        if(Funcionarios[1].Salario > Funcionarios[i + 2].Salario){
            MaiorSal = Funcionarios[i].nome
        }
    }

    alert(`A quantidade de gerentes é: ${qtdeGere}`)
    alert(`A media salarial da empresa é: ${(mediaSal / 3).toFixed(2)}`)
    alert(`o maior salario é: ${MaiorSal}`)
    alert(`Os funcionarios com salario acima de R$5000 e mais de 5 anos de serviço são: ${FuncAcima}`)
    }
