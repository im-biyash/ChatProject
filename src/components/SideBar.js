import React from 'react';
import {ListGroup} from "react-bootstrap";

function SideBar() {
  const rooms = ["Room1", "Room2", "Room3"]; 
  return(
    <>
        <h2>Available Rooms</h2>
        <ListGroup>
            {rooms.map((room, idx)=>(
                <ListGroup.Item key={idx}>{room}</ListGroup.Item>
            ))}
        </ListGroup>
        <h2>Members</h2>
    </>
  )
}

export default SideBar;
