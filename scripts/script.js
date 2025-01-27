import {data} from './data.js';
import {slideData} from './slideData.js';

let carousel = document.getElementById('carousel');
let peliculas = document.getElementById('peliculas');
let fragment = document.createDocumentFragment();
let fragmentPelis = document.createDocumentFragment();


Pelicula();

slideData.forEach((slide) => {
    const {image, nombre} = slide;
    let slideC = document.createElement('div');
    if(slide.nombre == 'Guardianes de la Galaxia vol. 3'){
        slideC.className = 'carousel-item active' 
    }else{
        slideC.className = 'carousel-item' 
    }
    

    let img = document.createElement('img')
    img.src = image;
    img.className = 'd-block w-100'

    let name = document.createElement('div')
    name.className = 'carousel-caption d-none d-md-block o-caption-c'
    
    let h5 = document.createElement('h2')
    h5.textContent = nombre;

    let btn = document.createElement('button')
    btn.type = 'button';
    btn.className = 'btn btn-primary'
    btn.textContent = 'Ver Ahora'

    slideC.appendChild(img);
    slideC.appendChild(name);
    name.appendChild(h5)
    name.appendChild(btn)
    fragment.appendChild(slideC);

})
carousel.appendChild(fragment);

data.forEach((pelis) => {
    const {id, image, nombre, link} = pelis;
    let pelicula = document.createElement('div');
    pelicula.id = id;
    pelicula.className = 'o-card'
    

    let img = document.createElement('img')
    img.src = image;
    img.className = 'o-img'

    let name = document.createElement('div')
    
    let h5 = document.createElement('h5')
    h5.textContent = nombre;

    pelicula.appendChild(img);
    pelicula.appendChild(name);
    name.appendChild(h5)
    fragmentPelis.appendChild(pelicula);

})
peliculas.appendChild(fragmentPelis);


function Pelicula() {


    $(document).ready(function(){
        $('body').on('click', '.o-card', function(){

        $("#modalPeli").modal('show');
          let idPeli = $(this).attr('id')
          infoPelicula(idPeli)

          
        })
      })
}

function infoPelicula(idPeli){
    data.forEach((pelis) => {
        const {id, image, nombre, info} = pelis;
        
        if(idPeli == id){
            let informacion = document.getElementById('info')
            informacion.innerHTML = `
            <div class="o-header-modal">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body row o-modal">
                            <img src=${image} alt="" class="o-img-info col">
                            <div class="info col">
                                <h2>${nombre}</h2>
                                <p>${info}</p>
                        </div>
                    </div>
            `
        }
        
    })
    
}


