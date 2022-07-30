require('dotenv').config();
const express = require('express');
const cors = require('cors');
const request = require('request');


const app = express();
app.use(cors({origin: true}));

apiData = [
	{
		email:process.env.EMAIL_1,
		api:process.env.API_1
	},
	{
		email:process.env.EMAIL_2,
		api:process.env.API_2
	}
];
country = `in`;
let idx = Math.floor((Math.random() * 1) + 1);
api = apiData[idx].api;


app.get('/news', cors(),function(req, res) {
	const agents = req.headers['user-agent'];
	var options = {
	  url: baseURL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api}`,
	  headers: {
	    'User-Agent': agents
	  }
	};

    request(options, function(error, response, body) {
        res.json(body);
    });
});

app.get('/news/search/:query', cors(),function(req, res) {
	const agents = req.headers['user-agent'];
	let query = req.params['query'];
	var options = {
	  url: `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${api}`,
	  headers: {
	    'User-Agent': agents
	  }
	};

    request(options, function(error, response, body) {
        res.json(body);
    });
});

PORT = process.env.PORT || 80;
app.listen(PORT);






