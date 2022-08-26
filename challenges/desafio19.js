db.produtos.updateMany({}, { $pull: { ingredientes: "cebola" } });

db.produtos.find({}, { _id: 0, nome: true, ingredientes: true });
