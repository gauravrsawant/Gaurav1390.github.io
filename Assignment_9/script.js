const fetchBtn = document.querySelector('#fetch-btn');
const categorySelect = document.querySelector('#category-select');
const productsContainer = document.querySelector('#products-container');

fetchBtn.addEventListener('click', () => {
  // Fetch data from API
  fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
      const products = data.products;

      // Get categories
      const categories = [...new Set(products.map(product => product.category))];

      // Populate category dropdown
      categorySelect.innerHTML = `<option value="">Select category</option>`;
      categories.forEach(category => {
        categorySelect.innerHTML += `<option value="${category}">${category}</option>`;
      });

      // Filter products by category
      categorySelect.addEventListener('change', event => {
        const selectedCategory = event.target.value;
        const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;
        productsContainer.innerHTML = '';
        filteredProducts.forEach(product => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${product.brand}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            <td class="image-container">
              ${product.images.map(image => `<img src="${image}">`).join('')}
            </td>
          `;
          productsContainer.appendChild(row);
        });
      });
    })
    .catch(error => console.error(error));
});