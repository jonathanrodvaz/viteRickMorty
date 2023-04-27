import "./Header.css"

const template = () => {
    return `
    <img src="https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" alt="Rick & Morty Logo"/>
    `
}

export const printTemplate = () => {
    document.querySelector("header").innerHTML = template()

}
