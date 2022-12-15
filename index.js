class Alunos{
    constructor(nome, faltas, notas){
        this.nome = nome;
        this.qtdfaltas = faltas;
        this.notas = notas;
    }

    calcularMedia(){
        let soma = 0;
        this.notas.forEach(nota => {
            soma +=nota;
            
        });
        return soma / this.notas.length;
    }

    faltas(){
        this.qtdfaltas += 1;
    }
}   

const gabriel = new Alunos('Gabriel', 0, [9,8,10]);
const helza = new Alunos('Helza', 1, [9,7,9]);
const sheila = new Alunos('Sheila', 2, [7,8,9]);

console.log(gabriel, helza, sheila);
console.log(gabriel.calcularMedia());


const curso ={
    nome: 'Ingles',
    notaAprovacao: 7,
    maxFaltas: 5,
    listaEstudantes:[],
    addAluno(aluno){
        this.listaEstudantes.push(aluno);
    },
    statusAluno(aluno){
        const media = aluno.calcularMedia();
        if(media >= this.notaAprovacao && aluno.qtdfaltas < this.maxFaltas){
            return true;
        }else if (aluno.qtdfaltas === this.maxFaltas && media >= this.notaAprovacao * 1.1){
            return true;
        }
        return false
    },
    listaStatus(){
        return this.listaEstudantes.map((aluno)=> this.statusAluno(aluno));
    }

}
console.log(curso.statusAluno(gabriel));
curso.addAluno(gabriel);
curso.addAluno(helza);
curso.addAluno(sheila);
console.log(curso.listaEstudantes);




