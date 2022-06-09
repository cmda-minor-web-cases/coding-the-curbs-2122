import {reservationsCollection} from "../../app.js";

export const checkVerifyRoute = async (req, res) => {
  const code = req.body.code

  reservationsCollection.find().toArray()
    .then((result) => {
      result.filter = (obj, predicate) =>
        Object.assign(...Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .map( key => ({ [key]: obj[key] }) ) )

      console.log(code)
      const filtered = result.filter(result, item => item.code === code)
      console.log(filtered)

      res.render('manage', {
        title: 'Manage your reservation',
        reservation: filtered[0],
      })
    })
}