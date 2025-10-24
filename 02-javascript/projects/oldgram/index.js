const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: "69,420"
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: "10,101"
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: "670,839"
  }
];

// Track which post is being shown
let currentIndex = 0;

// Select DOM elements
const artistPfp = document.querySelector(".artist-pfp");
const artistName = document.querySelector(".profile-info h1");
const artistLocation = document.querySelector(".profile-info p");
const portrait = document.querySelector(".portrait");
const likesEl = document.querySelector("section h2:first-of-type");
const commentEl = document.querySelector("section h2:last-of-type span");

const forwardButton = document.querySelector(".forwardButton");
const rewindButton = document.querySelector(".rewindButton");

// Function to update UI
function renderPost(index) {
  const post = posts[index];
  artistPfp.src = post.avatar;
  artistName.textContent = post.name;
  artistLocation.textContent = post.location;
  portrait.src = post.post;
  likesEl.textContent = `${post.likes} likes`;
  commentEl.textContent = post.comment;
}

// Forward button
forwardButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % posts.length; // loops back to start
  renderPost(currentIndex);
});

// Rewind button
rewindButton.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + posts.length) % posts.length; // loops backward
  renderPost(currentIndex);
});

// Initial render
renderPost(currentIndex);
