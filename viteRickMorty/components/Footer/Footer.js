import "./Footer.css";

const template = () => {
    return `
    <p>Copyright - J.R - 2023</p>
    `
}

export const printTemplate = () => {
    document.querySelector("footer").innerHTML = template();
}

