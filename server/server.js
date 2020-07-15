const axios = require('axios');
const express = require('express');
const session = require('session');
const app = express();

app.get('/products', (req, res) =>
{
    //const queryInput = 'meat'
    axios(
        `https://api.spoonacular.com/food/products/search?query=pizza&apiKey=5c87fc7501454e29ad5a56bb45d581bd`
    )

        .then((response) =>
        {
            res.send(response.data.products[ 0 ])
            //console.log(response.data)
        })
        .catch((error) =>
        {
            console.log(error)
        })
})

// Hosting on port 5000
const port = '5000';
app.listen(port, function ()
{
    console.log('Listening on port ' + port)
});