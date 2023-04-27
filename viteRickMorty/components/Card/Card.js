import "./Card.css";

export const Card = (character) => {
    return `
    <img src=${character.image} alt=${character.name}/>
    <h3>${character.name}</h3>
    <h4>${character.species}</h4>
    <h5>${character.status}</h5>
    `
}