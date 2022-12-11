const express = require('express');

const path = require('path');

const app = express();
const dirname = path.join(__dirname,'htmlpagefolder');

app.use(express.static(dirname));

app.listen(5000);

