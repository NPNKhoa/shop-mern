export default function logError(err, res) {
  console.log(err);
  res.status(500).json({
    message: 'Internal server error!',
  });
}
