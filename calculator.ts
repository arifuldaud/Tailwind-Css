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


function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier * value) {
    return value ;
  } else (multiplier !== undefined) {
    return value * 2;
  }
}



function formatCoordinate(
 [latitude, longitude, locationName] : readonly [number, number, string]) : string {
    return `"Location: ${locationName} $({latitude} ,${longitude})"`
}
function concatenateArrays<T>(...arrays: T[][]): T[] [] {
    returns arrays,
}

function processInput(value:string | number | boolean) {
  if(typeof value === "string") {
  return value.trim().toLowerCase() ;
  } else if
   (typeof value === "number") {
      return value * 10 ;
    }
    
    else {
    
        return value? "Active" : "Inactive";
      }
    }
  
console.log(getPopularCourses(courses, 400));


// Generic Function :


  return pluckValues 
}


function pluckValues <T, K extends keyof T> (items: T[],Key:K) : T {
  return  T[K] ;
}

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number
  ) {}

  getDetails(): string {
    return `Employee: ${this.name} Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(
    name: string,
    baseSalary: number,
    department: string
  ) {
   super(name,baseSalary)
   this.department =department;
  }

  getRoleInfo(): string {
    return `Manager of department: ${this.department}`
  }
}


async function validateAgeAsync(age:number):Promise<string> {
  if (age >= 18) {
    return "Access garnded"
  } else {
    (age <18) {
      return "new Error("Access Denied: Must be 18 or older")"
    }
  }
  
}

function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}

async function main() {
  try {
    console.log(await validateAgeAsync(20));
    console.log(await validateAgeAsync(16));
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

main();