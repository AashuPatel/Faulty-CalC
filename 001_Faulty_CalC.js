function calculate() {
    console.log("Aashu")
    const a = Number(document.getElementById("inputA").value);
    let sign = document.getElementById("sign").value;
    const b = Number(document.getElementById("inputB").value);
    let c ;
    const d = Math.floor(Math.random()*100);
    
    if(d%2 == 0){
        if(sign == "+"){
            c = Math.floor(Math.random()*100);
        } else if(sign=='-'){
            c = Math.floor(Math.random()*100);
        }  else if(sign=='*'){
            c = Math.floor(Math.random()*100);
        } else if(sign=='/'){
            c = Math.floor(Math.random()*100);
        } else{
            document.getElementById("result").innerText = "Invalid operator";
            return;
        }    
    } else{
        if(sign == "+"){
            c = a+b;
        } else if(sign=='-'){
            c= a-b;
        }  else if(sign=='*'){
            c= a*b;
        } else if(sign=='/'){
            c= a/b;
        } else{
            document.getElementById("result").innerText = "Invalid operator";
            return;
        }
    }
    
    document.getElementById("result").innerText = "Result: " + c;
}