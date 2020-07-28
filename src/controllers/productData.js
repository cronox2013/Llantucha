import axios from 'axios';

export const PRODUCTS = [
  {
    id:0,
    title:"titulo",
    image:"https://static.frecuento.com//medias/40383557-01-BASEIMAGE-Midres?context=bWFzdGVyfGZyZWN1ZW50b3wzMDQ2OTZ8aW1hZ2UvanBlZ3xmcmVjdWVudG8vaGU5L2hjYS85MDg1MDg3NDQ5MTE4LmpwZ3xlMzBmOTYzYjE3MzU1MDMzNjFiODBlODJiNjRkZTA0MDhiZjM0ZmZkNDkwZWFkNzUyZWVhM2FiYzU1MTE5YzFi",
    content:"otro",
    category:0,
    precio:12,
  }
]

export const CATEGORIES = [
        "limpieza",
        "snacks",
        "papel",
        "higiene",
        "mascotas",
        "comestibles",
        "abarrotes",
        "varios"
      ];

export async function getData (){
  const lista= await axios.get('http://localhost:5000/products/').data
  console.log(lista)
  return lista
} 


export const PRUEBA = async() =>{
  console.log("put")
  const list = await getData().then(data=>data)
  return list
}


