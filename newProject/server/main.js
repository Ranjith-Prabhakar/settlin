import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { Post } from '../imports/api/post';

Meteor.startup(async () => {
  try {
    // Create a new Post instance
    const post = new Post();
    post.title = 'Sample title';
    post.publishedAt = new Date();

    // Save the post
    if (Meteor.isServer) {
      await post.save(); // Ensure this is called in a server context
    }

    console.log('Post saved successfully:', post);
  } catch (error) {
    console.error('Error saving post:', error);
  }
});
