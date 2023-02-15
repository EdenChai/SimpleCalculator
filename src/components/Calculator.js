import './Calculator.css'
import React, { useState } from 'react';

/**
 * This component hold the state of user's calculations and render the user interface.
 */

function Calculator() 
{
    /**
     * Using the `useState` hook to create two state variables:
     * input  - hold the user's input as they type it in.
     * output - hold the final result of the calculation.
     */
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('Welcome to My Simple Calculator!');

    // The function that called whenever a digit button is clicked and concatenates the button's name to the input state variable.
    const handleDigitClick = (digit) => 
    {
        // If the output doesn't empty, clear it and don't concatenate with the input 
        if (output !== '')
        {
            handleClearClick();
        }
        setInput(input => input + digit);
    };

    // The function that called whenever a operator button is clicked and concatenates the button's name to the input state variable.
    const handleOperatorClick = (operator) => 
    {
        // If the previous output was any error, delete the contents of the variables.
        if (output === 'Cannot be divided by zero' || output === 'Invalid Expression')
        {
            handleClearClick();
            return;
        }

        // If the previous result is not empty, continue to calculate
        if (output !== '') 
        {
            setInput(output.toString());
            setOutput('');
        }
        setInput(input => input + operator);
    };

    /**
     * This function resets both input and output to their initial values.
     */
    const handleClearClick = () => 
    {
        setInput('');
        setOutput('');
    };

    /**
     * This function evaluates the user's input using the `eval` function and displays the result.
     */
    const handleEqualsClick = () => 
    {
        try 
        {
            const result = eval(input);
            
            // If the user divide by zero, display an error message instead.
            if (!Number.isFinite(result))
            {
                setOutput('Cannot be divided by zero');
            }
            else 
            {
                setOutput(result);
            }
        }
        catch 
        {
            // If the input is not a valid expression, display an error message instead.
            setOutput('Invalid Expression');
        }
    };

    // Render the calculator UI
    return (
        <div className="calculator">
            <div className="display">
                {output ? output : input}
            </div>
            <div className="keypad">
                <button onClick={() => handleDigitClick('7')}>7</button>
                <button onClick={() => handleDigitClick('8')}>8</button>
                <button onClick={() => handleDigitClick('9')}>9</button>
                <button onClick={() => handleOperatorClick('/')} className='operator'>/</button>
                <button onClick={() => handleDigitClick('4')}>4</button>
                <button onClick={() => handleDigitClick('5')}>5</button>
                <button onClick={() => handleDigitClick('6')}>6</button>
                <button onClick={() => handleOperatorClick('*')} className='operator'>*</button>
                <button onClick={() => handleDigitClick('1')}>1</button>
                <button onClick={() => handleDigitClick('2')}>2</button>
                <button onClick={() => handleDigitClick('3')}>3</button>
                <button onClick={() => handleOperatorClick('-')} className='operator'>-</button>
                <button onClick={() => handleDigitClick('0')} className='zero'>0</button>
                <button onClick={() => handleDigitClick('.')}>.</button>
                <button onClick={() => handleOperatorClick('+')} className='operator'>+</button>
                <button className="equal" onClick={handleEqualsClick}>=</button>
                <button className="clear" onClick={handleClearClick}>CE</button>
            </div>
        </div>
    );
}

export default Calculator;