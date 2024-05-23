import { NextApiRequest, NextApiResponse } from "next";
import { generateOutputJson } from "../../../generate-output-json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    res.status(405).json({ error: "Method not allowed" });
  try {
    const outputJson = await generateOutputJson();
    res.status(200).json(outputJson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate output JSON" });
  }
}
