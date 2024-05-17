/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Función para cambiar la carta
window.cambiaCarta = () => {
  const cardElement = document.querySelector(".card");
  if (cardElement) {
    cardElement.className = "card " + generateRandomSuit();
    cardElement.querySelector(".number").innerHTML = generateRandomNumber();
    const suits = cardElement.querySelectorAll(".top-suit, .bottom-suit");
    const newSuit = getSuitSymbol(cardElement.className.split(" ")[1]);
    suits.forEach(suit => (suit.innerHTML = newSuit));
  }
};

// Función para obtener el símbolo de la carta
const getSuitSymbol = suitClass => {
  switch (suitClass) {
    case "diamond":
      return "&diams;";
    case "spade":
      return "&spades;";
    case "heart":
      return "&hearts;";
    case "club":
      return "&clubs;";
    default:
      return "";
  }
};

// Función para generar un número aleatorio
const generateRandomNumber = () => {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

// Función para generar un palo aleatorio
const generateRandomSuit = () => {
  const suits = ["diamond", "spade", "heart", "club"];
  const indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
};

window.onload = function() {
  document.getElementById("newButton").onclick = cambiaCarta;

  // Generar una carta aleatoria al cargar la página
  window.cambiaCarta();
};
