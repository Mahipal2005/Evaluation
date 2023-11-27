function StudentDetails(name, rollNo, classInfo, section, marksOfSubjects) {
    this.name = name;
    this.rollNo = rollNo;
    this.classInfo = classInfo;
    this.section = section;
    this.marksOfSubjects = marksOfSubjects;
  
    this.printTop3Subjects = function () {
      obj = this.marks
        array = []
        for (let key in obj) {
            array.push(obj[key])
        }
        array = array.sort(function (a, b) { return b - a });
        arr = []
        for (let i = 0; i < 3; i++) {
            for (let key in obj) {
                if (obj[key] == array[i]) {
                    arr.push(key)
                }
            }
        }
        console.log(arr)

    };
  
    this.printReportCard = function () {
      console.log('+--------------------+');
      console.log('|     REPORT CARD    |');
      console.log('+--------------------+');
      console.log(`| Name     - ${this.name} |`);
      console.log(`| Roll no. - ${this.rollNo}      |`);
      console.log(`| Class    - ${this.classInfo}       |`);
      console.log(`| Section  - ${this.section}       |`);
      for (const subject in this.marksOfSubjects) {
        console.log(`| ${subject} - ${this.marksOfSubjects[subject]} |`);
      }
      const totalMarks = Object.values(this.marksOfSubjects).reduce((acc, curr) => acc + curr, 0);
      const percentage = (totalMarks / (Object.keys(this.marksOfSubjects).length * 100)) * 100;
      console.log(`| Percentage - ${percentage.toFixed(1)} %  |`);
      console.log('+--------------------+');
    };
  }
  
  let marksOfSubjects = {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
  };
  
  let student1 = new StudentDetails('Huzaifa', 16, 'X', 'A', marksOfSubjects);
  student1.printTop3Subjects(); 
  student1.printReportCard();  
  
