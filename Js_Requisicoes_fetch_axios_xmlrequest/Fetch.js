function cep() {
  const url = "https://viacep.com.br/ws/13211413/json/";

  fetch(url)
    //   then é um "caso dê certo"
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.logradouro);
    });
}

// enviando api como metodo 'post'

// É preciso definir um cabeçalho e o corpo, que vai ser os dados enviados
function metodoPost() {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      exemplo: "test",
    }),
  });
}

// cep();

// Fetch dois
// https://www.youtube.com/watch?v=BCSPrwu5aTo&list=PLFie3VxXISbV3k9NPr-wXlk6CU4ypOIBt&index=84

// endpoint = 'url' a ser buscada, ou o fim.
// url para teste =
// https://jsonplaceholder.typicode.com/posts

function posts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    // caso sucesso
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // passando por cada item
      data.forEach((value) => {
        // pegando titulo
        console.log(value.id);
        console.log(value.title);
        console.log(value.body);
      });
    })
    // caso falha
    .catch((error) => {
      console.log(error);
    });
}
posts();
