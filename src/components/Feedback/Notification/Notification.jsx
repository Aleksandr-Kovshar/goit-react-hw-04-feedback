import React, { Component } from "react";
import { Message } from "./Notification.styled";


const Notification = ({ message }) => {
    return(
        <Message>{message}</Message>
    );
}

export default Notification