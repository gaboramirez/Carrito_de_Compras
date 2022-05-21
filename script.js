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

        div.appendChild(Img)
        console.log(div)
    });
}