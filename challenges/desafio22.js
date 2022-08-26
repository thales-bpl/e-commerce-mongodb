db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });

db.produtos.updateOne({}, { $inc: { "vendasPorDia.3": 60 } });

db.produtos.updateMany({ tags: "bovino" }, { $inc: { "vendasPorDia.6": 120 } });

db.produtos.find({}, { nome: true, vendasPorDia: true, _id: 0 });
