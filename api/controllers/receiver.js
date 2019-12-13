const router = require('express').Router();

const { Waitlist, Item } = require('../models');
const passport = require('../middlewares/authentication');

// @route GET /api/receiver/
// @desc Just a message.
// @access Public
router.get('/', (req, res) => {
  res.json({ msg: 'receiver route OwO' });
});

// @route POST /api/receiver/waitlist/create
// @desc Inserts a new row into Waitlist table.
// @access Private 
router.post('/waitlist/create', passport.isAuthenticated(), (req, res) => {
  const itemId = req.body.itemId;
  const userId = req.user.id;
  const time = new Date(req.body.selectedSlot);
  
  Promise.all([
    Item.findAll({ where: { donatorId: userId } }), 
    Waitlist.findAll({ where: { receiverId: userId, itemId: itemId } })
  ])
    .then( results => {
      if(results[0].length > 0) {
        throw Error("You can't waitlist an item you already own!!!");
      } else if (results[1].length > 0) {
        throw Error("No duplicate entries!!!");
      }
      return Waitlist.create({
        message: req.body.message,
        receiverId: userId,
        itemId: itemId,
        time: time
      });
    })
    .then(result => { res.json(result) })
    .catch(err => { 
      res.status(400).json({ error: err});
    });
});

// @route GET /api/receiver/waitlist/waitlistable/item/:id
// @desc Checks if the user can waitlist the item
// @access Private 
router.get('/waitlist/waitlistable/item/:id', passport.isAuthenticated(), (req, res) => {
  const itemId = req.params.id;
  const userId = req.user.id;
  Promise.all([
    Item.findAll({ where: { donatorId: userId } }), 
    Waitlist.findAll({ where: { receiverId: userId, itemId: itemId } }),
    Item.findOne({ where: { id: itemId } })
  ])
    .then(results => {
      if(results[0].length > 0 || results[1].length > 0)
        res.json({ waitlistable : false, item: results[2] });
      else
        res.json({ waitlistable: true, item: results[2] });
    })
    .catch(err => { 
      res.status(404).json({ error: err });
    });
});

// @route GET /api/receiver/waitlist/
// @desc Retrieve all rows from waitlist that belong to this receiver.
// @access Private
router.get('/waitlist/', passport.isAuthenticated(), (req, res) => {
  Waitlist.findAll({ where: { receiverId: req.user.id }, include: [{ model: Item }] })
    .then(myWaitlist => { 
      res.json(myWaitlist);
    })
    .catch(error => { res.status(404).json({ error: error.stack }) });
});

module.exports = router;

// @route GET /api/receiver/pickuplist/
// @desc Retrieve all items that have receiverId == req.user.id
// @access Private
router.get('/pickuplist', passport.isAuthenticated(), (req, res) => {
  Item.findAll({ where: { receiverId: req.user.id } })
    .then(result => res.json(result))
    .catch(error => res.json(error));
});