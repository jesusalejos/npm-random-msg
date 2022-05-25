const messages = [
  "oscar",
  "El Señor es mi Pastor",
  "Misericordia, hemos pecado",
  "Ana",
  "Nicolay",
  "Yesica",
  "Diego",
  "Laura",
  "You are the best"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };