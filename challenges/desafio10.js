db.produtos.find(
  {
    valoresNutricionais: {
      $elemMatch: { tipo: "proteínas", percentual: { $gte: 30 } },
    },
  },
  { _id: 0, nome: true },
);
