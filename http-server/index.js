const http = require ("http");
const fs =require("fs");

console.log("dfbdfb");

let homecontent="";
let projectcontent = "";
let registrationcontent ="";

fs.readFile("home.html",(err,home)=>{
    if (err) {
        throw err;
        
    }
    homecontent=home;
});

fs.readFile("project.html",(err,project)=>{
    if (err) {
        throw err;
        
    }
    projectcontent=project;
});

fs.readFile("registration.html",(err,registration)=>{
    if (err) {
        throw err;
        
    }
    registrationcontent=registration;
});

const args = require("minimist")(process.argv);
const port = args.port;
http.createServer((request,response)=>{

    let url =request.url;
    response.writeHeader(200,{"Content-type":"text/html"});
    switch (url) {
        case "/project":
            response.write(projectcontent);
            response.end();
            break;
        case "/registration":
            response.write(registrationcontent);
            response.end();
            break;
    
        default:
            response.write(homecontent);
            response.end();
            break;
    }
})
.listen(port);
