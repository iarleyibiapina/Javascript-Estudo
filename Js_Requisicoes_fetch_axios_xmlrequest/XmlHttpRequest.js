function cep() {
  const url = "https://viacep.com.br/ws/13211413/json/";
  // o parametro é o cep "https://viacep.com.br/ws/${cep}/json/"
  const requisition = new XMLHttpRequest();

  requisition.open("GET", url, true);

  requisition.onload = () => {
    const response = JSON.parse(requisition.response);
    // para trabalhar com os dados, basta usar response.'atributo'
    console.log(response);
    console.log(response.logradouro);
  };

  requisition.send();
}

cep();
