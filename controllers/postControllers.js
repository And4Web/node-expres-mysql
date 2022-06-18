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

async function createNewPost(req, res) {
  await res.send("create new post here.");
}

async function getPostById(req, res) {
  await res.send("get all posts using id here.");
}

module.exports = {
  getAllPosts,
  createNewPost,
  getPostById,
};
