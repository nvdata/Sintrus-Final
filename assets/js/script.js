const formSintrus = document.querySelector(".container__header")
if (formSintrus) {


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

  //mascara
  function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
  }

  function fMascEx() {
    obj.value = masc(obj.value)
  }

  function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
  }

  // mostra senha
  const botaoMostra = document.querySelectorAll(".show__password");

  function mostraSenha(event) {
    let input = event.target.nextElementSibling
    let item = event.target

    input.type = input.type == 'text' ? 'password' : 'text';
    input.type == 'text' ? item.classList.add("mostra") : item.classList.remove("mostra");

  }
  botaoMostra.forEach((i) => {
    i.addEventListener("click", mostraSenha)
  })
}