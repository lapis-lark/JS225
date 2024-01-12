// function makeList() {
//   let tasks = [];
// 
//   return function (task) {
//     if (tasks.includes(task)) {
//       tasks.splice(tasks.indexOf(task), 1);
//     } else if (task === undefined) {
//       tasks.forEach(task => console.log(task));
//     } else {
//       tasks.push(task);
//     }
//   }
// }

// let list = makeList();
// list('boil potatoes');
// list('stir the gruel');
// list('boil potatoes');
// list();

function makeList() {
  let tasks = [];
  return {
    add(task) {
      tasks.push(task);
    },
    remove(task) {
      tasks.splice(tasks.indexOf(task), 1);
    },
    list() {
      tasks.forEach(task => console.log(task));
    },
  }
}

let list = makeList();
list.add('scrub the deck');
list.add('eat kelp');
list.list();
list.remove('eat kelp');
list.list();