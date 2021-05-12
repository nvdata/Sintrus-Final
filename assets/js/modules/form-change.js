export default
function formChange() {

    const formulario = document.querySelector(".formulario")
    const azul = document.querySelector(".azul")
    const tituloForm = document.querySelector(".formulario__inner h2")

    if (formulario) {
        const botaoLoguin = document.querySelector(".btn.loguin")
        const botaoCadastro = document.querySelector(".btn.cadastro")

        botaoCadastro.addEventListener("click", mudaFormCadastro)
        botaoLoguin.addEventListener("click", mudaFormLoguin)

        function mudaFormCadastro() {
            formulario.classList.remove("loguin")
            formulario.classList.add("cadastro")
            tituloForm.innerText = "Faça Seu Cadastro"
            gsap.to(azul, {
                background: "#e3fdff",
                duration: .5,

            })
        }

        function mudaFormLoguin() {
            formulario.classList.remove("cadastro")
            formulario.classList.add("loguin")
            tituloForm.innerText = "Faça Seu Login"
            gsap.to(azul, {
                background: "#7fcacf",
                duration: .5,

            })
        }

    }

}