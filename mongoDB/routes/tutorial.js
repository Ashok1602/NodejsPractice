const express = require('express');
const router = express.Router();
const TutorialController = require("../controllers/tutorial");
const checkAuth = require('../../middleware/check-auth');

router.get('/', checkAuth, TutorialController.getTutoriales);

router.get('/:tutorialId',checkAuth, TutorialController.getTutorialById);

router.get('/getTutorialByTitle/:title', TutorialController.getTutorialByTitle);

router.post('/add',checkAuth,  TutorialController.addTutorial);

router.patch('/:tutorialId', checkAuth,  TutorialController.updateTutorial);

router.delete('/:tutorialId', checkAuth,  TutorialController.deleteTutorial);

router.get('/deleteAll', checkAuth, TutorialController.deleteAll);

module.exports = router;