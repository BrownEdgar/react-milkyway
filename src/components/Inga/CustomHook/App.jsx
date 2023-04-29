import React from 'react'
import CustomHook from './CustomHook'

export default function App() {
    const [arr, {alldone}] = CustomHook([ 
        { 
           userId: 1, 
           id: 1, 
           title: "delectus aut autem", 
           completed: false 
         }, 
         { 
           userId: 1, 
           id: 2, 
           title: "quis ut nam facilis et officia qui", 
           completed: false 
         }])

  return (
    <div>
        <button onClick={alldone}>alldone</button>
    </div>
  )
}

// Ստեղծել CustomHook, որը կստանա որպես պարամետր զանգված մեջը ՛todo՛ օբյեկտներ։ 
// CustomHook([ 
//  { 
//     "userId": 1, 
//     "id": 1, 
//     "title": "delectus aut autem", 
//     "completed": false 
//   }, 
//   { 
//     "userId": 1, 
//     "id": 2, 
//     "title": "quis ut nam facilis et officia qui", 
//     "completed": false 
//   }, 
//  {...}, 
//  {...}, 
//  {...}, 
//  {...} 
// ]) 
 
 
// մեջը արդեն ունենալ հետևյալ ֆունկցիաները 
// toggletodo - որը ՝todo՝ զանգվածուm 
// alldone - որը ՝todo՝ զանգվածում բոլորի completed հատկությունը կսարգի true  
// removeById - որը կստանա id և կջնջի համապատասխան todo-ն 
// addTodo - որը ՝todo՝ զանգվածում կավելացնի նոր ՝todo՝ 
// tojson - որը ՝todo՝ զանգվաը կսարգի json և կվերադարձնի մեզ 
// ինչպես նաև այդ ՝todo՝-ը նկարել էջում