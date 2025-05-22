const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud'
})

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM food';
    db.query(sql, (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });
}
);
app.post('/create', (req, res) => {
    const sql = 'INSERT INTO `food` (`name`,`password`) VALUES (?)';
    const values = [
        req.body.name,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });
}
);

app.put('/update/:id', (req, res) => {
    const sql = 'UPDATE `food` SET `name` = ?, `password` = ? WHERE `id` = ?';
    const values = [
        req.body.name,
        req.body.password
    ];
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });
}
);

app.delete('/food/:id', (req, res) => {
    const sql = 'DELETE FROM `food` WHERE `id` = ?';
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json("error");
        return res.json(data);
    });
}
);

app .listen(8081, () => {
    console.log('Server is running on port 8081');
    }
);