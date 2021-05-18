const app = require("express")();
const PORT = 5000;

app.get("/joe", (req, res) => {
  res.status(200).send({
    joe: "mama",
  });
});

app.listen(PORT, () => console.log(`Listening on https://localhost:${PORT}/`));
