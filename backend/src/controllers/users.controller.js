const userCtrl = {};
const {encrypt , compare } = require('./handlebcrypt');

const User = require('../models/user');

userCtrl.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users)
}
userCtrl.createUser = async(req, res) => {
    const { username, password, identificacion, valIngresos, valEgresos } = req.body;
    const passwordhash = await encrypt(password) 
    const newUser = new User({
        username,
        password : passwordhash,
        identificacion,
        valIngresos,
        valEgresos
    });
    await newUser.save();
    res.json('Usuario creado')
}

userCtrl.logUser = async (req, res) => {

        const { password, identificacion} = req.body;
        const user = await User.findOne({ identificacion})
        const checkPassword = await compare(password, user.password)
        /* const tokenSession = await tokenSign(user) */
        if (checkPassword) {
            res.send({
                data: user
            })
            return
        }


        if (!checkPassword) {
            res.status(409) 
            res.send({
                error: 'Contraseña Invalida'
            })
            return
        }
}

userCtrl.updateUser = async(req, res) => {
    const { username, identificacion, valIngresos, valEgresos } = req.body;
    await User.findOneAndUpdate({identificacion: req.params.identificacion}, {
        username,
        identificacion,
        valIngresos,
        valEgresos
    });   
    res.json({message:'Usuario Actualizado'});
}

userCtrl.deleteUser = async (req, res) => {
    const { identificacion } = req.params;
    await User.findByIdAndDelete(identificacion);
    res.json('Usuario eliminado');
}
module.exports = userCtrl;