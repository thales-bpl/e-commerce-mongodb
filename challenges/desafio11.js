db.produtos.find(
  { $nor: [{ nome: "Big Mac" }, { nome: "McChicken" }] },
  { _id: 0, nome: true, curtidas: true, vendidos: true },
);
