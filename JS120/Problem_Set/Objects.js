// let item = {
//   name: "Foo",
//   description: "Fusce consequat dui est, semper.",
//   price: 50,
//   quantity: 100,
//   discount: function (percent) {
//     let discount = (this.price * percent) / 100;
//     this.price -= discount;
//     return this.price;
//   },
// };
// console.log(item.discount(25));

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    listCourses() {
      return this.courses;
    },
    info() {
      return `${this.name} is a ${this.year} year student`;
    },
    addCourse(course) {
      this.courses.push(course);
    },
    addNote(code, note) {
      this.courses.forEach((course) => {
        if (course["code"] === code) {
          if (course["note"]) {
            course["note"] += `; ${note}`;
          } else course["note"] = note;
        }
      });
    },
    updateNote(code, note) {
      this.courses.forEach((course) => {
        if (course["code"] === code) {
          course["note"] = note;
        }
      });
    },
    viewNotes() {
      this.courses.forEach((course) => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },
  };
}

let school = {
  students: [],
  addStudent: function (name, year) {
    if (["1st", "2nd", "3rd", "4th", "5th"].indexOf(year) >= 0) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log("Invalid Year");
    }
  },

  enrollStudent: function (student, courseName, courseCode) {
    student.addCourse({ name: courseName, code: courseCode });
  },

  addGrade: function (student, courseName, grade) {
    let course = student.listCourses().filter((course) => {
      return course.name === courseName;
    })[0];

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard: function (student) {
    student.listCourses().forEach((course) => {
      if (course.grade) {
        console.log(`${course.name} : ${String(course.grade)}`);
      } else {
        console.log(`${course.name} : In progress`);
      }
    });
  },

  courseReport: function (courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter((course) => {
        return course.name === courseName;
      })[0];
    }

    let courseStudents = this.students
      .map((student) => {
        let course = getCourse(student, courseName) || { grade: undefined };
        return { name: student.name, grade: course.grade };
      })
      .filter((student) => student.grade);

    if (courseStudents.length > 0) {
      console.log(`= ${courseName} Grades=`);

      let average =
        courseStudents.reduce((total, student) => {
          console.log(`${student.name} : ${String(student.grade)}`);
          return total + student.grade;
        }, 0) / courseStudents.length;

      console.log("---");
      console.log(`Course Average: ${String(average)}`);
    }
  },
};
