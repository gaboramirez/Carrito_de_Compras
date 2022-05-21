const contenedorProductos = document.querySelector('.contenedor-productos');
const aside = document.querySelector('aside');
const icon = document.querySelector('.icon');
let asideProductos = [];

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
        finally{
            console.log('finally')
        }
    }
})

fetchDato()

const pintarDato = (dato) => {

    Object.values(dato).forEach(productos => {
        const div = document.createElement('div');
        div.className = 'card';
        const Img = document.createElement('Img');
        Img.setAttribute('src', productos.url);
        const title = document.createElement('h3');
        title.innerHTML = productos.title;
        const button = document.createElement('button');
        button.innerHTML = 'Agregar producto';
        button.className = 'btn';



        div.appendChild(Img)
        div.appendChild(title)
        div.appendChild(button)
        
        contenedorProductos.appendChild(div)
    });
}