//import json-server
const jsonServer = require('json-server')

//create server using create() method
const employeeServer = jsonServer.create()

//create a path/ route to db.json file
const router = jsonServer.router('db.json')

//create a middle ware
const middleware = jsonServer.defaults();

//add middle ware and router to mediaplayerServer

employeeServer.use(middleware);
employeeServer.use(router);

const PORT = 4600;

//run the mediaPlayerServer
employeeServer.listen(PORT,()=>{
    console.log(`employee server running on PORT ${PORT}`);
})
