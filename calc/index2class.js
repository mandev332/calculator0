let num = document.querySelector("tbody")
let input = document.querySelector("input")
let s = 0


class Calculator {
    arr1=""
    arr2=""
    sign=""
    calculator(arg){
        
        
        if ((arg*1 || arg == "0") && s==0){
            this.arr1+=arg
            input.value += arg
        }
        else if (arg*1 || arg == "0" && s==1){
            this.arr2+=arg
            input.value = this.arr1 + this.sign + this.arr2
        } 
        else if (arg == "+" && s==0){
            this.sign = arg
            s=1
            input.value = this.arr1+arg
        }
        else if (arg == "-" && s==0){
            this.sign = arg
            s=1
            input.value = this.arr1+arg
        }
        else if (arg == "*" && s==0){
            this.sign = arg
            s=1
            input.value = this.arr1+arg
        }
        else if (arg == "/" && s==0){
            this.sign = arg
            s=1
            input.value = this.arr1+arg
        }
        else if (arg == "+" && s==1){
            this.sign = arg
            s=0
            input.value = eval(input.value) + this.sign
        }
        else if (arg == "-" && s==1){
            this.sign = arg
            s=0
            input.value = eval(input.value)+arg
        }
        else if (arg == "*" && s==1){
            this.sign = arg
            s=0
            input.value = eval(input.value)+arg
        }
        else if (arg == "/" && s==1){
            this.sign = arg
            s=0
            input.value = eval(input.value)+arg
        }
        else if (arg == "="){
            input.value = eval(input.value)
        }
    }
}
let calc = new Calculator()
num.addEventListener("click", (event)=>{
    // if (event.target.textContent!="R" && event.target.textContent!="R" && event.target.textContent!="R" && )
    calc.calculator(event.target.textContent)
}) 