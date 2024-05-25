//variables de texto e informacion

var info1= new Array("Docencia","Docentes")
var info1_2= new Array("Laborum reprehenderit necessitatibus aperiam quasi quod labore nihil! Est consectetur illum voluptates molestiae, quo porro laboriosam impedit rem eius! Harum maxime ab tenetur sapiente deserunt minus fugiat recusandae cum iusto?"
    ,"Dolorum, minima? Mollitia quos est, error quidem natus perferendis eligendi molestias, magnam ipsa temporibus atque maiores sapiente voluptates obcaecati vero soluta facilis quas quis quibusdam repellendus voluptas accusamus praesentium nulla!"
);

var info2= new Array("Control Escolar", "Enfermeria", "Tutorias", "Laboratorio", "Orientacion", "Salas de Computo", "Dual");
var info2_2= new Array("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum architecto nisi similique repudiandae voluptate cumque quasi laudantium voluptas neque, fuga expedita repellendus aliquid non nihil placeat asperiores, impedit, dicta sequi?"
    ,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ex facere quia sunt porro dolores, quisquam assumenda quibusdam maxime id ad excepturi quo mollitia quod praesentium dolorum quae, perspiciatis itaque?"
    ,"Debitis in ea nam voluptates pariatur nesciunt neque assumenda expedita reprehenderit sint quisquam a tenetur, eligendi dolorem numquam facilis ducimus officia, error minus nisi autem eos aspernatur laudantium itaque! Vitae."
    ,"Laborum reprehenderit necessitatibus aperiam quasi quod labore nihil! Est consectetur illum voluptates molestiae, quo porro laboriosam impedit rem eius! Harum maxime ab tenetur sapiente deserunt minus fugiat recusandae cum iusto?"
    ,"Dolorum, minima? Mollitia quos est, error quidem natus perferendis eligendi molestias, magnam ipsa temporibus atque maiores sapiente voluptates obcaecati vero soluta facilis quas quis quibusdam repellendus voluptas accusamus praesentium nulla!"
    ,"Laborum reprehenderit necessitatibus aperiam quasi quod labore nihil! Est consectetur illum voluptates molestiae, quo porro laboriosam impedit rem eius! Harum maxime ab tenetur sapiente deserunt minus fugiat recusandae cum iusto?"
    ,"Dolorum, minima? Mollitia quos est, error quidem natus perferendis eligendi molestias, magnam ipsa temporibus atque maiores sapiente voluptates obcaecati vero soluta facilis quas quis quibusdam repellendus voluptas accusamus praesentium nulla!"
    ,"Laborum reprehenderit necessitatibus aperiam quasi quod labore nihil! Est consectetur illum voluptates molestiae, quo porro laboriosam impedit rem eius! Harum maxime ab tenetur sapiente deserunt minus fugiat recusandae cum iusto?"
)

var info3= "Mantenimiento"
var info3_2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum architecto nisi similique repudiandae voluptate cumque quasi laudantium voluptas neque, fuga expedita repellendus aliquid non nihil placeat asperiores, impedit, dicta sequi?"

//Movimiento y funciones de los divs superioses------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var cliCoo=0, cliSD=0, cliSA=0, bandera=0

let footer= document.getElementById('namas')

let titulos=document.getElementById('titulos')
let informacion=document.getElementById('informaciones')

var clicks=0

let left=document.getElementById('left')
let right=document.getElementById('right')
let img=document.getElementById('mante')

let cooAc=document.getElementById('cooAc')
let subDi=document.getElementById('subDi')
let subAd=document.getElementById('subAd')

let divInfo=document.getElementById('whatdoyousee');

var startX
var startY
var endX
var endY

divInfo.addEventListener('touchstart', (e)=>{
    startX= e.touches[0].clientX
    startY= e.touches[0].clientY
})

divInfo.addEventListener('touchmove', (e)=>{
    endX= e.touches[0].clientX
    endY= e.touches[0].clientY
})

divInfo.addEventListener('touchend', (e)=>{
    var deltaX= startX - endX
    var deltaY= startY - endY

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            clicks--

            if(bandera===1){
                titulos.classList.add('activar')
                informacion.classList.add('activar')

                if(clicks===-1){
                    clicks=info1.length-1
                }
            } else if(bandera===2){
                titulos.classList.add('activar')
                informacion.classList.add('activar')

                if(clicks===-1){
                    clicks=info2.length-1
                }
            } else if(bandera===3){
                e.stopImmediatePropagation()
                return 0
            }

            titulos.addEventListener('animationend', (event)=>{
                if(event.animationName==='moveDesH'){
                    if(bandera===1){
                        titulos.textContent=info1[clicks]
                        informacion.textContent=info1_2[clicks]
                    } else if(bandera===2){
                        titulos.textContent=info2[clicks]
                        informacion.textContent=info2_2[clicks]
                    }
                    
                    titulos.classList.remove('activar')
                    informacion.classList.remove('activar')
                }
            })
        } else {
            clicks++

            if(bandera===1){
                titulos.classList.add('activar')
                informacion.classList.add('activar')

                if(clicks>=info1.length){
                    clicks=0
                }
            } else if(bandera===2){
                titulos.classList.add('activar')
                informacion.classList.add('activar')

                if(clicks>=info2.length){
                    clicks=0
                }
            } else if(bandera===3){
                e.stopImmediatePropagation()
                return 0
            }

            titulos.addEventListener('animationend', (event)=>{
                if(event.animationName==='moveDesH'){
                    if(bandera===1){
                        titulos.textContent=info1[clicks]
                        informacion.textContent=info1_2[clicks]
                    } else if(bandera===2){
                        titulos.textContent=info2[clicks]
                        informacion.textContent=info2_2[clicks]
                    }

                    titulos.classList.remove('activar')
                    informacion.classList.remove('activar')
                }
            })
        }
    } 
})

cooAc.addEventListener('click', ()=>{
    cliCoo++, cliSA=0, cliSD=0

    titulos.textContent=info1[0]
    informacion.textContent=info1_2[0]

    bandera=1

    divInfo.style.display='flex'
    if(window.innerWidth>800){
        footer.style.marginTop='860px'
    } else if(window.innerWidth<=800&&window.innerWidth>460){
        footer.style.marginTop='1100px'
    } else if(window.innerWidth<=460&&window.innerWidth>360){
        footer.style.marginTop='1200px'
    } else if(window.innerWidth<=360){
        footer.style.marginTop='1360px'
    }

    left.style.display='inline'
    right.style.display='inline'
    img.style.display='none'

    if(cliCoo>2){
        divInfo.classList.remove('movimiento')
        console.log(divInfo.getAttribute('class'))
        divInfo.classList.add('movimiento')
        console.log(divInfo.getAttribute())
        cooAc.setAttribute('onclick', "window.location.href='#whatdoyousee'")
    }

})

subDi.addEventListener('click', ()=>{
    cliSD++, cliSA=0, cliCoo=0

    titulos.textContent=info2[0]
    informacion.textContent=info2_2[0]

    bandera=2

    divInfo.style.display='flex'
    if(window.innerWidth>800){
        footer.style.marginTop='860px'
    } else if(window.innerWidth<=800&&window.innerWidth>460){
        footer.style.marginTop='1100px'
    } else if(window.innerWidth<=460&&window.innerWidth>360){
        footer.style.marginTop='1200px'
    } else if(window.innerWidth<=360){
        footer.style.marginTop='1300px'
    }

    left.style.display='inline'
    right.style.display='inline'
    img.style.display='none'

    if(cliSD>2){
        
        subDi.setAttribute('onclick', "window.location.href='#whatdoyousee'")
    }
})

subAd.addEventListener('click', ()=>{
    cliSA++, cliCoo=0, cliSD=0

    bandera=3

    titulos.textContent=info3
    informacion.textContent=info3_2

    divInfo.style.display='flex'
    if(window.innerWidth>800){
        footer.style.marginTop='860px'
    } else if(window.innerWidth<=800&&window.innerWidth>460){
        footer.style.marginTop='1100px'
    } else if(window.innerWidth<=460&&window.innerWidth>360){
        footer.style.marginTop='1200px'
    } else if(window.innerWidth<=360){
        footer.style.marginTop='1300px'
    }

    left.style.display='none'
    right.style.display='none'
    img.style.display='inline'


    if(cliSA>2){
        subAd.setAttribute('onclick', "window.location.href='#whatdoyousee'")
    }
})

//Funciones de los botones

left.addEventListener('click', ()=>{
    titulos.classList.add('activar')
    informacion.classList.add('activar')

    clicks--

    if(bandera===1){
        if(clicks===-1){
            clicks=info1.length-1
        }
    } else if(bandera===2){
        if(clicks===-1){
            clicks=info2.length-1
        }
    }

    titulos.addEventListener('animationend', (event)=>{
        if(event.animationName==='moveDesH'){
            if(bandera===1){
                titulos.textContent=info1[clicks]
                informacion.textContent=info1_2[clicks]
            } else if(bandera===2){
                titulos.textContent=info2[clicks]
                informacion.textContent=info2_2[clicks]
            }

            titulos.classList.remove('activar')
            informacion.classList.remove('activar')
        }
    })
})

right.addEventListener('click', ()=>{
    titulos.classList.add('activar')
    informacion.classList.add('activar')
    
    clicks++

    if(bandera===1){
        if(clicks>=info1.length){
            clicks=0
        }
    } else if(bandera===2){
        if(clicks>=info2.length){
            clicks=0
        }
    }

    titulos.addEventListener('animationend', (event)=>{
        if(event.animationName==='moveDesH'){
            if(bandera===1){
                titulos.textContent=info1[clicks]
                informacion.textContent=info1_2[clicks]
            } else if(bandera===2){
                titulos.textContent=info2[clicks]
                informacion.textContent=info2_2[clicks]
            }

            titulos.classList.remove('activar')
            informacion.classList.remove('activar')
        }
    })
})