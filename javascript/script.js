const form = document.getElementById("userForm");
const userList = document.getElementById("userList");

// Load from localStorage if exists
let users = JSON.parse(localStorage.getItem("users")) || [];

const renderUsers = () => {
  userList.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} (${user.gender}) - ${user.hobbies.join(
      ", "
    )} - ${user.country}`;
    userList.appendChild(li);
  });
};

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const gender = form.gender.value;
  const country = form.country.value;
  const bio = form.bio.value.trim();

  const hobbies = Array.from(
    document.querySelectorAll('input[name="hobbies"]:checked')
  ).map((cb) => cb.value);

  // Check for duplicate name
  if (users.some((user) => user.name.toLowerCase() === name.toLowerCase())) {
    alert("User with this name already exists!");
    return;
  }

  const newUser = { name, gender, hobbies, country, bio };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers();

  form.reset();
});

// Initial render
renderUsers();
