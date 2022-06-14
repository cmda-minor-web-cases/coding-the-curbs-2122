export const mapRoute = async (req, res) =>{
  res.render('map', {
    title: 'Wanneer wil je reserveren?',
    time: req.body.time
  })
}