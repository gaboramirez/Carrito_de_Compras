const contenedorProductos = document.querySelector('.contenedor-productos');
const aside = document.querySelector('aside');
const icon = document.querySelector('.icon');
const span = document.querySelector('span');

let asideProductos = [];

localStorage.clear();

document.addEventListener('DOMContentLoaded', () => {
    const fetchDato = async () => {
        try{
            const url = await fetch('api.json');
            const dato = await url.json()
            pintarDato(dato)
        }
        catch{
            console.log('error')
        }
    }
    fetchDato()
})

const pintarDato = (dato) => {

    Object.values(dato).forEach(productos => {
        const div = document.createElement('div');
        div.className = 'card';
        const img = document.createElement('img');
        img.setAttribute('src', productos.url);
        const title = document.createElement('h3');
        title.innerHTML = productos.title;
        const precio = document.createElement('h4');
        precio.innerHTML = productos.precio;
        const button = document.createElement('button');
        button.innerHTML = 'Agregar producto';
        button.className = 'btn';



        div.appendChild(img)
        div.appendChild(title)
        div.appendChild(button)
        div.appendChild(precio)

        contenedorProductos.appendChild(div)
    });
}

document.addEventListener('click', (e) =>{
    if(e.target.matches('.btn')){
        card = e.target.parentElement
          
        const productoCard = {
            img: card.querySelector('img').src,
            title: card.querySelector('h3').textContent,
            stock: 1,
            precio: card.querySelector('h4').textContent
        }

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Agregado al Carrito'
          })


        asideProductos.push(productoCard)

        agregarProductos(productoCard)

        localStorage.setItem('carrito', JSON.stringify(asideProductos))
    }

    if(e.target.matches('.icon') || e.target.matches('.icon *')){
        aside.classList.toggle('active')
    }

    if(e.target.matches('.fa-circle-plus')){
    
        const obj = {
            span: e.target.parentElement.querySelector('span')
        }

        obj.span.innerHTML++;     
        
    } 

    if(e.target.matches('.fa-circle-minus')){
        const obj = {
            span: e.target.parentElement.querySelector('span')
        }

        obj.span.innerHTML--; 
        
        if(obj.span.innerHTML <= 0){
            e.target.parentElement.remove()
        }

        }
})

const agregarProductos = (productoCard) => {
    const div = document.createElement('div');
    div.className = 'producto';
    const img = document.createElement('img');
    img.setAttribute('src', productoCard.img);
    const title = document.createElement('h3');
    title.innerHTML = productoCard.title;
    const precio = document.createElement('h4');
    precio.innerHTML = productoCard.precio;
    const iconSumar = document.createElement('i');
    iconSumar.className = 'fa-solid fa-circle-plus';
    const iconRestar = document.createElement('i');
    iconRestar.className = 'fa-solid fa-circle-minus';
    const span = document.createElement('span');
    span.textContent = productoCard.stock;


    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(precio)
    div.appendChild(iconSumar)
    div.appendChild(span)
    div.appendChild(iconRestar)

    aside.appendChild(div)
}