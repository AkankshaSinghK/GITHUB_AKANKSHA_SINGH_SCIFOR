document.addEventListener("DOMContentLoaded", () => {
    
    const fetchButton = document.getElementById("fetchButton");
    const dataDisplay = document.getElementById("dataDisplay");

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

   // Load all users data using Fetch API
   fetchButton.addEventListener("click", () => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => displayUsersData(data.users))
      .catch((error) => console.error("Error:", error));
  });
});
