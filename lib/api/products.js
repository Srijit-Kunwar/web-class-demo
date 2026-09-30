const API_URL = "https://dummyjson.com";

async function apiFetch(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

//get all products
export async function getProducts() {
  return apiFetch("/products");
}

//get product by id
export async function getProductById(id) {
  return apiFetch(`/products/${id}`);
}


//get all categories
export async function getCategories() {
  return apiFetch("/products/categories");
}

//get products by category
export async function getProductsByCategory(category) {
  return apiFetch(`/products/category/${category}`);
}


