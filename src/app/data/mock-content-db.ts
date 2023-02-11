import { IContent } from "../models/icontent";

export const CONTENT: IContent[]= [{
    id: 1,
    name: "Bulbasaur",
    description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    author: "Ben",
    imgSrc: "assets/imgs/001Bulbasaur.png", 
    type: "Grass/Poison",
    tags: ["Grass", "Poison", "Kanto", "Starter"]
  },
  {
    id: 4,
    name: "Charmander",
    description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    author: "Ben",
    imgSrc: "assets/imgs/004Charmander.png", 
    type: "Fire",
    tags: ["Fire", "Kanto", "Starter"]
  },
  {
    id: 7,
    name: "Squirtle",
    description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    author: "Ben",
    imgSrc: "assets/imgs/007Squirtle.png", 
    type: "Water",
    tags: ["Water", "Kanto", "Starter"]
  },
  {
    id: 25,
    name: "Pikachu",
    description: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
    author: "Ben",
    imgSrc: "assets/imgs/025Pikachu.png", 
    type: "Electric"
  }];

  export const INVALIDPOKMEON: IContent = {
    id: -1,
    name: "Invalid Id",
    author: "",
    type: "error",
    imgSrc: "assets/imgs/error.png"
  }