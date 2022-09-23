import s from "./NotificationItem.module.css";

const NotificationItem = (props) => {
  const type = props.data.type;

  const data = props.data;

  const notificationText =
    type === "reaction"
      ? "reacted to your recent post"
      : type === "follow"
      ? "followed you"
      : type === "group join"
      ? "has joined your group"
      : type === "group left"
      ? "left the group"
      : type === "message"
      ? "sent you a private message"
      : type === "comment"
      ? "commented on your picture"
      : "";

  const Userpic = () => <img className={s.userpic} src={data.userpic}></img>;
  const UserName = () => (
    <a className={s["user-name"]} href={`#${data.user_id}`}>
      {data.user_name}
    </a>
  );
  const PostLink = () => (
    <a className={s["post-name"]} href={`#${data.post_id}`}>
      {data.post_name}
    </a>
  );
  const GroupLink = () => (
    <a className={s["group-name"]} href={`#${data.group_id}`}>
      {data.group_name}
    </a>
  );
  const Time = () => <div className={s.time}>{data.time} ago</div>;
  const Message = () => <div className={s.message}>{data.message}</div>;

  return (
    <li className={props.data.new_notification ? s["new-notification"] : ""}>
      <div className={s.notification}>
        <Userpic />
        <div className={s["notification-content"]}>
          <UserName />
          {notificationText}
          {data.post_id && <PostLink />}
          {data.group_id && <GroupLink />}
          {data.new_notification && (
            <span className={s["new-notification-dot"]}></span>
          )}
          <Time />
          {data.message && <Message />}
        </div>
      </div>
    </li>
  );
};

export default NotificationItem;
