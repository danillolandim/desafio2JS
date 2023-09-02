/*Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let students = [
  {
    nome: 'Danillo',
    notaP1: 10,
    notaP2: 5
  },
  {
    nome: 'Kelly',
    notaP1: 8,
    notaP2: 4
  },
  {
    nome: 'John',
    notaP1: 1,
    notaP2: 4
  }
]

function calcMedia(nota1, nota2) {
  return (nota1 + nota2) / 2
}

function printStudentMedia(student) {
  let media = calcMedia(student.notaP1, student.notaP2)
  if (media >= 7) {
    return `
    Estudante ${student.nome} possui a media de ${media}
    Parabéns você passou!  
    `
  } else {
    return `
  Estudante ${student.nome} possui a media de ${media}
  Continue estudando, quem sabe na próxima!
`
  }
}

for (let student of students) {
  let mediaMessage = printStudentMedia(student)
  alert(mediaMessage)
}
