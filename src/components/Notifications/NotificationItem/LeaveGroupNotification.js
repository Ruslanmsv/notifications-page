import s from './NotificationItem.module.css';

const LeaveGroupNotification = props => {
    return (
        <>
          <a href={`#${data.user_id}`}>{data.user_name}</a> left the group{" "}
          <a className={s["group-name"]} href={`#${data.group_id}`}>
            {data.group_name}
          </a>{" "}
          {data.new_notification ? (
            <span className="new-notification-dot"></span>
          ) : (
            ""
          )}
        </>
      );
};

export default LeaveGroupNotification;