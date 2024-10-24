export const notify = (divNotification, notification, value, message) => {
    notification.innerHTML = message;
    switch (value) {
        case "INVALID":
        case "DANGER":
            notification.setAttribute("class", "danger");
            break;
        case "SUCCESS":
            notification.setAttribute("class", "success");
            break;
        default:
            break;
    }
    divNotification.append(notification);
};
