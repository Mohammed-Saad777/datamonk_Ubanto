const User = require('../model/userModal')

exports.createUser = (req, res) => {
    const { name, email } = req.body;
    if(!name) return res.status(400).json({msg: "Name is Required"})
    if(!email) return res.status(400).json({msg: "Email is Required"})

    User.create(name, email, (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(user);
    });
}

exports.getUser = (req, res) => {
    User.findAll((err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    User.update(id, name, email, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    User.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};