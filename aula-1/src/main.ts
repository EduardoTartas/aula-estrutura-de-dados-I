// Vinícius Almeida Moraes
// ADS 2025/1

let argumentos: string[] = process.argv.slice(2)

// -------------- Random Numbers --------------

function randomNumbers(x: number, y: number, z: number) {
    let arr: number[] = []
    
    while(arr.length < x) {
        let newNumber: number = Math.floor(Math.random() * (z + 1))

        if(!(newNumber < y || newNumber > z)) {
            arr.push(newNumber)
        } 
    }

    return arr
}

// randomNumbers(10, 1, 1000)

// -------- Biggest, Smallest, Average --------

function bigSmallAverage() {
    let arr: number[] = randomNumbers(parseInt(argumentos[0]), 0, 100)

    let biggest = arr[0]
    let smallest = arr[0]
    let total = 0

    for (let value of arr) {
        total += value

        if (value >= biggest) {
            biggest = value
        } 
        
        if (value <= smallest) {
            smallest = value
        }
    } 
    
    let avg = total / arr.length

    console.log('Array:'   , arr)
    console.log('Biggest:' , biggest)
    console.log('Smallest:', smallest)
    console.log('Average:', avg)
}

// bigSmallAverage()

// -------------------- Peak -------------------

function peak() {  
    let arr: number[] = randomNumbers(parseInt(argumentos[0]), 0, 100) 

    console.log(arr)

    for (let i = 0; i < arr.length; i++) {  
        let isPeak = true

        if (i > 0 && arr[i] <= arr[i - 1]) {  
            isPeak = false
        }  
        
        if (i < arr.length - 1 && arr[i] <= arr[i + 1]) {  
            isPeak = false
        }  

        if (isPeak) {  
            console.log('Peak:', arr[i])
        }  
    }  
}  

peak()