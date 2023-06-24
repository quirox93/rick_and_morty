const getCharById = require("./../controllers/getCharById");
const login = require("./../controllers/login");
const postUser = require("./../controllers/postUser");
const postFav = require("./../controllers/postFav");
const deleteFav = require("./../controllers/deleteFav");
const express = require("express");
const router = express.Router();

router.get("/characters/:id", getCharById);

router.get("/login", login);
router.post("/login", postUser);

router.post("/fav", postFav);

router.delete("/fav/:access/:id", deleteFav);

module.exports = router;
