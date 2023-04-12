async function buscaEndereco(cep) {
    mensagemError.innerHTML = ""
    try {
        var consulta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consulta = await consulta.json()
        if (consulta.erro) {
            throw Error("Esse CEP não existe")
        }

        endereco.value = consulta.logradouro;
        cidade.value = consulta.localidade;
        estado.value = consulta.uf;
        complemento.value = consulta.complemento;
        bairro.value = consulta.bairro;

        console.log(consulta)

    } catch (erro) {
        mensagemError.innerHTML = '<p>CEP inválido! Tente novamente'
        endereco.value = "";
        cidade.value = "";
        estado.value = "";
        complemento.value = "";
        bairro.value = "";
    }
}   

var cep = document.querySelector('#cep')
var endereco = document.querySelector('#endereco')
var complemento = document.querySelector('#complemento')
var estado = document.querySelector('#estado')
var cidade = document.querySelector('#cidade')
var bairro = document.querySelector('#bairro')
var mensagemError = document.querySelector('#erro')

cep.addEventListener('focusout', () => buscaEndereco(cep.value))