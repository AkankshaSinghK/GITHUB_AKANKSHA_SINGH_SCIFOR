document.addEventListener("DOMContentLoaded", () => {
    const ajaxButton = document.getElementById("ajaxButton");
    const dataDisplay = document.getElementById("dataDisplay");
  
    // Function to display all products data
    const displayProductsData = (products) => {
      dataDisplay.innerHTML = "<h2>All Products</h2>";
      products.forEach((product) => {
        dataDisplay.innerHTML += `
                  <div>
                      <p><strong>ID:</strong> ${product.id}</p>
                      <p><strong>Title:</strong> ${product.title}</p>
                      <p><strong>Description:</strong> ${product.description}</p>
                      <hr>
                  </div>
              `;
      });
    };
  
  
    // Load all products data using AJAX
    ajaxButton.addEventListener("click", () => {
      const product = new XMLHttpRequest();
      product.open("GET", "https://dummyjson.com/products", true);
      product.onreadystatechange = function () {
        if (product.readyState === 4 && product.status === 200) {
          const data = JSON.parse(product.responseText);
          displayProductsData(data.products);
        }
      };
      product.send();
    });
  
});
