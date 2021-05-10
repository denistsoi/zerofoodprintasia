export default async function handler(req, res) {


  // todo: send to airtable
  // await fetch("https://")
  await setTimeout(() => {
    res.status(200).json({ user: 'Ada Lovelace' })
  }, 2000)
}