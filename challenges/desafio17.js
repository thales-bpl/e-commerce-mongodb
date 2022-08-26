db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.count(),
});

db.resumoProdutos.find({}, { _id: 0, franquia: true, totalProdutos: true });
