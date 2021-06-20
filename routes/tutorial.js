const express = require('express');
const router = express.Router();
const TutorialController = require("../controllers/tutorial");


router.get('/', TutorialController.getTutoriales);

router.get('/:tutorialId', TutorialController.getTutorialById);

router.post('/add', TutorialController.addTutorial);

router.patch('/:tutorialId', TutorialController.updateTutorial);

router.delete('/:tutorialId', TutorialController.deleteTutorial);

router.get('/deleteAll', TutorialController.deleteAll);

module.exports = router;