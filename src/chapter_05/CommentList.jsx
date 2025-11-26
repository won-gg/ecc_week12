import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이인제",
    comment: "안녕하세요, 소플입니다.",

  },
  {
    name: "나나나",
    comment: "리액트~",

  },
  {
    name: "won-gg",
    comment: "test~",

  },
]

function CommentList(props){
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;