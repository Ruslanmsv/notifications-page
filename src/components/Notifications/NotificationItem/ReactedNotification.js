import s from "./NotificationItem.module.css";

const ReactedNotification = (props) => {
  const data = props.data;

  return (
    <div className={s.notification}>
      <img className={s.userpic} src={data.userpic}></img>
      <div className={s["notification-content"]}>
        <a className={s["user-name"]} href={`#${data.user_id}`}>
          {data.user_name}
        </a>
        reacted to your recent post
        <a className={s["post-name"]} href={`#${data.post_id}`}>
          {data.post_name}
        </a>
        {data.new_notification && (
          <span className={s["new-notification-dot"]}></span>
        )}
        <div className={s.time}>{data.time} ago</div>
      </div>
    </div>
  );
};

export default ReactedNotification;
