import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  // Handle Like
  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  };

  // Handle Comment Submit
  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Image Upload with Likes & Comments</h2>

        {/* Upload Button */}
        <button
          className="upload-btn"
          onClick={() => fileInputRef.current.click()}
        >
          Upload Image
        </button>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          hidden
        />

        {/* Image Preview */}
        {image && (
          <div className="image-section">
            <img src={image} alt="Uploaded" className="preview-image" />
          </div>
        )}

        {/* Like Section */}
        <div className="like-section">
          <button
            className={`like-btn ${liked ? "liked" : ""}`}
            onClick={handleLike}
          >
            ❤️
          </button>

          <span>{likes} Likes</span>
        </div>

        {/* Comment Section */}
        <div className="comment-section">
          <input
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button onClick={handleAddComment}>Add Comment</button>
        </div>

        {/* Display Comments */}
        <div className="comments-list">
          <h3>Comments</h3>

          {comments.length === 0 ? (
            <p>No comments yet</p>
          ) : (
            comments.map((item, index) => (
              <div key={index} className="comment">
                {item}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;