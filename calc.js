let string="";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        //If pressed =
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector("input").value=string;
        }
          //If pressed C
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector("input").value=string;
        }
          //If pressed DEL
        else if(e.target.innerHTML=='DEL'){
            string=string.toString().slice(0,-1);
            document.querySelector("input").value=string;
        }
        //output
        else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector("input").value=string;
        }
    })
})