export const addTimeRoute = async (req, res) =>{
  res.render('index', {
    title: 'Coding the Curbs',
    time: req.body.time
  })
  console.log(req.body.time);
}