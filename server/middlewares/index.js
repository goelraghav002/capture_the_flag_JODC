import jwt from 'jsonwebtoken';

export const requireSignin = (req, res, next) => {
	if (req.headers.authorization) {
		const token = req.headers.authorization.split(' ')[1];
		const admin = jwt.verify(token, process.env.SECRET_KEY);
		req.admin = admin;
	} else {
		return res.status(500).json({ message: 'Authorization required' });
	}
	next();
};
