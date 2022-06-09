const getCoffeeStoreById = async (req, res) => {
  const { id } = req.query;

  try {
    if (id) {
      res.json({ message: `Id is created ${id}` });
    } else {
      res.status(400);
      res.json({ message: "Id is missing" });
    }
  } catch (error) {
    res.status(500);
    res.json({ message: "Something went wrong", error });
  }
};

export default getCoffeeStoreById;
