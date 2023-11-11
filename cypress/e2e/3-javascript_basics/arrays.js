

let tools = ['Selenium','Cypress','WDIO','UFT','Protractor']

const string  = tools.toString()

console.log(string)

const join = tools.join(' * ')
console.log(join)

const pop = tools.pop()
console.log(tools);

const push = tools.push('Webshare')
console.log(tools);

const sort = tools.sort()
console.log(sort);

const reverse = tools.reverse()
console.log(tools);

tools.forEach((value) => {

    if(value == 'Cypress'){
        console.log('Cypress is trending');
    }else{
        console.log('Element not found');
    }
})







