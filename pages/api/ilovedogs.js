// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log({ req, res });
  const query = req.query.breed;
  res.status(200).json({ message: `I love ${query}` });
}
