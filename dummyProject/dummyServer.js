

import { createConnection } from "mysql2";
import express, { request, response } from 'express';
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


const connection = createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'cafe'
});

app.post('/getQuery', (request, response) => {

    const dataFromBody = [request.body.admno, request.body.userID, request.body.PIN];

    const queryString = `INSERT INTO tbl_stdLogin (admno, uid, pass) VALUES ('${dataFromBody[0]}', '${dataFromBody[1]}', '${dataFromBody[2]}');`
    connection.query(queryString);
    
});


// app.get('/dummy', (request, response) => {
//     connection.query('select * from tbl_stdLogin', (error, result) => {
//         // console.log(result);
//         return response.json(result)
//     })
// })

app.listen(8080, () => {
    console.log("Listening")
})
export default connection;