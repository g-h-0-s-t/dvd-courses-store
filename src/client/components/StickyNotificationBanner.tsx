import React from "react";
import { IoIosNotifications } from "react-icons/io";
export default function StickyNotificationBanner(props: {
  notification: boolean;
  text: string;
  icon?: any;
}) {
  return (
    <div className="px-12 py-3 flex  bg-green-300 justify-center text-lg font-semibold text-black text-center">
      {props.notification ? (
        <IoIosNotifications className="text-3xl lg:text-2xl text-gray-700 mr-2" />
      ) : (
        props.icon
      )}
      <div>{props.text}</div>
    </div>
  );
}
