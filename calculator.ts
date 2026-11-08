function calculateGrade(name: string, marks: number): string {
  if (marks >= 80 && marks <= 100) {
    return "A+";
  } else if (marks >= 70 && marks <= 79) {
    return "A";
  } else if  (marks >= 60 && marks <= 69) {
    return "A-";
  }

   else if  (marks >= 50 && marks <= 59) {
    return "B";
  } else if  (marks >= 40 && marks <= 49) {
    return "c";
  }
 else if  (marks >= 0 && marks <= 39) {
    return "F";
  } else {
  return "Invaild Marks";
}  
}

// Generic Ts Function 
function getFirstElement <T> (items: T[]) : T | undefined {
return items[0];
}

// তোমার Task: TypeScript দিয়ে একটি Student Information System তৈরি করতে হবে।
Requirements
১. প্রথমে একটি Interface তৈরি করো: Student

এতে থাকবে:
- name → string
- age → number
- department → string
- marks → number
২. একটি Function তৈরি করো: getStudentInfo()
- Parameter হিসেবে Student Object নেবে।
- Return type হবে string।
- Student-এর সব Information return করবে।

interface Student {
    name: string,
    age : number,
    department: string,
    marks: number 
}
function getStudentInfo(Student:Student) : string {
    return `My Name is ${Student.name},Age ${Student.number} My Department ${Student.department},Marks ${Student.marks}`
}

const student1:Student = {
 name : "Arif",
 age : 25,
 department : "CSE"
 Marks : 80
}

console.log(getStudentInfo(student1));