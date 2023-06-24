const  User  = require('../models/User');
const  Card  = require('../models/Card');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/dev');





module.exports = {
    allUsers: async function (req, res, next) {
    try {
      const result = await User.find();
      res.json(result);
      console.log(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "error getting users" });
    }
  },
  signup: async function (req, res, next) {
        const schema = joi.object({
            admin: joi.boolean(),
            firstName: joi.string().required().min(2).max(100),
            middleName: joi.string().optional().allow(''),
             lastName: joi.string().required().min(2).max(100),
             phone: joi.string().required().min(6).max(250),
            email: joi.string().max(150).required().email(),
            password: joi.string().min(8).max(200).required(),
            imageUrl: joi.string().optional().allow(''),
            imageAlt: joi.string().optional().allow(''),
            state: joi.string().optional().allow(''),
            country: joi.string().required(),
            city: joi.string().required(),
            street: joi.string().required(),
            houseNumber: joi.string().required(),
            zip: joi.string().optional().allow(''),
            business: joi.boolean()
        });

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.log(error.details[0].message);
            res.status(400).json({ error: error.details[0].message });
            return;
        }

        try {
            const user = await User.findOne({ email: value.email });
            if (user) {
                return res.status(400).json({ error: "User already registered." });
            }

            const hash = await bcrypt.hash(value.password, 10);

            const newUser = new User({
                firstName: value.firstName,
                middleName: value.middleName,
                lastName: value.lastName,
                middleName: value.middleName,
                phone: value.phone,
                email: value.email,
                password: hash,
                imageUrl: value.imageUrl,
                imageAlt: value.imageAlt,
                state: value.state,
                country: value.country,
                city: value.city,
                street: value.street,
                houseNumber: value.houseNumber,
                zip: value.zip,
                business: value.business,
            });

            await newUser.save();

            res.json({
                _id: newUser._id,
                admin: newUser.admin,
                firstName: newUser.firstName,
                middleName: newUser.middleName,
                lastName: newUser.lastName,
                phone: newUser.phone,
                email: newUser.email,
                imageUrl: newUser.imageUrl,
                state: newUser.state,
                country: newUser.country,
                city: newUser.city,
                street: newUser.street,
                houseNumber: newUser.houseNumber,
                zip: newUser.zip,
                business: newUser.business
            })
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: 'error signing up new user' + err.message });
        }
    },
    login: async function (req, res, next) {

        const schema = joi.object({
            email: joi.string().required().max(150).email(),
            password: joi.string().required().min(8).max(200),
        });

        const { error, value } = schema.validate(req.body);

        if (error) {
            console.log(error.details[0].message);
            res.status(401).send('Unauthorized');
            return;
        }

        try {
            const user = await User.findOne({ email: value.email });
            if (!user) throw Error;
            const validPassword = await bcrypt.compare(value.password, user.password);
            if (!validPassword) throw 'Invalid password';

            const param = { email: value.email };
            const token = jwt.sign(param, config.jwt_token, { expiresIn: '72800s' });

            res.json({
                token: token,
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                admin: user.admin,
                business: user.business
            });
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: 'Log in details do not match'  });
        }
    },
    delete: async function (req, res, next) {
    try {
      const scheme = joi.object({
        _id: joi.string().required(),
      });

      const { error, value } = scheme.validate({ _id: req.params.id });

      if (error) {
        console.log(error.details[0].message);
        res.status(400).json({ error: "invalid data" });
        return;
      }

      const deleted = await User.findOne({ _id: value._id });

      await User.deleteOne(value).exec();
      res.json(deleted);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "error delete vacation" });
    }
  },

    
}