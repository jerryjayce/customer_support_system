const {check, validationResult} = require('express-validator');
const ResponseHelper = require('../helpers/ResponseHelper');


exports.create_issue = [
    check('title')
        .not()
        .isEmpty()
        .withMessage('title should not be empty')
        .bail(),
    check('description')
        .not()
        .isEmpty()
        .withMessage('description should not be empty')
        .bail(),
    check('user_id')
        .trim()
        .not()
        .isEmpty()
        .withMessage('user_id should not be empty')
        .bail()
        .isNumeric()
        .withMessage('Invalid user_id')
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.errors[0].msg);
            return ResponseHelper.sendResponse(res, 422, [], errors.errors[0].msg);
        }
        next();
    },
];

exports.close_issue = [
    check('issue_id')
        .trim()
        .not()
        .isEmpty()
        .withMessage('issue_id should not be empty')
        .bail()
        .isNumeric()
        .withMessage('Invalid issue_id')
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.errors[0].msg);
            return ResponseHelper.sendResponse(res, 422, [], errors.errors[0].msg);
        }
        next();
    },
];


