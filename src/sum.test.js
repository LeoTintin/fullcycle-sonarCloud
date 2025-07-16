const calc = require('./sum')

test ("add 1 plus 2 to be equal to 3", () =>{
    expect (calc(1,2)).toBe(2)
})