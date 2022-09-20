db = db.getSiblingDB('cadastro');
db.createCollection("aluno");
db.createCollection("materia");
db.createCollection("professor");

db.aluno.insert(
{
_id: ObjectId("6328e965e2a1731d6f965eef"),
nome: "Kevin",
sobrenome: "Nogueira",
ra: "23010001"
});

db.aluno.insert(
{
_id : ObjectId("6328e965e2a1731d6f965ef0"),
nome: "Kaique",
sobrenome: "da Mata",
ra: "23010002"
});

db.aluno.insert(
{
_id : ObjectId("6328e965e2a1731d6f965ef1"),
nome: "Theo",
sobrenome: "Cunha",
ra: "23010003"
});

db.aluno.insert(
{
_id : ObjectId("6328e965e2a1731d6f965ef2"),
nome: "João Guilherme",
sobrenome: "da Mota",
ra: "23010004"
});

db.aluno.insert(
{
_id : ObjectId("6328e965e2a1731d6f965ef3"),
nome: "Emanuel",
sobrenome: "da Luz",
ra: "23010005"
});

db.aluno.insert(
{
_id : ObjectId("6328e965e2a1731d6f965ef4"),
nome: "Stella",
sobrenome: "da Rosa",
ra: "23010006"
});

db.aluno.insert(
{
_id : ObjectId("6328e965e2a1731d6f965ef5"),
nome: "Breno",
sobrenome: "Teixeira",
ra: "23010007"
});

db.aluno.insert(
{
_id : ObjectId("6328e965e2a1731d6f965ef6"),
nome: "Gabriela",
sobrenome: "Alves",
ra: "23010008"
});

db.professor.insert(
{
_id : ObjectId("6328e96de2a1731d6f965ef7"),
nome: "Leandro",
sobrenome: "Alonso Xastre",
rp: "090631"
});

db.professor.insert(
{
_id : ObjectId("6328e96de2a1731d6f965ef8"),
nome: "Ricardo",
sobrenome: "Pannain",
rp: "506070"
});

db.materia.insert(
{
_id : ObjectId("6328ea16e2a1731d6f965ef9"),
nome: "Desenvolvimento WEB",
faculdade: "Faculdade de Engenharia de Computação",
curso: "Engenharia de Computação",
professor: [
{ _id: ObjectId("6328e96de2a1731d6f965ef7") }
],
alunos: [
{ _id: ObjectId("6328e965e2a1731d6f965eef") },
{ _id: ObjectId("6328e965e2a1731d6f965ef0") },
{ _id: ObjectId("6328e965e2a1731d6f965ef3") },
{ _id: ObjectId("6328e965e2a1731d6f965ef4") }
]
});

db.materia.insert(
{
_id : ObjectId("6328ea16e2a1731d6f965efa"),
nome: "Organização de Sistemas de Computação",
faculdade: "Faculdade de Engenharia de Computação",
curso: "Engenharia de Computação",
professor: [
{ _id: ObjectId("6328e96de2a1731d6f965ef8") }
],
alunos: [
{ _id: ObjectId("6328e965e2a1731d6f965ef1") },
{ _id: ObjectId("6328e965e2a1731d6f965ef2") },
{ _id: ObjectId("6328e965e2a1731d6f965ef5") },
{ _id: ObjectId("6328e965e2a1731d6f965ef6") }
]
});
