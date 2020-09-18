const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../Middleware/auth");
const Post = require("../../Model/Post");
const Profile = require("../../Model/Profile");
const UserPosko = require("../../Model/UserPosko");

// @route   Get api/post
// #desc    create a post
// @access  Private

router.post(
  "/",
  [auth, [check("text", "text harus diisi").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await UserPosko.findById(req.user.id).select("-password");
      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });
      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "server error" });
    }
  }
);

// @route   Get api/post
// #desc    get all post
// @access  Private

router.get("/", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const posts = await Post.find().sort({ date: -1 });

    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "server error" });
  }
});

// @route   Get api/post/:id
// #desc    get post by ID
// @access  Private

router.get("/:id", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const post = await Post.findById(req.params.id);

    // apakah post ID ada?
    if (!post) {
      return res.status(404).json({ msg: "posting tidak ditemukan" });
    }
    res.json(post);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "posting tidak ditemukan" });
    }
    console.error(err.message);
    res.status(500).json({ msg: "server error" });
  }
});

// @route   DELETE api/post/:id
// #desc    delete post by id
// @access  Private

router.delete("/:id", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const post = await Post.findById(req.params.id);

    // apakah post ID ada?
    if (!post) {
      return res.status(404).json({ msg: "posting tidak ditemukan" });
    }

    // cek apakah post milik akun yg sedang digunakan
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User tidak diizinkan" });
    }

    await post.remove();
    res.send({ msg: "posting berhasil dihapus" });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "postingan tidak ditemukan" });
    }
    console.error(err.message);
    res.status(500).json({ msg: "server error" });
  }
});

// @route   PUT api/post/like/:id
// #desc    like a post
// @access  Private

router.put("/like/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // cek if the post sudah di like
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: "anda sudah menyukai postingan ini" });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route   PUT api/post/unlike/:id
// #desc    unlike a post
// @access  Private

router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // cek if the post sudah di like
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "anda belum menyukai postingan ini" });
    }

    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route   Post api/post/comment/:id
// #desc    create a comment by post ID
// @access  Private

router.post(
  "/comment/:id",
  [auth, [check("text", "text harus diisi").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await UserPosko.findById(req.user.id).select("-password"); // get user login
      const post = await Post.findById(req.params.id); //get the post by it's id
      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };

      post.comments.unshift(newComment); // insert comment to post.comment
      await post.save();
      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "server error" });
    }
  }
);

// @route   GET api/post/comment/:id/comment_id
// #desc    get a comment by id
// @access  Private

router.get("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id); //get the post by it's id
    // pull out comment
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    // apakah comentar ada?
    if (!comment) {
      return res.status(404).json({ msg: "komentar tidak ditemukan" });
    }

    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "server error" });
  }
});

// @route   DELETE api/post/comment/:id/comment_id
// #desc    delete comment by id
// @access  Private

router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const post = await Post.findById(req.params.id); //get the post by it's id
    // pull out comment
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    // apakah comentar ada?
    if (!comment) {
      return res.status(404).json({ msg: "komentar tidak ditemukan" });
    }

    // cek apakah comment milik akun yg sedang digunakan
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User tidak diizinkan" });
    }

    const removeIndex = post.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);
    res.json(comment);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "komentar tidak ditemukan" });
    }
    console.error(err.message);
    res.status(500).json({ msg: "server error" });
  }
});

module.exports = router;
