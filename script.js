const teachers = ['Nathan', 'Ed', 'Fabio', 'Phil', 'Carlo', 'Lewis', 'Luca']; 

// 1. Imposto la variabile con il quarto insegnante dell'array (indice 3)
let fourthTeacher = null;
for (let i = 0; i < teachers.length; i++) {
  if (i === 3) {
    fourthTeacher = teachers[i];
  }
}
console.log("Fourth Teacher:", fourthTeacher); // Output atteso: "Phil"

// 2. Sostituisco il quinto insegnante (indice 4) con 'Patrick'
for (let i = 0; i < teachers.length; i++) {
  if (i === 4) {
    teachers[i] = 'Patrick';
  }
}
console.log("Dopo sostituzione:", teachers);

// 3. Rimuovo l'ultimo insegnante e lo salvo nella variabile `lastTeacher`
let lastTeacher = null;
if (teachers.length > 0) {
  lastTeacher = teachers[teachers.length - 1];
  let newTeachers = [];
  for (let i = 0; i < teachers.length - 1; i++) {
    newTeachers[i] = teachers[i];
  }
  teachers.length = 0;
  for (let i = 0; i < newTeachers.length; i++) {
    teachers.push(newTeachers[i]);
  }
}
console.log("Ultimo insegnante rimosso:", lastTeacher);
console.log("Array aggiornato:", teachers);

// 4. Rimuovo il primo insegnante e lo salvo nella variabile `firstTeacher`
let firstTeacher = null;
if (teachers.length > 0) {
  firstTeacher = teachers[0];
  for (let i = 1; i < teachers.length; i++) {
    teachers[i - 1] = teachers[i];
  }
  teachers.length -= 1;
}
console.log("Primo insegnante rimosso:", firstTeacher);
console.log("Array aggiornato:", teachers);

// 5. Aggiungo 'Vanessa' alla fine dell'array
teachers[teachers.length] = 'Vanessa';
console.log("Aggiunta Vanessa:", teachers);

// 6. Aggiungo 'Sarah' all'inizio dell'array
for (let i = teachers.length; i > 0; i--) {
  teachers[i] = teachers[i - 1];
}
teachers[0] = 'Sarah';
console.log("Aggiunta Sarah all'inizio:", teachers);

// 7. Trovo l'indice dell'insegnante 'Lewis'
let lewisIndex = null;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Lewis') {
    lewisIndex = i;
  }
}
console.log("Indice di Lewis:", lewisIndex);

// 8. Verifica se l'array è vuoto
let isTeachersEmpty = true;
for (let i = 0; i < teachers.length; i++) {
  isTeachersEmpty = false;
  break;
}
console.log("L'array è vuoto?", isTeachersEmpty);
