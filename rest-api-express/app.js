const express = require('express');
const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log("Server Listening on PORT:", 3000);
});

app.get("/status", (request, response) => {
    const status = {
        "Status": "Running-"
    };
    response.send(status);
});