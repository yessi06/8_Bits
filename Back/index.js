const server = require ('./src/app.js');
const {conn}= require ('./src/db.js');
// alter: true
conn.sync ({ force: false}).then(() =>{
    server.listen (3001, () => {
        console.log ('Server on port 3001')
    });
});

