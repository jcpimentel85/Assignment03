let coinFlip
let amountTimes = parseInt(prompt('Enter Number amount of times for the loop'))
for (let i = 1; i <= amountTimes; i++) {
    console.log(`Loop Execution # ${i}`)
    coinFlip= parseInt(Math.round(Math.random()))
    console.log(`Coin Value ${coinFlip}`)
    if (coinFlip >= 1) { 
        console.log(`Tails`)
        } else console.log(`Heads`)
    
   } 
    