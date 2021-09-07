const  router = require("express").Router();

const { rawListeners } = require("../app");
const Celeb = require("../models/celeb.model");

router.get("/celebs", async (req,res)=>{
    const celebs = await Celeb.find();
    console.log(celebs);
    res.render("celebrities/index", {celebs});
});


router.get("/celebrities/new", (req,res)=>{
    res.render("celebrities/new");
});


router.post("/celebrities/new", async (req,res)=>{
    const {name, occupation, catchPhrase} = req.body;
    await Celeb.create({name, occupation, catchPhrase});
    res.render("celebrities/index");
});

router.get("/celebrities/:id", async (req, res)=>{

    const celeb = await Celeb.findById(req.params.id);
    console.log(celeb);
    res.render("celebrities/show",celeb);
});

router.post("/celebrities/:id/delete", async (req,res)=>{
    await Celeb.findByIdAndRemove(req.params.id);
    res.redirect("celebrities/index");
});

router.get("/celebrities/:id/edit", async (req,res)=>{

    const celeb = await Celeb.findById(req.params.id);

    res.render("celebrities/edit", celeb)

})

router.post( "/celebrities/:id/edit", async (req,res)=>{

const {name, occupation, catchPhrase} = req.body;

await Celeb.findByIdAndUpdate(req.params.id, {
    name,
    occupation,
    catchPhrase,
});
res.redirect(`/celebrities/${req.params.id}`);
});




module.exports = router;