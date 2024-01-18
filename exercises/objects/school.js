function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

function createSchool() {
  let students = [];
  let validYears = ['1st', '2nd', '3rd', '4th', '5th'];

  return {
    addStudent(student) {
      if (validYears.includes(student.year)) {
        students.push(student);
        return student;
      } else {
        console.log('invalid year');
      }
    },
    enrollStudent(student, course) {
      student.courses.push(course);
    },
    addGrade(student, course, grade) {
      student.courses.forEach(enrolledCourse => {
        if (enrolledCourse.name === course) {
          enrolledCourse.grade = grade;
        }
      })
    },
  }
}

let school = createSchool();
