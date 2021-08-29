import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const infoTable = await db.collection("next_front_table").find({}).toArray();

  res.json(infoTable);
};
