let perguntas = [
    {
        titulo: 'Gato',
        alternativas: ['Gat', 'Cat', 'Gate', 'Dog'],
        correta: 1
    },
    {
        titulo: 'Fire',
        alternativas: ['Fogo', 'Agua', 'Terra', 'Ar'],
        correta: 0
    },
    {
        titulo: 'Bird',
        alternativas: ['Gato', 'Urubu', 'Pombo', 'Passaro'],
        correta: 3
    },
    {
        titulo: 'Tree',
        alternativas: ['Pedra', 'Flor', 'Folha', 'Árvore'],
        correta: 3
    },
    {
        titulo: 'Sun',
        alternativas: ['Chuva', 'Nuvem', 'Sol', 'Estrela'],
        correta: 2
    },
    {
        titulo: 'Car',
        alternativas: ['Avião', 'Barco', 'Carro', 'Bicicleta'],
        correta: 2
    },
    {
        titulo: 'Banana',
        alternativas: ['Maçã', 'Banana', 'Laranja', 'Abacaxi'],
        correta: 1
    },
    {
        titulo: 'Chair',
        alternativas: ['Sofá', 'Cama', 'Mesa', 'Cadeira'],
        correta: 3
    },
    {
        titulo: 'Book',
        alternativas: ['Jornal', 'Revista', 'Livro', 'Carta'],
        correta: 2
    },
    {
        titulo: 'Computer',
        alternativas: ['Telefone', 'Tablet', 'Computador', 'Calculadora'],
        correta: 2
    }
];
let app = {
    start: function () {
        this.Atualpos = 0;
        this.Totalpontos = 0;

        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);

    },
    mostraquestao: function (q) {
        this.qatual = q;
        //mostrando o título
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
        // mostrando as alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function (element, index) {
            element.textContent = q.alternativas[index];

        })
    },

    Proximaperg: function () {
        this.Atualpos++;
        if (this.Atualpos == perguntas.length) {
            this.Atualpos = 0;
        }
    },

    checaResposta: function (user) {
        this.Atualperg = perguntas[this.Atualpos];
        if (this.qatual.correta == user) {
            console.log("Correta")
            this.Totalpontos++;
            this.mostraresposta(true);
        }
        else {
            console.log("Errada")
            this.mostraresposta(false);
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },

    atualizaPontos: function () {
        let scoreDiv = document.getElementById('pontos');
        scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`;
    },


    mostraresposta: function(correto){
        let resultDiv = document.getElementById('result');
        let result = '';
        //formatar como a mensagens será exibida
        if (correto) {
            result = 'Resposta Correta';
        }
        else {
            //obtendo a questão atual
            let pergunta = perguntas[this.Atualpos];
            //obtenha o indice da resposta correta da questão atual
            let cindice = pergunta.correta;
            //obtendo o texto da resposta correta da questão atual
            let ctexto = pergunta.alternativas[cindice];
            result = `Incorreto! Reposta Correta: ${ctexto}`;
        }
        resultDiv.textContent = result;
    }



}
app.start();
