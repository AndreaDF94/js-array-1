const teachers = ['Nathan', 'Ed', 'Fabio', 'Phil', 'Carlo', 'Lewis', 'Luca']; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverto l'ordine degli insegnanti
let reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers[reversedTeachers.length] = teachers[i];
}
console.log("Insegnanti invertiti:", reversedTeachers);

// 2. Creo un nuovo array con nomi lunghi almeno 5 caratteri
let longNames = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames[longNames.length] = teachers[i];
  }
}
console.log("Nomi lunghi:", longNames);

// 3. Rimuovo 'Ed' dall'array teachers
let indexToRemove = -1;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Ed') {
    indexToRemove = i;
    break;
  }
}

if (indexToRemove !== -1) {
  for (let i = indexToRemove; i < teachers.length - 1; i++) {
    teachers[i] = teachers[i + 1];
  }
  teachers.length -= 1;
}
console.log("Senza Ed:", teachers);

// 4. Verifica se 'Fabio' è presente
let isFabioPresent = false;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    isFabioPresent = true;
    break;
  }
}
console.log("Fabio è presente?", isFabioPresent);
// 5. Unisce tutti i nomi separati da virgole in una stringa
let teachersString = "";
for (let i = 0; i < teachers.length; i++) {
  teachersString += teachers[i];
  if (i < teachers.length - 1) {
    teachersString += ", ";
  }
}
console.log("Stringa finale degli insegnanti:", teachersString);
