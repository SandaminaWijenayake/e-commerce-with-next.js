// app/api/insert/route.js

import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("Sandamina");
    const collection = db.collection("products");

    const newData = {
      name: "Sample Item",
      description: "This is a test entry",
      createdAt: new Date(),
    };

    const result = await collection.insertOne(newData);

    return Response.json({
      message: "Data inserted!",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Insert failed:", error);
    return Response.json(
      { message: "Error inserting data", error },
      { status: 500 }
    );
  }
}
