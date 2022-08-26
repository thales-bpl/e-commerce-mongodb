db.produtos.find(
  { ingredientes: "picles" },
  { _id: 0, nome: true, ingredientes: true, valoresNutricionais: { $slice: 3 } },
);
