const {makeReview, getAllReviews, putReview, deleteReview}= require('../controllers/reviewControllers/reviewControllers');

const getReviewsHandler= async (req, res)=>{
    try{
        const allReviews = await getAllReviews();
        res.status(200).json(allReviews);

    }catch(error){
        res.status(400).json({error: error.message});
    }
}
const createReviewHandler = async (req, res)=>{
    try{
        const {rating, reviewsText, userId, gameId } = req.body;
        const newReview = await makeReview(rating, reviewsText, userId, gameId,);
        res.status(201).json(newReview)
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

const putReviewHandler = async (req, res)=>{

    try{
        const changes = req.body;
        const {id} = req.params;
        const reviewModificated = await putReview(id, changes);
        res.status(202).json(reviewModificated)
    }catch(error){
        res.status(500).json({error: error.message})
    }  

};

const deleteReviewHandler = async(req, res)=>{
    try{
        const {id} = req.params;
        await deleteReview(id);
        res.status(204).end();

    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports = {createReviewHandler, putReviewHandler, deleteReviewHandler, getReviewsHandler}