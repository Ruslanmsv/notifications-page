import { useState } from "react";
import Notifications from "./components/Notifications";

const data = [
  {
    id: "1",
    userpic: "images/avatar-mark-webber.webp",
    new_notification: true,
    type: "reaction",
    user_name: "Mark Webber",
    user_id: "u1",
    post_id: "p1",
    post_name: "My first tournament today!",
    time: "1m",
  },
  {
    id: "2",
    userpic: "images/avatar-angela-gray.webp",
    new_notification: true,
    type: "follow",
    user_name: "Angela Gray",
    user_id: "u2",
    time: "5m",
  },
  {
    id: "3",
    userpic: "images/avatar-jacob-thompson.webp",
    new_notification: true,
    type: "group join",
    user_name: "Jacob Thompson",
    user_id: "u3",
    group_name: "Chess Club",
    group_id: "g1",
    time: "5m",
  },
  {
    id: "4",
    userpic: "images/avatar-rizky-hasanuddin.webp",
    type: "message",
    user_name: "Rizky Hasanuddin",
    user_id: "u4",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days",
    chat_id: "#",
  },
  {
    id: "5",
    userpic: "images/avatar-kimberly-smith.webp",
    type: "comment",
    user_name: "Kimberly Smith",
    user_id: "u5",
    picture_preview: "images/image-chess.webp",
    picture_id: "pic_1",
    time: "1 week",
  },
  {
    id: "6",
    userpic: "images/avatar-nathan-peterson.webp",
    type: "reaction",
    user_name: "Nathan Peterson",
    user_id: "u6",
    post_name: "5 end-game strategies to increase your win rate",
    post_id: "p2",
    time: "2 weeks",
  },
  {
    id: "7",
    userpic: "images/avatar-anna-kim.webp",
    type: "group left",
    user_name: "Anna Kim",
    user_id: "u7",
    group_id: "1234",
    group_name: "Chess Club",
    time: "2 weeks",
  },
];

const App = () => {
  const [state, setState] = useState(data);
  console.log("state is:");
  console.log(state);

  const markAsReadHandler = (event) => {
    event.preventDefault();

    console.log("in click handler");

    setState((prevState) => {
      return prevState.map((notification) => {
        return { ...notification, new_notification: false };
      });
    });
  };

  return <Notifications markAsReadHandler={markAsReadHandler} data={state} />;
};

export default App;
