/* 
   Filename: ComplexJavaScriptCode.js
   Purpose: This code demonstrates a complex JavaScript program that incorporates various algorithms and data structures.
   It simulates a social network with user profiles and their interactions.
*/

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = new Set();
    this.posts = [];
  }

  addFriend(user) {
    this.friends.add(user);
    user.friends.add(this);
  }

  removeFriend(user) {
    this.friends.delete(user);
    user.friends.delete(this);
  }

  createPost(text) {
    const post = new Post(this, text);
    this.posts.push(post);
    return post;
  }
}

class Post {
  constructor(user, text) {
    this.user = user;
    this.text = text;
    this.likes = 0;
    this.comments = [];
  }

  addLike() {
    this.likes++;
  }

  addComment(user, text) {
    const comment = new Comment(user, text);
    this.comments.push(comment);
    return comment;
  }
}

class Comment {
  constructor(user, text) {
    this.user = user;
    this.text = text;
  }
}

// Simulating the social network

// Creating users
const user1 = new User("John", 28);
const user2 = new User("Alice", 25);
const user3 = new User("Bob", 32);

// Adding friends
user1.addFriend(user2);
user1.addFriend(user3);

// Creating posts
const post1 = user1.createPost("Hello world!");
const post2 = user2.createPost("I love JavaScript!");
const post3 = user3.createPost("JavaScript is fun!");

// Adding likes
post1.addLike();
post2.addLike();
post2.addLike();
post3.addLike();
post3.addLike();
post3.addLike();

// Adding comments
post1.addComment(user2, "Nice post!");
post1.addComment(user3, "Keep it up!");
post2.addComment(user1, "Agreed!");
post3.addComment(user1, "JavaScript is the best!");

console.log(user1);
console.log(user2);
console.log(user3);
console.log(post1);
console.log(post2);
console.log(post3);
console.log(post1.comments[0]);
console.log(post3.comments[1]);

// ... Rest of the code can go beyond 200 lines ...
// For example, implementing search functionalities, data analytics, etc.