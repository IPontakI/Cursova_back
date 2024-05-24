import NewsSchema from './newsShema.js'

export const getAll = async (req, res) => {
  try {
    const limit = req.params.limit
    const news = await NewsSchema.find().limit(limit)

    res.json(news)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'News getting failed' })
  }
}
