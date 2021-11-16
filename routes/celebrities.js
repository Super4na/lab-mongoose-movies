const router = require("express").Router();
const Celebrity = require("../models/Celebrity-model");

router.get("/celebrities", async (req, res) => {
  try {
    const celebrities = await Celebrity.find();

    res.render("celebrities/index", { celebrities });
  } catch (e) {
    console.log("Error", e);
  }
});

router.get("/celebrities/new", async (req, res) => {
  try {
    const celebrities = await Celebrity.find();
    res.render("celebrities/new", { celebrities });
  } catch (e) {
    console.log("Error", e);
  }
});

router.post("/celebrities/new", async (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  try {
    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect("/celebrities");
  } catch (e) {
    console.log("Error", e);
  }
});

router.get("/celebrities/:id", async (req, res) => {
  try {
    const celebId = await Celebrity.findById(req.params.id);
    res.render("celebrities/show", celebId);
  } catch (e) {
    console.log("Error", e);
  }
});

router.get("/celebrities/:celebritiesId/edit", async (req, res) => {
  try {
    const celebrity = await Celebrity.findById(req.params.celebritiesId);

    res.render("celebrities/edit", celebrity);
  } catch (e) {
    console.log("Error", e);
  }
});

router.post("/celebrities/:celebritiesId/edit", async (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  try {
    await Celebrity.findByIdAndUpdate(req.params.celebritiesId, {
      name,
      occupation,
      catchPhrase,
    });
    res.redirect(`/celebrities/${req.params.celebritiesId}`);
  } catch (e) {
    console.log("Error", e);
  }
});

router.post("/celebrities/:celebritiesId/delete", async (req, res) => {
  try {
    await Celebrity.findByIdAndRemove(req.params.celebritiesId);
    res.redirect("/celebrities");
  } catch (e) {
    console.log("Error", e);
  }
});

module.exports = router;
