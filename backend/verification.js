// importing bpassword hash for encryption and decrytion
const passwordHash = require('password-hash');

function verifyToken(req,res,next) {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]
	if(token == null){
		return res.status(401).json('No token provided')
	}
	if(passwordHash.verify(process.env.TOKEN, token)){
		next()
	}
	else{
		return res.status(403).json('Not Authorised')

	}
}


module.exports = {verifyToken} ;