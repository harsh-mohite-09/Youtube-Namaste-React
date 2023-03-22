import React from "react";

const commentsData = [
  {
    name: "Harsh Mohite",
    text: "some random comment at level 1",
    replies: [
      {
        name: "Harsh Mohite",
        text: "some random comment at level 2",
        replies: [
          {
            name: "Harsh Mohite",
            text: "some random comment at level 3",
            replies: [
              {
                name: "Harsh Mohite",
                text: "some random comment at level 4",
                replies: [
                  {
                    name: "Harsh Mohite",
                    text: "some random comment at level 5",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Harsh Mohite",
        text: "some random comment at level 2",
        replies: [
          {
            name: "Harsh Mohite",
            text: "some random comment at level 3",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Harsh Mohite",
    text: "some random comment at level 1",
    replies: [
      {
        name: "Harsh Mohite",
        text: "some random comment at level 2",
        replies: [
          {
            name: "Harsh Mohite",
            text: "some random comment at level 3",
            replies: [],
          },
        ],
      },
      {
        name: "Harsh Mohite",
        text: "some random comment at level 2",
        replies: [
          {
            name: "Harsh Mohite",
            text: "some random comment at level 3",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Harsh Mohite",
    text: "some random comment at level 1",
    replies: [
      {
        name: "Harsh Mohite",
        text: "some random comment at level 2",
        replies: [
          {
            name: "Harsh Mohite",
            text: "some random comment at level 3",
            replies: [],
          },
        ],
      },
      {
        name: "Harsh Mohite",
        text: "some random comment at level 2",
        replies: [
          {
            name: "Harsh Mohite",
            text: "some random comment at level 3",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Harsh Mohite",
    text: "some random comment at level 1",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="mt-2 flex bg-gray-100 p-2 rounded-lg">
      <div className="flex">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          alt="user-icon"
        />
      </div>
      <div className="ml-2">
        <p className="font-bold h-8">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) =>
  comments.map((comment, i) => {
    return (
      <div key={i}>
        <Comment data={comment} />
        <div className="pl-5 border-l-gray-400 border-l">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    );
  });

const CommentsContainer = () => {
  return (
    <div className="ml-20 mt-4">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
