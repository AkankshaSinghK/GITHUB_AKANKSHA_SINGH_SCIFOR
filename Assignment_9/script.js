document.addEventListener("DOMContentLoaded", () => {
  const ajaxButton = document.getElementById("ajaxButton");
  const fetchButton = document.getElementById("fetchButton");
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

  // Function to display all users data
  const displayUsersData = (users) => {
    dataDisplay.innerHTML = "<h2>All Users</h2>";
    users.forEach((user) => {
      dataDisplay.innerHTML += `
                <div>
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
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

  // Load all users data using Fetch API
  fetchButton.addEventListener("click", () => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => displayUsersData(data.users))
      .catch((error) => console.error("Error:", error));
  });
});
