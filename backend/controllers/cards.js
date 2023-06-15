const Card = require("../models/Card");
const joi = require("joi");

module.exports = {
  allCards: async function (req, res, next) {
    try {
      const result = await Card.find();
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "error getting cards" });
    }
  },
  addCard: async function (req, res, next) {
    try {
      const scheme = joi.object({
        title: joi.string().required().min(2).max(30),
        subtitle: joi.string().required().min(2).max(30),
        description: joi.string().required().min(5).max(3000),
        phone: joi.string().required().min(6).max(250),
        email: joi.string().max(150).required().email(),
        web: joi.string().optional().allow(""),
        imageUrl: joi.string().optional().allow(""),
        imageAlt: joi.string().optional().allow(""),
        state: joi.string().optional().allow(""),
        country: joi.string().required(),
        city: joi.string().required(),
        street: joi.string().required(),
        houseNumber: joi.string().required(),
        zip: joi.string().optional().allow(""),
        cardNumber: joi.number(),
        userId: joi.string().optional().allow("")

      });

      const { error, value } = scheme.validate(req.body);

      if (error) {
        console.log(error.details[0].message);
        res.status(400).json({ error: "invalid data" });
        return;
      }

      const newCard = new Card(value);
      const result = await newCard.save();

      res.json({
        ...value,
        _id: result._id,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "Error adding card." + err });
    }
  },

   getOneCard: async function (req, res, next) {
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

            const result = await Card.findOne({ _id: value._id });
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: "error getting the card" });
        }
    },

  // myCards: async function (req, res, next) {
  //   try {
  //           const scheme = joi.object({
  //               _id: joi.string()
  //           });

  //           const { error, value } = scheme.validate({ _id: req.params._id });

  //           if (error) {
  //               console.log(error.details[0].message);
  //               res.status(400).json({ error: "invalid data" });
  //               return;
  //           }

  //           const result = await Card.find({ userId: value._id });
  //           res.json(result);
  //       }
  //       catch (err) {
  //           console.log(err);
  //           res.status(400).json({ error: "error getting your cards" });
  //       }
  // },
};
