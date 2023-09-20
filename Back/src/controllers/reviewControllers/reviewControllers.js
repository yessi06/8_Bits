const {Reviews} = require('../../db');

const getAllReviews = async ()=>{
    const reviews = await Reviews.findAll();
    return reviews;
}

const makeReview = async ( rating, reviewsText, userId, gameId )=>{
    const date = new Date(Date.now());
    const newReview = await Reviews.create({
        rating,
        reviewsText,
        userId,
        gameId
    });

console.log(newReview);
return newReview
};

const putReview =  async (id, changes)=>{
    const review = await Reviews.findByPk(id);
    review.set(changes)
    await review.save()
    return review;
};

const deleteReview = async (id)=>{
    await Reviews.destroy({
        where: {id}
    });
    return "Review Deleted";
}
module.exports ={makeReview, putReview, deleteReview, getAllReviews}