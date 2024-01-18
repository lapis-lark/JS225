// wow, would have been much cleaner to have notes as a prooperty on the course *facepalm*
// this is why you should think about problems more before coding hehe

function createStudent (name, year) {

  return {
    name,
    year,
    courses: [],
    notes: {},
    info() {
      return `${this.name} is a student in year ${this.year}`;
    },
    listCourses() {
      return this.courses;
    },
    addCourse(courseObj) {
      this.courses.push(courseObj);
    },
    addNote(courseCode, note) {
      if (this.notes.hasOwnProperty(courseCode)) {
        this.notes[courseCode] += `; ${note}`;
      } else {
        this.notes[courseCode] = note;
      }
    },
    viewNotes() {
      Object.entries(this.notes).forEach(([courseCode, note]) => {
        let tempCourse;
        this.courses.forEach(course => {
          if (course.code === Number(courseCode)) tempCourse = course.name;
        });

        console.log(`${tempCourse}: ${note}`);
      });
    },
    updateNote(courseCode, note) {
      this.notes[courseCode] = note;
    }
  }
}

module.exports = createStudent;
console.log(module.exports); // why are u empty :( 


let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"

