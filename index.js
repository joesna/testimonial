let testimonial_data = [
    {
        name:"Tom & Jerry",
        image:"./Tom.JPG",
        text_content: "Tom and Jerry is a classic American animated series created in 1940 by William Hanna and Joseph Barbera."
    },
    {
        name:"Chotta Bheem",
        image:"./Chotta Bheem.JPG",
        text_content: "Chhota Bheem is a popular Indian animated television series created by Green Gold Animations."

    },
    {
        name:"Doraemon",
        image:"./dora.JPG",
        text_content: "Doraemon is a beloved Japanese manga and anime series created by Fujiko F. Fujio in 1969."
    }
]

let data = 0

let name = document.querySelector(".container_name")
let image = document.querySelector(".container_image")
let text_content = document.querySelector(".container_content")

function testimonial() {
    let current = testimonial_data[data]
    name.innerHTML = current.name
    image.src = current.image
    text_content.innerHTML = current.text_content
    data++

    if(data===testimonial_data.length){
        data = 0
    }
}

setInterval(() => {
    testimonial()},1000);

    testimonial()