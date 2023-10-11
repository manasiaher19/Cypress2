
let student = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}


//console.log(student.data[4].first_name) //George

let a1 = student.data.find((el, index, arr) => {
    return el.first_name == "George"
})
console.log(a1)
//-------------------------------------------------------------------

// add this property and value to every object => country:india

// let a2 = student.data.map(function (el) {
//     el.country === "India"
//     return el

// })
// console.log(a2)  // all object ele

//forEach()
student.data.forEach((el) => {
    el.country = "India"
})
console.log(student)
//----------------------------------------------------------

//program 1

let names = ['manasi', 'manish', 'sai', 'sarthak']
console.log(names[1])      //manish
let names2 = names
console.log(names)         //['manasi', 'manish', 'sai', 'sarthak']
console.log(names2)        //['manasi', 'manish', 'sai', 'sarthak']
//============================================================

//program 2

let x = 20
let y = x
y = 100
console.log(x) //20
console.log(y) //100

// let x = 20
// let y = x

// console.log(x) //20
// console.log(y) //20
//=================================================================

//program 3

let fruits = ['mango', 'greps', 'banana', 'pinapple']
let basket = fruits
basket[0] = 'apple'
console.log(basket)   //[ 'apple', 'greps', 'banana', 'pinapple' ]
console.log(fruits)   //[ 'apple', 'greps', 'banana', 'pinapple' ]

//------------------------------------------------------------------------
let fruit = ['mango', 'greps', 'banana', 'pinapple']
let basket1 = fruit

console.log(basket1)   //[ 'mango', 'greps', 'banana', 'pinapple' ]
console.log(fruit)   //[ 'mango', 'greps', 'banana', 'pinapple' ]
//==========================================================

//program 4

let info = {
    firstname: "Manasi",
    lastname: "Aher"
}
let student2 = info
student2.city = "Pune"

console.log(info)      //{ firstname: 'Manasi', lastname: 'Aher', city: 'Pune' }
console.log(student2) //{ firstname: 'Manasi', lastname: 'Aher', city: 'Pune' }

//===========================================================

//program 5

let Numbers = [22, 33, 44, 55]
function ChengeNumbers(arr) {
    //let arr = Numbers
    arr[3] = 999
    console.log(arr)  //[ 22, 33, 44, 999 ]
}
console.log(Numbers)  //[ 22, 33, 44, 55 ]
//ChengeNumbers(Numbers)
console.log(Numbers) //[ 22, 33, 44, 999 ]
//--------------------------------------------------

let Numbers1 = [22, 33, 44, 55]
function ChengeNumbers(arr) {
    //let arr = Numbers1
    arr[3] = 999
    console.log(arr)  //[ 22, 33, 44, 999 ]
}
ChengeNumbers(Numbers1)
console.log(Numbers1)  //[ 22, 33, 44, 999 ]
console.log(Numbers1) //[ 22, 33, 44, 999 ]

//=================================================================

//program 6

