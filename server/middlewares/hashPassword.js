const bcrypt = require('bcrypt');
const CONSTANS = require('../configs/constans');

module.exports.hashPass = async (req, res, next) => {
    try {
        const { body, body: { password } } = req;

        req.passwordHash = await bcrypt.hash(password, CONSTANS.SALT_ROUNDS);

        delete body.password;

        next();
    } catch (error) {
        next(error);
    }
}