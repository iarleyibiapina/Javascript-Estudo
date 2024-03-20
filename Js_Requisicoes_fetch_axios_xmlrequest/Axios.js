// https://github.com/axios/axios
function cep() {
  const url = "https://viacep.com.br/ws/13211413/json/";

  axios
    .get(url)
    .then((response) => {
      const responseData = response.data;
      //   diferencial de retornar mais dados alem da resposta em si
      console.log(response);
      console.log(responseData);
      console.log(responseData.logradouro);
    })
    .catch((error) => {
      console.log(error);
    });
}

cep();
