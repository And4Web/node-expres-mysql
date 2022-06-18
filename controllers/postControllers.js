const Post = require("../models/Post");

async function getAllPosts(req, res, next) {
  try {
    const [blog_posts] = await Post.findAll();
    res.status(200).json({
      count: blog_posts.length,
      blog_posts,
    });
  } catch (error) {
    next(error);
  }
}

async function createNewPost(req, res, next) {
  try {
    let { post_title, post_body } = req.body;
    let post = new Post(post_title, post_body);
    blog_post = post.save();

    res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
}

async function getPostById(req, res, next) {
  try {
    let post_id = req.params.id;
    let [post] = await Post.findById(post_id);
    res.status(200).json({ post });
  } catch (error) {
    next(error);
  }

  async function deletePostById(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  getAllPosts,
  createNewPost,
  getPostById,
};
