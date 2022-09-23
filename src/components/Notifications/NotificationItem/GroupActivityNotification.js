import s from "./NotificationItem.module.css";

const GroupActivityNotification = (props) => {
  const data = props.data;

  return (
    <div className={s.notification}>
      <img className={s.userpic} src={data.userpic}></img>
      <div className={s["notification-content"]}>
        <a className={s["user-name"]} href={`#${data.user_id}`}>
          {data.user_name}
        </a>
        {data.type === 'group join' ? 'has joined your group' : 'left the group'} 
        <a className={s["group-name"]} href={`#${data.group_id}`}>
          {data.group_name}
        </a>
        {data.new_notification && (
          <span className={s["new-notification-dot"]}></span>
        )}
        <div className={s.time}>{data.time} ago</div>
      </div>
    </div>
  );
};

export default GroupActivityNotification;
