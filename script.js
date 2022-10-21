const inputs = document.querySelectorAll('input[type="text"]');

function trocaCep() {
  let cepChange = "";
  cepChange = inputs[0].value;
  buscaCep(cepChange);
}

async function buscaCep(cepRequest) {
  try {
    const dadosCep = await fetch(
      `https://viacep.com.br/ws/${cepRequest}/json/`
    );
    const dadosJSON = await dadosCep.json();

    const {
      uf: estado,
      localidade: cidade,
      bairro,
      logradouro: rua,
    } = dadosJSON;

    inputs[1].value = estado;
    inputs[2].value = cidade;
    inputs[3].value = bairro;
    inputs[4].value = rua;
  } catch (err) {
    console.log(err);
  }
}
inputs[0].addEventListener("change", trocaCep);
