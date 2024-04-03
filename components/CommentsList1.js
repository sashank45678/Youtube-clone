import React from "react";
const commentsData = [
  {
    name: "sashank",
    text: "Lorem ipsum dolor sit amot consectetur adip",
    replies: [
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
        replies: [
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
        ],
      },
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
        replies: [
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
        ],
      },
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
    ],
  },
  {
    name: "sashank",
    text: "Lorem ipsum dolor sit amot consectetur adip",
    replies: [
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
        replies: [
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
        ],
      },
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
        replies: [
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
        ],
      },
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
    ],
  },
  {
    name: "sashank",
    text: "Lorem ipsum dolor sit amot consectetur adip",
    replies: [
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
        replies: [
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
        ],
      },
    ],
  },
  {
    name: "sashank",
    text: "Lorem ipsum dolor sit amot consectetur adip",
    replies: [
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
    ],
  },
  {
    name: "sashank",
    text: "Lorem ipsum dolor sit amot consectetur adip",
    replies: [
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
    ],
  },
  {
    name: "sashank",
    text: "Lorem ipsum dolor sit amot consectetur adip",
    replies: [
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
    ],
  },
  {
    name: "sashank",
    text: "Lorem ipsum dolor sit amot consectetur adip",
    replies: [
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
      },
    ],
  },
  {
    name: "sashank",
    text: "Lorem ipsum dolor sit amot consectetur adip",
    replies: [
      {
        name: "sashank",
        text: "Lorem ipsum dolor sit amot consectetur adip",
        replies: [
          {
            name: "sashank",
            text: "Lorem ipsum dolor sit amot consectetur adip",
          },
        ],
      },
    ],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex pt-2 my-2 shadow-sm bg-gray-100 rounded-lg">
      <img
        className="w-12 h-9 px-2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiPLECpi51Hqe2-B7fMayCy4SJL2vbOxb2ucyVHqD_Q&s"
        alt="user"
      />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p className="pb-2">{text}</p>
      </div>
    </div>
  );
};
const CommentsList2 = ({ comments }) => {
  return comments && comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-3">
        <CommentsList2 comments={comment.replies} key={index} />
      </div>
    </div>
  ));
};

const CommentsList1 = () => {
  return (
    <div className="m-5 py-2 px-1 w-[65%]">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList2 comments={commentsData} />
    </div>
  );
};

export default CommentsList1;
