const db = require("../config/db");

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  async save() {
    let date = new Date();
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    let createdAt = `${yyyy}-${mm}-${dd}`;

    let sql = `
    INSERT INTO blog_posts(post_title, post_body, post_createdAt) VALUES(
      '${this.title}', '${this.body}', '${createdAt}'
    )`;
    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM blog_posts;";
    return db.execute(sql);
  }
}

module.exports = Post;
