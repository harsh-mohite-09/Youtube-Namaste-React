import React from "react";

// const commentsData = [
//   {
//     name: "Harsh Mohite",
//     text: "some random comment at level 1",
//     replies: [
//       {
//         name: "Harsh Mohite",
//         text: "some random comment at level 2",
//         replies: [
//           {
//             name: "Harsh Mohite",
//             text: "some random comment at level 3",
//             replies: [
//               {
//                 name: "Harsh Mohite",
//                 text: "some random comment at level 4",
//                 replies: [
//                   {
//                     name: "Harsh Mohite",
//                     text: "some random comment at level 5",
//                     replies: [],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Harsh Mohite",
//         text: "some random comment at level 2",
//         replies: [
//           {
//             name: "Harsh Mohite",
//             text: "some random comment at level 3",
//             replies: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Harsh Mohite",
//     text: "some random comment at level 1",
//     replies: [
//       {
//         name: "Harsh Mohite",
//         text: "some random comment at level 2",
//         replies: [
//           {
//             name: "Harsh Mohite",
//             text: "some random comment at level 3",
//             replies: [],
//           },
//         ],
//       },
//       {
//         name: "Harsh Mohite",
//         text: "some random comment at level 2",
//         replies: [
//           {
//             name: "Harsh Mohite",
//             text: "some random comment at level 3",
//             replies: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Harsh Mohite",
//     text: "some random comment at level 1",
//     replies: [
//       {
//         name: "Harsh Mohite",
//         text: "some random comment at level 2",
//         replies: [
//           {
//             name: "Harsh Mohite",
//             text: "some random comment at level 3",
//             replies: [],
//           },
//         ],
//       },
//       {
//         name: "Harsh Mohite",
//         text: "some random comment at level 2",
//         replies: [
//           {
//             name: "Harsh Mohite",
//             text: "some random comment at level 3",
//             replies: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Harsh Mohite",
//     text: "some random comment at level 1",
//     replies: [],
//   },
// ];

const Comment = ({ data }) => {
  const { authorDisplayName, authorProfileImageUrl, textOriginal } = data;
  return (
    <div className="mt-2 flex bg-gray-100 p-2 rounded-lg">
      <div className="w-8">
        <img
          className="h-8 w-8 rounded-full"
          src={authorProfileImageUrl}
          onError={(e) => {
            e.target.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZKQdM4lHPJTtDShA1844FFOUZo99NLV2zM73YSFX5A&s";
          }}
          alt=""
        />
      </div>
      <div className="ml-2 w-[95%]">
        <p className="font-bold h-8">{authorDisplayName}</p>
        <p className="w-full">{textOriginal}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment) => {
    const {
      id,
      snippet: {
        topLevelComment: { snippet },
      },
    } = comment;
    return (
      <div key={id} className="w-full">
        <Comment data={snippet} />
      </div>
    );
  });
};

const CommentsContainerSingle = ({ comments }) => {
  return (
    <div className="ml-20 mt-4">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentsContainerSingle;
