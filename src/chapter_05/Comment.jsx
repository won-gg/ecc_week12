import React from 'react';

const styles = {
  wrapper: {
    margin:8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "Center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
  },
};

function Comment(props){
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src ="https://i.pinimg.com/736x/ef/f5/a7/eff5a7aa9a0d7e0ab37248a1abe6c7bb.jpg"
          style={styles.image}
          />
      </div>

      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;