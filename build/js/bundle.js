document.addEventListener('DOMContentLoaded', function(){
    scrollNav();

    navegacionFija();

});

function navegacionFija() {

    const  barra = document.querySelector('.header');
    
    //registra el intersection observer
    const observer = new IntersectionObserver( function (entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        } else{
            barra.classList.add('fijo');
        }

    });
    
    
    //elemento a observar 
    observer.observe(document.querySelector('.sobre-festival'));

};




function scrollNav (){
    //selecciono todos los enlaces
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( function( enlace ){
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            
            seccion.scrollIntoView({
                behavior: 'smooth',
            })
        });
        
        
    });



}

//lista de imagenes en javascript

document.addEventListener('DOMContentLoaded',function(){
    crearGaleria();
}); 

//agregamos imagenes
function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')

    //array recorre todas las images
    for( let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        //añador la funcion mostrar imagen
        imagen.onclick = mostrarImagen;

        //crea un li que contiene la lista de imagenes
        const lista = document.createElement('LI')
        lista.appendChild(imagen);
        
        galeria.appendChild(lista);
    }

}

//efecto de imagen en pantalla 
function mostrarImagen(e) {
    const id = parseInt( e.target.dataset.imagenId );
    
    //Generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    //crea un nuevo div con las imagenes grandes
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //cuando se ad click, cerra imagen
    overlay.onclick =function(){
        overlay.remove();
    }


    //boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent ='X'
    cerrarImagen.classList.add('btn-cerrar');


    //cuando se preciona  x se cierra la imagen
    cerrarImagen.onclick= function(){
        overlay.remove();
    }



    overlay.appendChild(cerrarImagen);

    //Mostarar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}