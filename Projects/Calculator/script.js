let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

let expression = " ";

buttons.forEach(function(button)
{
    button.addEventListener("click" , function()
    {
        
        let value = button.innerText;

        if(value === "AC")
        {
            expression = "";
            display.innerText = "0";
        }

        else if(value === "C")
        {
            expression = expression.slice(0 , -1);

            if(expression === "")
            {
                display.innerText = "0";
            }
            else
            {
                display.innerText = expression;
            }
        }

        else if(value === "%")
        {
            if(expression != "")
            {
                expression = eval(expression) / 100;

                display.innerText = expression;
            }
        }

        else if(value === "=")
        {
            let lastCharacter = expression[expression.length-1];

            if(lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "*" || lastCharacter === "/" || lastCharacter === "")
            {
                display.innerText = "Invalid";
                expression = "";
            }
            else
            {
                expression = eval(expression).toString();
                display.innerText = expression;
            }
        }

        else if(value === "+" || value === "-" || value === "*" || value === "/")
        {
            if(expression === "")
            {
                return;
            }

            let lastCharacter = expression[expression.length-1];

            if(lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "*" || lastCharacter === "/")
            {
                expression = expression.slice(0 , -1) + value;
            }
            else
            {
                expression += value;
            }

            display.innerText = expression;
        }

        else if(value === ".")
        {
            let parts = expression.split(/[\+\-\*\/]/);

            let currentPart = parts[parts.length-1];

            if(!currentPart.includes("."))
            {
                expression += value;

                display.innerText = expression;
            }
        }

        else
        {
            if(expression === "0")
            {
                expression = value;
            }
            else
            {
                expression += value;
            }

            display.innerText = expression
        }
    });
});