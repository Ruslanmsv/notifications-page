import s from "./NotificationItem.module.css";

const FollowedNotification = (props) => {
  const data = props.data;
  return (
    <div className={s.notification}>
      <img className={s.userpic} src={data.userpic}></img>
      <div className={s["notification-content"]}>
        <a className={s["user-name"]} href={`#${data.user_id}`}>
          {data.user_name}
        </a>
        followed you
        {data.new_notification && (
          <span className={s["new-notification-dot"]}></span>
        )}
        <div className={s.time}>{data.time} ago</div>
      </div>
    </div>
  );
};

export default FollowedNotification;
