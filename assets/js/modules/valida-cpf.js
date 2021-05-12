const inputCPF = document.querySelectorAll(".input__cpf")
inputCPF.forEach((i) => {
    i.addEventListener("focusout", ValidaCPF)
    // console.log(i);
})

// inputCPF.forEach((i) => {
//   i.addEventListener("keypress", ValidaCPF)
// })

function ValidaCPF() {
    var RegraValida = this.value;
    const containerInput = this.parentElement
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if (cpfValido.test(RegraValida) == true) {

        containerInput.classList.add("cpf__valido")
        containerInput.classList.remove("cpf__invalido")
    } else {

        containerInput.classList.remove("cpf__valido")
        containerInput.classList.add("cpf__invalido")
    }
}