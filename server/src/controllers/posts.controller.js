import post from '../db/post.js'
import PROGRESSSTATUS from '../constants/constants.js';


const postsController = {};

postsController.get = (req, res) => {
  post.find()
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));

};

postsController.post = (req, res, next) => {

  const post = new post({
    post: req.body.post,
    progress: PROGRESSSTATUS[req.body.progress]
  });

  post.save()
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));

}

postsController.delete = (req, res, next) => {

  post.deleteOne({ _id: req.params.id })
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));

}


export default postsController;