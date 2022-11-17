const {Router} = require("express")
const {getAngryBirds, getAngryBirdsByID, deleteAngryBirdsByID, addAngryBirds, updateAngryBirdsByUsuario} = require("../controllers/AngryBirds")
const router = Router()

//http://localhost:4000/api/v1/AngryBirds

/// GET ///
router.get("/", getAngryBirds)
router.get("/id/:id", getAngryBirdsByID)

/// POST ///
router.post("/", addAngryBirds)

/// PUT ///
router.put("/", updateAngryBirdsByUsuario)

/// DELETE ///
router.delete("/", deleteAngryBirdsByID)

module.exports = router