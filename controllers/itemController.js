// activity controller

const express = require("express");
const router = express.Router();

const Item = require("./../models/Item");

//returns single activity by id
router.get("/:id", (req, res) => {
  Item.findById(req.params.id).then((item) => {
      res.json({
          status: 200,
          item: item,
      });
  });
});

//creates a new activity
router.post("/", (req, res) => {
  Item.create(req.body).then((item) =>
    res.json({
      status: 200,
      item: item,
    })
  );
});

//updates an activity
router.put("/:id", (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (item) => {
      res.json({
        status: 200,
        item: item,
      });
    }
  );
});

//deletes an activity
router.delete("/:id", (req, res) => {
  Item.findByIdAndDelete(req.params.id).then(() =>
    res.json(`deleted`)
  );
});

//returns all activities- currently not being used, plan to add in future versions.
router.get("/", (req, res) => {
  Item.find({}).then((item) => {
      res.json({
          status: 200,
          item: item,
      });
  });
});

module.exports = router;