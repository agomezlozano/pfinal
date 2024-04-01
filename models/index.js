// Load ORM
const Sequelize = require('sequelize');

// Environment variable to define the URL of the data base to use.
// To use SQLite data base:
//    DATABASE_URL = sqlite:quiz.sqlite
const url = process.env.DATABASE_URL || "sqlite:quiz.sqlite";

const sequelize = new Sequelize(url);

const Post = require('./post')(sequelize);
const Attachment = require('./attachment')(sequelize);

// Relation 1-to-1 between Quiz and Attachment
Attachment.hasOne(Post, {as: 'post', foreignKey: 'attachmentId'});
Post.belongsTo(Attachment, {as: 'attachment', foreignKey: 'attachmentId'});

module.exports = sequelize;
