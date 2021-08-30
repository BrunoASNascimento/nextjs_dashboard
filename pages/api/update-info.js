import { connectToDatabase } from "../../util/mongodb";

export default async function updateTable(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const { db } = await connectToDatabase();
    const ObjectID = require("mongodb").ObjectId;

    const infoTableUpdated = await db
      .collection("next_front_table")
      .updateOne(
        { _id: ObjectID(req.body.id) },
        { $set: { allocation: req.body.allocation } }
      );

    res.json(infoTableUpdated);

    return;
  }
  res.status(404).json({ message: "Ainda não temos nada no GET." });
}
