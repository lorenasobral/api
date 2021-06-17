// This is a JavaScript file

window.onload = function(){
  const buscar = document.querySelector("#buscar");
  const cep = document.querySelector("#cep");

  const opcao = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  buscar.addEventListener("click", function(){
    
    fetch('viacep.com.br/${ cep.value }/json/')
    .then(Response =>{response.json()
      .then(data => {
        document.querySelector("#cep").value = data['uf'];
        document.querySelector("#cidade").value = data['localidade'];
        document.querySelector("#bairro").value = data['bairro'];
        document.querySelector("#rua").value = data['logradouro'];
      })
    })
  });
}