let num = document.querySelector("tbody")
let input = document.querySelector("input")
let s = 0



num.addEventListener("click", (event)=> {
    if (event.target.textContent*1 || event.target.textContent=="0"){
        input.value += event.target.textContent
        console.log(1);
    }
    
    else{
        if ( event.target.textContent!="=" &&
             event.target.textContent!="." &&
             event.target.textContent!="R" &&
             event.target.textContent!="C" &&
            input.value[input.value.length-1]!="+"&&
            input.value[input.value.length-1]!="-"&&
            input.value[input.value.length-1]!="/"&&
            input.value[input.value.length-1]!="."&&
            input.value[input.value.length-1]!="*"){
                input.value = eval(input.value) + event.target.textContent 
                s=0    
        console.log(2);

        }
        else{
            if (event.target.textContent!="=" &&
                event.target.textContent!="." &&
                event.target.textContent!="R" &&
                event.target.textContent!="C"){
                let x =input.value.split("")
                x[input.value.length-1]=event.target.textContent
                input.value=x.join("")
        console.log(3);

            }
            else if (event.target.textContent=="=" && 
                    event.target.textContent!="." &&
                    event.target.textContent!="R" &&
                    event.target.textContent!="C" &&
                    input.value[input.value.length-1]!="+"&&
                    input.value[input.value.length-1]!="-"&&
                    input.value[input.value.length-1]!="/"&&
                    input.value[input.value.length-1]!="."&&
                    input.value[input.value.length-1]!="*"){
                    input.value = eval(input.value)
        console.log(4);

            }
            else if (input.value[input.value.length-1]=="+"||
                    input.value[input.value.length-1]=="-"||
                    input.value[input.value.length-1]=="/"||
                    input.value[input.value.length-1]=="."||
                    input.value[input.value.length-1]=="*"){
                    let x =input.value.split("")
                    x[input.value.length-1]=""
                    input.value=x.join("")
        console.log(5);

            }
            else if (event.target.textContent=="." && s==0){
                input.value += event.target.textContent
                s=1
        console.log(6);

            }
            else if (event.target.textContent=="C"){
                input.value = null
        console.log(7);

            }
            else if (event.target.textContent=="R"){
                let x =input.value.split("")
                x[input.value.length-1]=""
                input.value=x.join("")
        console.log(8);

            }
        }
    }
})


