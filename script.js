function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const numberRandom = document.querySelector(".number-random")

    console.log(min, max)

    if (max > min + 19) {

        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        numberRandom.innerHTML = result

    } else {

        numberRandom.innerHTML = ("O Valor maximo tem que ser maior que " + (min + 20) )
        /*alert("O Valor maximo tem que ser maior que " + min)*/
    }


}




