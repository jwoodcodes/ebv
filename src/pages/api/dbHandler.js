// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "@/lib/mongodb";

const dbHandler = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("shopData");

    const data = await db.collection("shopData").find({}).toArray();
    res.json(data);
    console.log(data);
  } catch (e) {
    console.error(e);
  }
};

export default dbHandler;
