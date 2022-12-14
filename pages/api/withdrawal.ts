import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(400).json({});
    return;
  }
  const fetchRes = await fetch("http://localhost:7269/api/Withdrawal", {
    method: "GET",
  });
  res.status(200).send(await fetchRes.text());
};

export default handler;
