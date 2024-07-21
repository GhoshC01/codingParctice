// // // let student = [

// // //     {
// // //         name: "rajib"
// // //     },
// // //     {
// // //         name: "anish"
// // //     },

// // //     {
// // //         name: "rajib"
// // //     },
// // //     {
// // //         name: "rajib"
// // //     },
// // //     {
// // //         name: "soumen"
// // //     },
// // //     {
// // //         name: "kalu"
// // //     },
// // //     {
// // //         name: "sanglap"
// // //     },
// // // ]

// // // // student.push({name:"tutu"})

// // // let newstu =student.filter(rem=>rem.name =="rajib")


// // // console.log(newstu);




// // // // // callback function

// // // const fn = (a, b, func) => {
// // //     return func(a, b)
// // // }

// // // const add =fn(9, 5, function (n1, n2) {
// // //     return n1 + n2
// // // })
// // // console.log(add);



// // // const a =[1,2,3,4,5,6,7,8,-9,-1,-9,-8,-9]

// // // function f(num){
// // // return num<0
// // // }
// // // const store = a.find(f)   //-9
// // // const store2 = a.filter(f)             //[-9,-1]
// // // console.log(store2);

// // // student.forEach((sinnum) => {
// // //     console.log(sinnum);
// // // })




// // // class person {
// // //     constructor(salary  , month){
// // //         this.salary=salary,
// // //         this.month=month
// // //     }

// // //     greet(){
// // //         console.log(`${this.month} month my salary is ${this.salary}`)
// // //     }
// // // }


// // // const person1 = new person("10,000", "November").greet()
// // // const person2 = new person("12,000", "November").greet()





// // // const arr = [`1, 1, 1, 2, 3, 4, 5, 6, 1, 4, 2, 3, 3, 2, 3, 3, 2`]
// // // const arr2 =["cat","mouse", "rat","cat","mouse","cat","mouse", "rat"]
// // // function count(params) {
// // //     const setData ={}
// // // params.map((data)=>{
// // // setData[data] = (setData[data] || 0 )+1
// // // })
// // // return setData
// // // }

// // // console.log(count(arr)); 




// // // function student(a, b, c) {
// // //     return c(a, b)
// // // }

// // // const back = student(17, 6, function (f, g) {
// // //     return f - g
// // // })


// // // console.log(back);




// const a = [1, 2, 3, 4, 5, 6, 7, 8, -9,-9,-9,-9, -1, -9, -8, -9]

// let data = a.filter((d) => {
//     return d < 0
// })
// const result = [...data]

// result.map((value)=>{
// result[value]=(result[value] || 0)+1
// })


// console.log(data) 

// console.log(result);






// // // class student {

// // //     constructor(subject, marks, fullMarks) {
// // //         this.subject = subject,
// // //             this.marks = marks,
// // //             this.fullMarks = fullMarks
// // //     }

// // //     display() {
// // //         console.log(`${this.subject}  my marks is ${this.marks} out of ${this.fullMarks} `);
// // //     }
// // // }

// // // const newStudent1 = new student("Math", "95", "100").display()
// // // const newStudent2 = new student("Math", "90", "100").display()





// // // const arr = ["cow ", "buffalo", "Lion ","cow ", "buffalo", "Lion ", "buffalo", "Lion "]

// // // function result(params){
// // //     const data={}
// // // params.map((value)=>{
// // // data[value]=(data[value] || 0)+1
// // // })
// // // return data
// // // }

// // // console.log(result(arr));



// // // assendig order

const arr =[
    {
        name:"rajib",
        age:23
    },
    {
        name:"vicky",
        age:22
    },
    {
        name:"abhi",
        age:24
    },
    {
        name:"souvik",
        age:28
    },
    {
        name:"subho",
        age:21
    },
]

// const frnd =arr.sort((a,b)=>a.age -b.age)
// // const frnd1 =arr.sort((a,b)=>b.age-a.age)

// console.log(frnd);
// // // console.log(frnd1);


// arr.sort((a, b) => a.name > b.name ? 1 : -1);

// console.log(arr);



// // arr.sort((a, b) => {
// //     if (a.name.toLowerCase() < b.name.toLowerCase()) {
// //         return -1;
// //     }
// //     if (a.name.toLowerCase() > b.name.toLowerCase()) {
// //         return 1;
// //     }
// //     return 0;
// // });

// // console.log(arr);



// // let obj = {a: 1, b: 2, c: 3};

// // for (let key in obj) {
// //     console.log(key + ": " + obj[key]);    // a: 1  b: 2  c: 3
// // }


// // let arr = [10, 20, 30];

// // for (let value of arr) {
// //     console.log(value);   //10 20 30
// // }



// // let arr = [1, 2, 3, 4, 5];

// // arr.forEach(function(item) {
// //     console.log(item*2); 
// // });

//*******************INHERITACE *******************************

// // প্যারেন্ট ক্লাস (Parent Class)
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`হ্যালো, আমার নাম ${this.name} এবং আমি ${this.age} বছর বয়সী।`);
//     }
// }

// // চাইল্ড ক্লাস (Child Class) যা প্যারেন্ট ক্লাস থেকে ইনহেরিট করছে
// class Student extends Person {
//     constructor(name, age, grade) {
//         super(name, age); // প্যারেন্ট ক্লাসের কন্সট্রাক্টর কল করা হচ্ছে
//         this.grade = grade;
//     }

//     study() {
//         console.log(`${this.name} পড়াশোনা করছে ${this.grade} শ্রেণীতে।`);
//     }
// }

// // Student ক্লাসের একটি অবজেক্ট তৈরি করা
// let student1 = new Student('রজিব', ২০, '১০ম');
// student1.greet(); // আউটপুট: হ্যালো, আমার নাম রজিব এবং আমি ২০ বছর বয়সী।
// student1.study(); // আউটপুট: রজিব পড়াশোনা করছে ১০ম শ্রেণীতে।


// এই উদাহরণের মাধ্যমে, আপনি দেখতে পাচ্ছেন কিভাবে একটি চাইল্ড ক্লাস প্যারেন্ট ক্লাসের
//  প্রোপার্টি এবং মেথড ইনহেরিট করতে পারে এবং অতিরিক্ত প্রোপার্টি ও মেথড যোগ করতে পারে।


// ****************************************************************************************//


// sync and async and promis.then and promise.all

// const first = (customer, callback) => {
//    console.log(`1 ${customer}`);
//    callback(customer)
// }


// const second = (params, callback) => {
//    console.log(`2${params}`);

//    setTimeout(() => {
//       console.log("3");
//       callback(params)
//    }, 2000)
// };

// const fourth = (data) => {

//    console.log(`4 ${data}`);
// }


// first("rajib", (customer) => {
//    second(customer, (params) => {
//       fourth(params)
//    })
// })



// const hasMetting =false
// const meeting = new Promise ((resolve,reject)=>{
// if(!hasMetting){
// let deatilsNextMetting={
//    name :"tech1",
//    loc:"skype"
// }
// resolve(deatilsNextMetting)
// }
// else{
//    reject(new Error("Metting already schuled"))
// }
// })

// const mettingTime =(deatilsNextMetting)=>{
// return new Promise((resolve)=>{
// const time =`Metting start ${deatilsNextMetting.name} at 10 am in ${deatilsNextMetting.loc}`
// resolve(time)
// })
// }

// meeting
// .then(mettingTime)
// .then((params)=>{
// console.log(params)
// })
// .catch((err)=>{
// console.log(err.message)
// })




// const promis1 = Promise.resolve("1 completed")

// const promis2 = new Promise((resolve) => {
//    setTimeout(() => {
//       resolve("2nd completed")
//    }, 2000)
// })

// // promis1.then((res)=>console.log(res))
// // promis2.then((res)=>console.log(res))


// // Promise.all([promis1, promis2])
// Promise.race([promis1, promis2])

//    .then((res) => {
//       console.log(res)
//    })
