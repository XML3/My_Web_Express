const errorHandler = (err, rqu, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong" });
};

export default errorHandler;
