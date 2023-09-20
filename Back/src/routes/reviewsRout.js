const {Router} = require ('express');
const {createReviewHandler, putReviewHandler, deleteReviewHandler, getReviewsHandler} = require('../handlers/reviewHandlers')

const reviewRouter = Router();

reviewRouter.get('/', getReviewsHandler);
reviewRouter.post('/', createReviewHandler);
reviewRouter.put('/:id', putReviewHandler);
reviewRouter.delete('/:id', deleteReviewHandler);


module.exports = reviewRouter;