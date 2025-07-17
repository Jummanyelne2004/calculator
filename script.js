let input = document.querySelector('input');
let btns = document.querySelectorAll('button');

let str = "";

Array.from(btns).forEach((btn) => {
    btn.addEventListener("click", (e) => {

        if(e.target.innerHTML == '='){
            str = eval(str);
            input.value = str;
        }
        else if(e.target.innerHTML == 'AC'){
            str = "";
            input.value = str;
        }
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0, str.length-1);
            input.value = str;
        }
        else{

            if(e.target.innerHTML == 'x'){
                str += '*';
                // input.value = str;
            }
            else{
                str += e.target.innerHTML;
            }

            input.value = str;
        }

        // str += e.target.innerHTML;
        // input.value = str;
        // console.log(str);

       
    })
})
