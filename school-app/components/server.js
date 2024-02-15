import express, { request, response } from 'express';
import cors from 'cors';
import connection from '../db.js';


const app = express();
app.use(cors())


setInterval(() => {
    connection.query(`select 1`);
}, 10000)

app.get('/studentList', (request, response) => {
    const queryString = `SELECT * FROM tbl_admission where session = "2023-2024" AND active = 1`;
    connection.query(queryString, (error, result) => {
        return response.json(result)
    })
})

app.get('/transportFee', (request, response) => {
    const queryString = `select admno, transportfee from tbl_stdfeemaster where session = '2023-2024'`
    connection.query(queryString, (error, result) => {
        return response.json(result)
    })
})

app.get('/destination', (request, response) => {
    const queryString = `select admno, destination from tbl_stdtransdetail`;
    connection.query(queryString, (error, result) => {
        return response.json(result)
    })
})

app.listen(8081, () => {
    console.log("listening");
})
