const express = require('express');
require('dotenv').config()
require('./database/database')
const PORT = process.env.PORT || 2200;
const Departmentrouter = require('./routes/departmentRouter')
const Courserouter = require('./routes/coursesRouter')

const app = express()
app.use(express.json())
app.use(Departmentrouter)
app.use(Courserouter)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})