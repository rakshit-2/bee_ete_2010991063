import {executeDBchildOperations} from './connect/db_child.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { db_port } from './connect/getENV.js';


const app=express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))







// async function listDatabases(client){
//     databasesList=await client.db().admin().listDatabases();
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };







// async function getListing(client, props){
//     const result = await client.db("dark_base").collection("test").findOne(props);
//     console.log(`result here: ${result.id}`);
// }



executeDBchildOperations().then(()=>{
    app.listen(db_port,()=>{
        console.log(`listning on port ${db_port}`);
    });
})

















// npm run server
