

var name = 'Muhammet'
var age = 32
var name_objects = {firstName : 'Muhammet', lastName : 'Yilmaz'}
var truth = true
var sheets = ['HTML','CSS']
var a = null

var student = {
    firstName : 'Muhammet',
    lastName : 'Yilmaz',
    age : 32,
    height : 184,

    fullName : function(){
        return this.firstName + ' ' + this.lastName
    }

}

const ageValue = student.age

console.log(ageValue)
console.log(student.fullName())




