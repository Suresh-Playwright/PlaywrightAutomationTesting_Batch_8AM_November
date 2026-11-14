let student ={

name: "Suresh",
age : 27 ,
course : "Playwright"

}

for(let key in student)
{
  console.log(key)
  console.log(student[key as keyof typeof student])

}