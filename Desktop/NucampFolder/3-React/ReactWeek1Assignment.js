class Student {
    constructor (name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}    
const student1 = new Student();

class Bootcamp {
    constructor (name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        studentToRegister = new Student();
    }
}

/*
const dragon1 = {
    color: "red",
    maxHP: 1000
};
dragon1.color
dragon1.maxHP

const dragon2 = {
    color:"blue",
    maxHP: 1000,
    roar() {
        console.log("The dragon roars ferociously.");
    }
};

-----------------------------
const arr1 = [5, 21, 8, 100];
const arr2 = [];
const arr3 = [];
arr1.forEach(n, 1 => {arr3[i] = n * 2; ))}
const arr4 = arr1.map(n => n * 2);

*/