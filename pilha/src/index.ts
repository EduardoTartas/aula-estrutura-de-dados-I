const expression = "2 7 + 9 + 4 / 6 *"

const splittedExpression = expression.split(" ")

const stack = []

for (let element of splittedExpression) {
    if (element !== "+" && element !== "-" && element !== "/" && element !== "*") {
        stack.push(parseFloat(element))
    } else {
        let operator = element
        let result: number = 0

        let a = stack.pop()!
        let b = stack.pop()!

        switch (operator) {
            case "+":
                result = b + a
                break
            case "-":
                result = b - a
                break
            case "/":
                result = b / a
                break
            case "*":
                result = b * a
                break
        }

        stack.push(result)
    }
}

console.log(`Resultado: ${stack}`)