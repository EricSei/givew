const router = require('express').Router();

const passport = require('../middlewares/authentication');
const { Item, Waitlist } = require('../models');

// @route GET /api/donator/
// @desc Simple message.
// @access Public
router.get('/', (req, res) => {
  res.json({ msg: 'receiver route OwO' });
});

// @route GET /api/donator/bidlist/
// @desc Retrieve all items that the donator donated.
// @access Private
router.get('/bidlist/', passport.isAuthenticated(), (req, res) => {
  Item.findAll({ where: { donatorId: req.user.id, receiverId: null } })
    .then(result => { res.json(result) })
    .catch(error => { res.status(400).json({ error }) });
});

// @route GET /api/donator/bidlist/item/:id
// @desc Retrieve all messages of a single item.
// @access Private
router.get('/bidlist/item/:id', passport.isAuthenticated(), (req, res) => {
  Waitlist.findAll({ where: { itemId: req.params.id } })
    .then(result => res.json(result))
    .catch(error => res.status(400).json({ error }));
});

// @route PUT /api/donator/bidlist/item/decline/:id
// @desc Decline a receiver's request.
// @access Private
router.put('/bidlist/item/decline/:id', passport.isAuthenticated(), (req, res) => {
  // Remove a waitlist row where receiverId == req.body.receiverId.
  Waitlist.destroy({ where: { itemId: req.params.id, receiverId: req.body.receiverId } })
    .then(result => res.json(result))
    .catch(err => res.status(400).json({ error: err }));
});

// @route PUT /api/donator/bidlist/item/accept/:id
// @desc Accept a receiver's request.
// @access Private
router.put('/bidlist/item/accept/:id', passport.isAuthenticated(), async (req, res) => {
  // 1. Fill in receiverId for the item.
  // 2. Remove all messages for this item in Waitlist.
  const foundItem = await Item.findOne({ where: { id: req.params.id } });
  foundItem.update({ receiverId: req.body.receiverId, timeSlots: [new Date(req.body.time)] });

  await Waitlist.destroy({ where: { itemId: req.params.id } });

  res.json({ sucess: true });
});

module.exports = router;