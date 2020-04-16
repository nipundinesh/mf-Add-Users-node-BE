let fileName = './../usrs.json'
let users = require(fileName); 
var fs = require('fs');
let path = require('path');

class Service {

    constructor (){

    }


    getUsers(){
        console.log('In get USers function...');
        
        return new Promise((resolve, reject)=>{
            resolve(users);
        });
    }

    addUser(user){
        console.log('In add USers function...');
        console.log(JSON.stringify(user));
        return new Promise((resolve, reject)=>{

            users = [... users, user];

            let fileContentd = JSON.stringify(users);

           let filePath =  path.join(__dirname, fileName);
            
            console.log(fileContentd);
            fs.writeFile(filePath, fileContentd, err => {
                if (err) {
                  console.error(err)
                  return;
                }
                resolve(users);
                //file written successfully
              })
            // fs.writeFile(fileName, fileContentd, (err) => {
            //     if (err) throw err;
            //     console.log('Saved!');
            //     resolve(users);
            //   });
        });
    }

}

module.exports = new Service();