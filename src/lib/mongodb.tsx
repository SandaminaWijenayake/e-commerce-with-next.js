import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};
const client = new MongoClient(uri, options);
export const clientPromise = client.connect();

export interface Product {
  _id?: ObjectId;
  id: number;
  name: string;
  brand: string;
  size: string;
  occasion: string;
  color: string;
  saleDiscount: number;
  price: number;
  rating: number;
  image: string;
  description?: string;
}

export async function getProductById(id: string): Promise<Product | null> {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB_NAME);
  const query = { id: Number(id) };
  return db.collection<Product>("products").findOne(query);
}
export async function getProducts(): Promise<Product[]> {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB_NAME);
  return db.collection<Product>("products").find({}).toArray();
}
