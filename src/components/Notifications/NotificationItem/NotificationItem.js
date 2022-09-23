import { useState } from 'react';
// import JoinGroupNotification from './GroupActivityNotification';
import PictureCommentNotification from './PictureCommentNotification';
import LeaveGroupNotification from './LeaveGroupNotification';
import GroupActivityNotification from './GroupActivityNotification';
import MessageNotification from './MessageNotification';
import FollowedNotification from './FollowedNotification';
import ReactedNotification from './ReactedNotification';

import s from "./NotificationItem.module.css";

const NotificationItem = (props) => {

  const [newNotification, setNewNotification] = useState(props.data.new_notification ? true : false);
  const type = props.data.type;



  return (
    <li key={props.data.id} className={newNotification ? s['new-notification'] : ''}>
      {
      type === 'reaction' ? <ReactedNotification data={props.data} /> :
      type === 'follow' ? <FollowedNotification data={props.data} /> :
      type === 'group join' ? <GroupActivityNotification data={props.data} /> :
      type === 'group left' ? <GroupActivityNotification data={props.data} /> :
      type === 'message' ? <MessageNotification data={props.data} /> :
      type === 'comment' ? <PictureCommentNotification data={props.data} /> : ''
      } 
    </li>
  );
};

export default NotificationItem;
