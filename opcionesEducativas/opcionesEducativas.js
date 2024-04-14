(function(){
    const temaImportante = [...document.querySelectorAll('.tema-importante h3')];

    temaImportante.forEach(tema =>{
        tema.addEventListener('click', ()=>{
            let height = 0;
            let aux = tema.nextElementSibling;
            let img = tema.querySelector('img');
            let article = tema.parentElement.parentElement;

            article.classList.toggle('add'); 
            img.classList.toggle('--rotate');

            if(aux.clientHeight === 0){
                height = aux.scrollHeight;
            }

            aux.style.height = `${height}px`;
        })
    })
})();

document.addEventListener('DOMContentLoaded', (event) => {
    var inputs = document.querySelectorAll('.contenedor-comunidad .opcion');
    var paras = document.querySelectorAll('.info-comunidad p');
    
    inputs.forEach((input, index) => {
        input.addEventListener('click', function() {
            inputs.forEach(i => i.classList.remove('active'));
            paras.forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
            paras[index].classList.add('active');
        });
    });
});