const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    /* .render gør så den går ind i views og henter den ejs fil som er beskrevet 'index' */
    res.render('index');
});

/* Exporterer routeren til fx server.js eller for andre js filer der skal bruge denne router */
module.exports = router;