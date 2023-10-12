let coinFlip
let results
let num = 0
do {
    num++ 
    coinFlip= parseInt(Math.round(Math.random()))
    if (coinFlip >= 1) { 
        results='Tails'
        } else results='Heads'
    console.log(`CoinFlip is ${results}`)
} while (results === 'Heads')
console.log(`It took ${num} times to get Tails!`)
 