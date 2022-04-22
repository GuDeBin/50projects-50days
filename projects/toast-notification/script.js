const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "哑巴吃黄连─有苦说不出",
  "猴子学走路—假惺惺",
  "精装茅台—好久",
  "秃子打伞—无法无天",
];

const types = ["info", "success", "error"];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}

function createNotification() {
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.classList.add(getRandomType());

  notification.innerText = getRandomMessage();

  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 4800);
}

button.addEventListener("click", () => createNotification());
