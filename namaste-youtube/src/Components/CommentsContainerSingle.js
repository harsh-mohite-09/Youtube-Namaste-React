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
  const { authorDisplayName, authorProfileImageUrl, textDisplay } = data;
  return (
    <div className="mt-2 flex bg-gray-100 p-2 rounded-lg">
      <div className="flex ">
        <img
          className="h-8 rounded-full"
          src={authorProfileImageUrl}
          alt="user-icon"
        />
      </div>
      <div className="ml-2">
        <p className="font-bold h-8">{authorDisplayName}</p>
        <p>{textDisplay}</p>
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
      <div key={id}>
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
