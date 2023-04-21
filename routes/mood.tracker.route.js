const express = require('express');
var router = express();
const create = require('../models/mood.tracker.model');
const view = require('../models/mood.tracker.model');
const update = require('../models/mood.tracker.model');
const remove = require('../models/mood.tracker.model');
const bodyparser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

router.use(bodyparser.json());

router.post('/create', create.create);

router.get('/', view.view);
router.patch('/:id', update.update);
router.delete('/delete/:id', remove.remove);

module.exports = router;
