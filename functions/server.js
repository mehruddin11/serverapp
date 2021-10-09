const expess = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');
const serverless_http= require('serverless-http')
const app = expess();
const router =expess.Router();
app.use(cors());
app.use(bodyParser.json());
const database = {
	users:[
	{

	id:1900,
	name:'beautiful_nature',
	date:new Date,
	img:'https://th.bing.com/th/id/OIP.X_65uIJkSF8bJl_zyU4twgHaEo?w=269&h=180&c=7&r=0&o=5&pid=1.7'

	},
	{

	id:19001,
	name:'sunset',
	date:new Date,
	img:'https://th.bing.com/th/id/OIP.OcdKodm_a3FiAYKlUAjFdgHaE8?w=252&h=180&c=7&r=0&o=5&pid=1.7'

	},
	{

	id:19002,
	name:'clean-road',
	date:new Date,
	img:'https://th.bing.com/th/id/OIP.OcdKodm_a3FiAYKlUAjFdgHaE8?w=252&h=180&c=7&r=0&o=5&pid=1.7'

	},
	{

	id:19003,
	name:'beautiful-birdge',
	date:new Date,
	img:'https://th.bing.com/th/id/OIP._h7s27M_cYLoJ7SzE7XRZQHaEK?w=300&h=180&c=7&r=0&o=5&pid=1.7'

	}
]
}
router.get('/', (req, res)=>{
	res.json(database.users)
});
app.use('/',router);
module.exports.handler =serverless_http(app);