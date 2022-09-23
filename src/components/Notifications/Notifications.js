import NotificationItem from "./NotificationItem";
import s from "./Notifications.module.css";

const Notifications = (props) => {
  const newNotifications = props.data.reduce((prev, item) => {
    return item.new_notification ? prev + 1 : prev;
  }, 0);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1 className={s.title}>Notifications</h1>
        <span className={s["new-notifications"]}>{newNotifications}</span>
        <button className={s["mark-notifications"]}>Mark all as read</button>
      </div>
      <ul className={s.notifications}>
        {props.data.map((item) => (
          <NotificationItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
