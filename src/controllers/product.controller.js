import { getData,PRODUCTS, CATEGORIES } from "./productData";

export async function getProductsByCategory(category) {
  return (await getData()).filter(r => r.category === category);
}

export async function getProductById(_id) {
  return (await getData()).find(r => r._id === _id);
}

export async function getProducts() {
  return await getData();
}

export function getCategories() {
  return CATEGORIES;
}

export function getSimilarRecipes(text) {
  return [];
}
