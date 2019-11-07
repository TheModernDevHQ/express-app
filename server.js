const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const helmet = require('helmet');

app.use(helmet());

app.get('/', (req, res) => res.send('My Express app'));

app.listen(PORT, () => console.log(`> Ready on port ${PORT}...`));
