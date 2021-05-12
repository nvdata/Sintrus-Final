// const btn_login = document.getElementById('btn__intro-signin');
// const btn_cadastro = document.getElementById('btn__intro-signup');
// const formularioLogin = document.getElementById('telaLogin');
// const formularioCadastro = document.getElementById('telaCadastro');


// btn_login.addEventListener('click', function mostrarLogin(){
//   btn_cadastro.classList.remove('btn__ativo');
//   btn_login.classList.add('btn__ativo');
//   formularioLogin.style.display="block";
//   formularioCadastro.style.display="none";

// })

// btn_cadastro.addEventListener('click', function mostrarCadastro(){
//   btn_login.classList.remove('btn__ativo');
//   btn_cadastro.classList.add('btn__ativo');
//   formularioLogin.style.display="none";
//   formularioCadastro.style.display="block";

// })

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
})

// inputCPF.forEach((i) => {
//   i.addEventListener("keypress", ValidaCPF)
// })

function ValidaCPF() {
  var RegraValida = document.querySelector(".input__cpf").value;
  const containerInput = document.querySelector(".input__cpf-container")
  var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
  if (cpfValido.test(RegraValida) == true) {
    // alert("CPF Válido");
    containerInput.classList.add("cpf__valido")
    containerInput.classList.remove("cpf__invalido")
  } else {
    // alert("CPF Inválido");
    containerInput.classList.remove("cpf__valido")
    containerInput.classList.add("cpf__invalido")
  }
}

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