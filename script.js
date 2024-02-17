function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const numberRandom = document.querySelector(".number-random")

    console.log(min, max)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(result)

    numberRandom.innerHTML = result
    
}


