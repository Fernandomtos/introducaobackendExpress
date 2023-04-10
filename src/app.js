const express = require("express");

const app = express();
app.use(express.json());

app.post("/users", (request, response) => {
  console.log(request.body);

  //criando novo usuário

  const newUser = {
    id: 1,
    ...request.body,
  };

  return response.status(201).json(newUser);
});

app.listen(3000, () => {
  console.log("Server is running!");
});
