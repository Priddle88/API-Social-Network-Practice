const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    UpdateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/user/userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/user/userId/friends
router.route('/:userId/friends').post(addFriend);

// /api/user/userId/friends/friendsId
router.route('/:userId/friends/friendsId').delete(removeFriend);

module.exports = router;