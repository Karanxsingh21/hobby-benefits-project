function addBenefit() {
  const input = document.getElementById("benefitInput");
  const text = input.value.trim();

  if (text === "") {
    alert("Please enter a benefit!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = text + " ";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.onclick = function () {
    li.style.opacity = "0";
    li.style.transform = "translateX(20px)";
    setTimeout(() => {
      li.remove();
    }, 300);
  };

  li.appendChild(deleteBtn);
  document.getElementById("benefitList").appendChild(li);

  input.value = "";
}

function handleSubmit(event) {
  event.preventDefault();

  alert("Form submitted successfully!");

  // Clear form after submission
  event.target.reset();
}

function updateDateTime() {
  const now = new Date();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];

  const day = days[now.getDay()];
  const date = String(now.getDate()).padStart(2, '0');
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const formatted = `${day}, ${date} ${month} ${year}, ${hours}:${minutes}:${seconds}`;

  document.getElementById("dateTime").textContent = formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime();
