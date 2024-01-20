//buttons and label

const label = document.getElementById("label");
const buttonValues = ["zero","one","two","three","four","five","six","seven","eight","nine","plus","subtract","divide","multiply","dot","equal"];
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const dotPresent = false;
const equalButton = document.getElementById('equal');
//clear

clearButton.addEventListener("click",function(){
    label.textContent = "";
    
});


//for loop to loop through elements of buttonValues array
for (let index = 0; index < buttonValues.length; index++) {
    
    document.getElementById(buttonValues[index]).addEventListener("click",function(){

            const buttonText = this.innerHTML;

       
        if(buttonText === 'dot' && dotPresent === false){
            handleDot();
            
        }
        else{
            label.textContent += buttonText;
        }
    })
    
}

//equal button needs to perform an action and not just display something to the screen
equalButton.addEventListener("click",function(){

    calculate();
})

//delete
deleteButton.addEventListener("click",function(){

    let currentInput = label.textContent;
    //slice from 1st  val to last val
    label.textContent = currentInput.slice(0,-1);
});

//handle the dot

function handleDot(){

    const currentInput = label.textContent;
    const lastCharacter = currentInput.slice(-1);

    if(lastCharacter !=="."){
        label.textContent += ".";
        dotPresent = true;
        
    }
}
//parts that I need to understand
//calculations

function calculate(){

    const currentInput = label.textContent;
    try {
        const result = evaluateExpression(currentInput);
        label.textContent = result;
    } catch (error) {
        label.textContent = 'An Error has occured';
    }
}

//evaluate expressions

function evaluateExpression(expression){

    const operators = ['+', '-', '*', '/'];
        //numbers inputted by the user asumed to be of numeric value
    const tokens = expression.split(/([+\-*/])/);
    let result = parseFloat(tokens[0]);

    //need to locate operators and operands
    for (let index = 1; index < tokens.length; index+=2) {

        const operator = tokens[index];
        //makes sure numeric input is used
        const nextOperand = parseFloat(tokens[index+1]);
//
        console.log('Operator:', operator);
        console.log('Next Operand:', nextOperand);


        if(isNaN(nextOperand)){
            throw new Error('Invalid input');
        }

        else{
        switch (operator) {
            case '+':
                result += nextOperand;
                break;
            case '-':
                result -= nextOperand;
                break;
            case '*':
                result *= nextOperand;
                break;
            case '/':
                if (nextOperand === 0) {
                    throw new Error('Division by zero');
                }
                result /= nextOperand;
                break;
            default:
                throw new Error('Invalid operator');
        }
                // Your existing switch statement...

                console.log('Result:', result);
    }
    }
    return result;
        

}