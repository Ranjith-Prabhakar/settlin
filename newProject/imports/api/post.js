import { Class } from 'meteor/jagi:astronomy';

const Posts = new Mongo.Collection('posts');

export const Post = Class.create({
    name: 'Post',
    collection: Posts,
    fields: {
      title: String,
      publishedAt: Date
    }
  });