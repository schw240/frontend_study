import getType from './getType';
import random from './getRandom';

// console.log(typeof "Hello world!")
// console.log(typeof 123)
// console.log(typeof true)
// console.log(typeof undefined)
// // null 도 object 타입
// console.log(typeof null)
// console.log(typeof {})
// console.log(typeof [])


// console.log(getType(123))
// console.log(getType(false))
// console.log(getType(null))
// console.log(getType({}))
// console.log(getType([]))

// const a = 1
// const b = 3

// 비교연산
// console.log(a === b)

// function isEqual(x, y) {
//     return x === y
// }

// console.log(isEqual(1, 1))
// console.log(isEqual(2, '2'))

// console.log(a < b)

// const a = 1 === 123
// const b = 'AB' === 'ABC'
// const c = false

// console.log(a)
// console.log(b)
// console.log(c)

// console.log('&&: ', a && c)
// console.log('||: ', a || b || c)
// console.log('!: ', !a)

// 삼항 연산자(Ternary operator)

// const a = 1 < 2

// if (a) {
//     console.log("참")
// } else {
//     console.log("거짓")
// }

// console.log(a ? '참' : '거짓')

// const a = random()

// if (a === 0) {
//     console.log('a is 0')
// } else {
//     console.log('rest...')
// }

// switch (a) {
//     case 0:
//         console.log(a)
//         break
//     case 2:
//         console.log(a)
//         break
//     case 4:
//         console.log(a)
//         break
//     default:
//         console.log('rest...')
// }

// 반복문
// for(시작조건; 종료조건; 변화조건) {}

// const ulEl = document.querySelector('ul')

// for(let i = 0; i < 10; i++) {
//     const li = document.createElement('li')
//     li.textContent = `list-${i + 1}`
//     if ((i + 1) % 2 === 0) {
//         // 이벤트 연결 함수 addEventListener(이벤트, 함수)
//         li.addEventListener('click', function() {
//             console.log(li.textContent)
//         })
//     }

//     ulEl.appendChild(li)
// } 

// 변수 유효범위(Variable Scope)
// var, let, const

// function scope() {
//     console.log(a)
//     if (true) {
//         let a = 123
//     }
// }
//  var는 함수범위의 유효범위
//  let, const는 블록레벨의 유효범위

// var를 사용하게 되면 나중에 메모리 누수같은 문제가 생길 수 있음
// let, const를 사용하여 블록 범위로만 사용하게 하는 것이 좋음
// scope()

// 화살표 함수
// () => {} vs function () {}

// const double = function (x, y) {
//     return x * 2
// }

// console.log('double: ', double(7))

// 파라미터가 하나라면 () 괄호 생략 가능
// 2개라면 ()사용하고 ,로 구분
// 만약 객체를 만환하고 싶다면 ({}) 소괄호로 감싼 다음 중괄호 안에 객체 작성 후 반환
// const doubleArrow = x => x * 2
// console.log('doubleArrow: ', doubleArrow(7))

// 즉시실행함수
// IIFE Immediately-Invoked Function Expression

// const a = 7
// function double() {
//     console.log(a * 2)
// }
// double();

// 즉시 실행 함수 작성 2가지 방법
// ()() 또는 (())
// (function () {
//     console.log(a * 2);
// })();

// (function () {
//     consolelog(a * 2)
// }());

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// const a = 7

// double()

// 아래 방법은 에러, 함수 표현은 안됌
// const double = function() {
//     console.log(a * 2)
// }

// 함수 선언만 가능
// function double() {
//     console.log(a * 2)
// }

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수들 종료
// clearInterval(): 설정된 Interval 함수를 종료

// setTimeout(function () {
// }, 3000)

// 화살표 함수 버전
// setTimeout(() => {
//     console.log("Hello~")
// }, 3000)

// const timer = setTimeout(() => {
//     console.log("Hello!")
// }, 3000)

// const timer = setInterval(() => {
//     console.log("Hello!")
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//     // clearTimeout(timer)
//     clearInterval(timer)
// })


// 콜백(callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간) 여기에 들어가는 함수가 콜백

// function timeout(cb) {
//     setTimeout(() => {
//         console.log("Hello")
//         cb()
//     }, 3000)
// }
// 콜백함수를 통해 함수의 인수로 사용되는 또다른 함수를 사용하여
// 함수의 실행을 보장해주는 함수이다.
// timeout(() => {
//     console.log('Done!')
// })



// 객체
// const heropy = {
//     firstName: 'Heropy',
//     lastName: 'Park',
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(heropy.getFullName())

// function User(first, last) {
//     this.firstName = first
//     this.lastName = last
// }
// user같은 객체를 생성하는 경우에는 값이 계속 달라져 메모리를 따로 써야하나
// 밑의 getFullName의 경우 같은 로직의 함수가 동일하게 동작
// user와 함께 쓸 경우 메모리 비효율 적
// prototype를 이용해 따로 빼주기 (참조의 개념)
// prototype으로 생성하는 함수는 메모리에 한번만 만들어짐
// 그리고 해당 객체에서 언제든지 참조 가능
// User.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }


// new가 생성자 함수
// 생성자 함수를 통해 하나의 객체를 생성
// const heropy = new User('Heropy', 'Park')

// console.log(heropy)
// console.log(heropy.getFullName())

// {} 중괄호를 통해 객체를 생성하는 것을 리터럴 방식이라고 함
// const heropy = {}




// this
// 일반(Normal)함수는 호출 위치에서 따라 this 정의
// 화살표(Arrow)함수는 자신이 선언된 함수 범위에서 this 정의

// const heropy = {
//     name: 'Heropy',
// ES6문법에서 function 생략 가능
//     normal: function() {
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name)
//     }
// }
// 바깥에서 호출하는 경우 normal처럼 this가 누군지 아는 경우에
// 일반함수 사용
// heropy.normal()
// 함수 범위 안에서만 동작하기 때문에 밖에서는 안됨
// heropy.arrow()

// const amy = {
//     name: 'Amy',
//     normal: heropy.normal,
//     arrow: heropy.arrow
// }

// amy.normal()
// amy.arrow()


// 화살표 함수 사용하는 경우
// const timer = {
//     name: 'Heropy!!',
//     timeout: function () {
        // 여기서 일반함수인 function을 사용하면
        // console.log의 this가 어디의 this인 지를 모름
        // 화살표함수를 사용하면 this가 가르치는 것은 추가적으로 감싸져 있는
        // 일반함수 function의 범위를 포함하고 일반함수가 정의된 timer라는 객체데이터를 가리킴
        // 따라서 콜백함수는 화살표함수를 활용하여 정의
//         setTimeout(() => {
//             console.log(this.name)
//         }, 2000)
//     }
// }
// timer.timeout()


// ES6 클래스 작성 문법
// class User {
//     constructor(first, last) {
//         this.firstName = first
//         this.lastName = last
//     }
    // 프로토타입 사용법
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const heropy = new User('Heropy', 'Park')
// console.log(heropy.getFullName())


// 상속(확장)
// class Vehicle {
//     constructor(name, wheel) {
//         this.name = name
//         this.wheel = wheel
//     }
// }

// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//     constructor(name, wheel) {
//         super(name, wheel)
//     }
// }

// class Car extends Vehicle {
//     constructor(name, wheel, license) {
//         super(name, wheel) 
//         this.license = license
//     }
// }



// .forEach() 배열 반복 함수

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// 메소드 안 인수로 사용하는 함수 -> 콜백함수
// fruits.forEach(function (element, index, array) {
//     console.log(element, index, array)
// })

// fruits.forEach(function (fruit, index, array) {
//     console.log(fruit, index, array)
// })

// .map()함수
// const a = fruits.forEach(function (fruit, index) {
//     console.log(`${fruit}-${index}`)
// })
// // 반환되는 값이 없기에 undefined 출력
// console.log(a)

// map과 forEach의 큰 차이점은 map함수는 콜백에서 반환된
// 특정 데이터들을 배열로 반환
// const b = fruits.map(function (fruit, index) {
//     return `${fruit}-${index}`
// })
// console.log(b)
// const b = fruits.map(function (fruit, index) {
//     // 객체 방식으로 반환
//     return {
//         id: index,
//         name: fruit
//     }
// })
// console.log(b)
// 간추려서 쓰기
// 화살표함수 사용
// const b = fruits.map((fruit, index) => ({
//     // {}하나만 있어도 되지만 객체데이터는 소괄호로 한번 감싸주기
//     id: index,
//     name: fruit
// }))
// console.log(b)


// .filter()
// map의 경우 true, false가 반환
// const a = numbers.map(number => {
//     return number < 3
// })
// console.log(a)

// return문을 통해 하나의 실행문만 반환한다면 return 생략 가능
// const a = numbers.map(number => number < 3)
// console.log(a)

// // filter를 사용하면 해당하는 값을 반환해줌
// // 배열안의 값을 특정한 기준으로 필터링해서 값을 반환
// // const b = numbers.filter(number => {
// //     return number < 3
// // })
// const b = numbers.filter(number => number < 3)
// console.log(b)



// .find()   .findIndex()

// const a = fruits.find(fruit => {
//     // B로 시작하면 반환 조건에 맞는 요소 찾으면 더이상 반복X
//     return /^B/.test(fruit)
// })
// console.log(a)

// 코드 간결화
// const a = fruits.find(fruit => /^B/.test(fruit))
// console.log(a)

// findIndex는 인덱스 반환
// const b = fruits.findIndex(fruit => {
//     return /^C/.test(fruit)
// })
// 코드 간결화
// const b = fruits.findIndex(fruit => /^C/.test(fruit))
// console.log(b)



// .includes()
// 특정 값이 들어있는지 true, false로 반환
// const a = numbers.includes(3)
// console.log(a)



// .push()  .unshift()
// 원본 수정됨 주의

// push는 배열 마지막에 원소 삽입
// numbers.push(5)
// console.log(numbers)

// unshift는 배열 첫번째에 원소 삽입
// numbers.unshift(0)
// console.log(numbers)


// .reverse()
// 원본 수정됨 주의 배열 거꾸로 뒤집어서 반환

// .splice()
// 원본 수정됨 주의

// numbers배열의 인덱스 2번째 값 3을 1개 삭제
// numbers.splice(2, 1)

// 아래와 같이 삽입도 가능
// 2번 인덱스 자리에 999 삽입
// numbers.splice(2, 0, 999)
// console.log(numbers)



// 객체 활용

const userAge = {
    name: 'Heropy',
    age: 85
}

const userEmail = {
    name: 'Heropy',
    email: 'thesecon@gmail.com'
}

// const target = Object.assign(userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge)

// 이상태는 속성을 복사, 
// const target = Object.assign({}, userAge)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge)

// const user = {
//     name: 'Heropy',
//     age: 85,
//     email: 'thesecon@gmail.com'
// }

// const keys = Object.keys(user)
// console.log(keys)

// console.log(user['email'])

// const values = keys.map(key => user[key])
// console.log(values)


// 구조 분해 할당
// 비구조화 할당
// const user = {
//     name: 'Heropy',
//     age: 85,
//     email: 'thesecon@gmail.com'
// }

// const { name, age, email, address } = user

// console.log(`사용자의 이름은 ${name}입니다.`)
// console.log(`${name}의 나이는 ${age}세 입니다.`)
// console.log(address)

// const fruits = ['Apple', 'Banana', 'Cherry']
// const [a, b, c, d] = fruits
// console.log(a, b, c, d)
// 순서를 통해 값을 안받는것도 가능
// const [, , b] = fruits
// console.log(b)

// 전개 연산자(Spread) ...
// console.log(...fruits)

// function toObject(a, b, ...c) {
//     return { a, b, c }
// }
// console.log(toObejct(...fruits))


// 데이터 불변성(Immutability)

// 원시 데이터: String, Number, Boolean, undefined, null
// 원시데이터들은 한번 만들어지면 메모리를 차지하면 불변

// 참조형 메모리의 경우 같은 값을 바라보게 했을 때 주의할것
// 의도치 않게 값이 바뀔 수 있음
// 참조형 데이터: Object, Array, Function
let a = { k: 1 }
let b = { k: 1 }
console.log(a, b, a === b)
a.k = 7
b = a
console.log(a, b, a === b)
a.k = 2
// a값을 바꿨는데 b의 값 까지 바뀜
console.log(a, b, a === b)
let c = b
console.log(a, b, c, a === c)
a.k = 9
// c의 값마저 바뀜
console.log(a, b, c, a === c)

// 이런 문제점을 해결하기 위해 복사 사용
// 복사를 통해 메모리 상에서 분리해주기

// 얕은 복사, 깊은 복사
const user = {
    name: 'Heropy',
    age: 85,
    emails: ['thesecon@gmail.com']
}
// 얕은 복사 방법
// {} 대상객체에다가 user 출처객체가 가진 속성들을 담아 반환
// 1. assign 사용
// const copyUser = Object.assign({}, user)
// 2. 구조분해 방법

// 깊은 복사
import _ from 'lodash'

// 얕은 복사 방법
// const copyUser = {...user}

// 깊은 복사 방법
const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

// 얕은 복사의 문제점
// 객체에 새로운 값을 할당할 경우 메모리를 공유하게 됨
user.emails.push('neo@zillinks.com')
console.log(user.emails === copyUser.emails)


// 객체나 배열을 복사할 때 또 다른 참조 데이터가 없다면 얕은 복사
// 있다면 깊은 복사