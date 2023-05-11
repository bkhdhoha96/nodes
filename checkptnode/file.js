const express = require('express')
const file =express()
const port =3000

file.get('/',(req,res) => {
    res.send('Hello Node!')
})

file.listen(port,() =>{
    console.log('example app listening on port $ {port}')
})