const csv = require("csvtojson");
const fs = require('fs');
csv()
.fromFile(process.argv[2])
.then((jsonObj)=>{
    //console.log(jsonObj)
    fs.writeFile('jsonFile.json',JSON.stringify(jsonObj),(err)=>{
        console.log(err)
    })
})

const jsonArray= csv().fromFile(process.argv[2]);