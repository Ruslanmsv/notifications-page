import s from "./NotificationItem.module.css";

const PictureCommentNotification = (props) => {
  const data = props.data;
  return (
    <div className={s.notification}>
      <img className={s.userpic} src={data.userpic}></img>
      <div className={s["notification-content"]}>
        <a className={s["user-name"]} href={`#${data.user_id}`}>
          {data.user_name}
        </a>
        commented on your picture
        {data.new_notification && (
          <span className={s["new-notification-dot"]}></span>
        )}
        <div className={s.time}>{data.time} ago</div>
      </div>
      <a className={s["picture-link"]} href={`#${data.picture_id}`}>
        <img className={s.picture} src={data.picture_preview}></img>
      </a>
    </div>
  );
};

export default PictureCommentNotification;
