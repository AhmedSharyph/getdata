document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("staffSelect");

  fetch("YOUR_GET_WEBAPP_URL")
    .then(res => res.json())
    .then(data => {
      data.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.name;
        select.appendChild(option);
      });
    });

  document.getElementById("staffForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const payload = {
      name: document.getElementById("name").value,
      nid: document.getElementById("nid").value,
      passport: document.getElementById("passport").value,
    };

    fetch("YOUR_POST_WEBAPP_URL", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.text())
    .then(msg => alert(msg));
  });
});
