(function(){
    
    const sliders = [...document.querySelectorAll('.instalacion-cuerpo')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.instalacion-cuerpo--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;
        sliders[Number(currentTestimony)-1].classList.remove('instalacion-cuerpo--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('instalacion-cuerpo--show');

    }
})();

document.addEventListener('DOMContentLoaded', (event) => {
    var inputs = document.querySelectorAll('.linea-tiempo-contenedor .input');
    var paras = document.querySelectorAll('.descripcion-linea-tiempo p');
    
    inputs.forEach((input, index) => {
        input.addEventListener('click', function() {
            inputs.forEach(i => i.classList.remove('active'));
            paras.forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
            paras[index].classList.add('active');
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var user_email = document.getElementById('user-email').value;
    var user_name = document.getElementById('user-name').value;
    var message = document.getElementById('message').value;

    emailjs.send('service_b184p39', 'template_bw8n21g', {
        to_name: 'christiangarduno292',
        from_name: user_name,
        reply_to: user_email,
        message: message
    })
    .then(function(response) {
        alert('SUCCESS!', response.status, response.text);
    }, function(error) {
        alert('FAILED...', error);
    });
});