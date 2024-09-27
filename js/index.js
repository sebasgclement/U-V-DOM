/*
const $btn = document.createElement('button');
$btn.textContent = "click me";
$btn.classList.add('success');
document.body.appendChild($btn); */
/*
document.body.innerHTML = `
<button class="success">Boton desde innerHTML</button>
<a href="#">ir a youtube </a>
`;*/

/* const $list = document.getElementById('tabla');
for (let i=1; i <= 9; i++ ){
    let $li = document.createElement("li");
    $li.textContent = `3 x ${i} = ${i*3}`;
    $list.appendChild($li);
} */

    //document.addEventListener("DOMContentLoaded", (e) => alert("Bienvenido a mi sitio"));

    const $btnFigure = document.getElementById('btnFigura');
    const $figura = document.querySelector('.figure');
    const $list = document.getElementById('listColor');
    const $input = document.getElementById('password');
    const $check = document.getElementById('checkPassword');
    const $label = document.getElementById('lblPassword');

    const cambiarFigura = () =>{
        if ($figura.classList.contains('cuadrado')){
            $figura.classList.remove('cuadrado');
            $figura.classList.add('circulo');
        }else if($figura.classList.contains('circulo')){
            $figura.classList.remove('circulo');
            $figura.classList.add('cuadrado');
        }
    }

    function verPassword (){
        if ($check.checked === false) $input.type = "password";
        else $input.type = "text";
    } 

    document.addEventListener('click', (e)=>{
        //if(e.target.matches('#btnFigura')) cambiarFigura();
        if(e.target === $btnFigure) cambiarFigura();
        if(e.target === $figura) alert("Esta es mi figura");
    })

    document.addEventListener('change', (e)=>{
        if(e.target === $list) $figura.style.background = $list.value;
        if( e.target === $check) verPassword();
    })

    /* document.addEventListener('focusin', (e) =>{
        if(e.target === $input) $label.textContent = 'Escribiendo...';
    })

    document.addEventListener('focusout', (e) =>{
        if(e.target === $input) $label.textContent = 'Password';
    }) */

    $input.addEventListener('focus', (e) => $label.textContent ='Escribiendo...');

    $input.addEventListener('blur', (e) => $label.textContent = 'Password');

    //keyup

    document.addEventListener('keyup', (e) =>{
        console.log(`Evento keyUp ${e.code}`);
    })

    document.addEventListener('keydown', (e) =>{
        console.log(`Evento keydown ${e.code}`);
    })

    document.addEventListener('keypress', (e) =>{
        console.log(`Evento keypress ${e.code}`);
    })
