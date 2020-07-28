import { getData, PRUEBA, PRODUCTS, CATEGORIES } from "./productData";

export function getProductsByCategory(category) {
  return PRODUCTS.filter(r => r.category === category);
}

export function getProductById(id) {
  return PRODUCTS.find(r => r.id === id);
}

export function getProducts() {
  console.log(PRUEBA());
  return PRODUCTS;
}

export function getCategories() {
  return CATEGORIES;
}

export function getSimilarRecipes(text) {
  return [];
}
