const express = require('express')
//call ecpress function it will give  you an app object 
const app = express()
const port = 3000
const user=[{
  name:"utkarsh",
  kidney:[{
    healthy:false
  }]


}];

app.use(express.json());


app.get('/', function(req, res) {
  const johnkid=user[0].kidney;
  const totalkid=johnkid.length;
  let healthykid=0;
  for(let i=0; i<johnkid.length;i++){
    if(johnkid[i].healthy){
      healthykid++;
    }
  }
  const unheatykid=totalkid-healthykid;
  res.json({
    totalkid,
    healthykid,
    unheatykid,
   


  })
})
app.post("/",function(req,res){
  const ishealth = req.body.ishealthy;
  user[0].kidney.push({
    healthy:ishealth
  })
  res.json({
    msg:"Done!"
  })


})
app.put("/",function(req,res){
  for(let i=0; i<user[0].kidney.length;i++){
    user[0].kidney[i]=true;
  }
  res.json({});
})
app.delete("/",function(req,res){
  for(let i=0;i<user[0].kidney.length;i++){
    user[0].kidney[i].healthy=true;
  }
  res.json({
    msg:"done"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})