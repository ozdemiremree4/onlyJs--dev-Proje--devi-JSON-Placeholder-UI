const jsonplaceholder_url = "https://jsonplaceholder.typicode.com";

const usesrs_wrapper = document.getElementById("users_wrapper");


async function getUsers() {
    const res = await fetch(jsonplaceholder_url + "/users");
    const data = await res.json();
    for (user of data) {
        users_wrapper.innerHTML += `<div class="col-4">
        <div class="card" style="width: 18rem; border-radius: 40px">
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <p class="card-text">${user.company.name}</p>
          <p class="card-text">${user.email}</p>
          <p class="card-text">${user.phone}</p>
          <p class="card-text">${user.address.city}</p>
          <p class="card-text">${user.address.street}</p>
          <p class="card-text">${user.address.suite}</p>
        </div>
      </div>
    </div>`;
    }
}



getUsers();