'use strict';

const {Model, DataTypes} = require('sequelize');

// Definition of the Quiz model:
module.exports = (sequelize) => {
    class Post extends Model {
    }

    Post.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        sequelize
    }
    );

    return Post;
};
