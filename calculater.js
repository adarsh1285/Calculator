let string = " ";
let btns = document.querySelectorAll('.btn');

function deleteLastCharater(){
    let scn = document.getElementById('#del');
    scn.value = scr.value.slice(0, -1);
}
Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string=eval(string);
        document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML == 'AC'){
            string=" ";
        document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML == 'DEL'){
         deleteLastCharater();

        }
        
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value=string;

        }
});
});








