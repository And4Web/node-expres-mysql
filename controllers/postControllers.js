const Post = require("../models/Post");

async function getAllPosts(req, res, next) {
  await res.send("get all posts here.");
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
