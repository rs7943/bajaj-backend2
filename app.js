const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && /^[a-zA-Z]+$/.test(item));
    const highestAlphabet = alphabets.length > 0 ? alphabets.reduce((prev, current) => {
        return current.toLowerCase() > prev.toLowerCase() ? current : prev;
    }) : null;

    res.json({
        "is_success": true,
        "user_id": "Relli_Nagasai_29042002",
        "email": "rs7943@srmist.edu.in",
        "roll_number": "RA2111028010099",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": highestAlphabet
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({ "operation_code": 1 });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
