const students =[
    {id:21, name:'omar sunny'},
    {id:23, name:'Rakib '},
    {id:32, name:' sunny'},
    {id:45, name:'YOulad'},
    {id:28, name:'omar '}
];

const names = students.map(s => s.name);
const bigger = students.find(s => s.id > 20)
console.log(bigger);

// const stuName = [];

// for(let i = 0; i < students.length; i++){
//     const result = students[i].name;
//     stuName.push(result)

// }

// console.log(stuName);