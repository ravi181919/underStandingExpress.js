const requireExpress = require('express');
const app = requireExpress();
const hostName = 'localhost';
const PORT = 3000;


app.get('/', (req, res) => {
    res.send('Home Page!');
})

app.listen(PORT, () => {
    console.log(`Server is running at ${hostName}:  ${PORT}`);
})