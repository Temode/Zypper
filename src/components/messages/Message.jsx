/* import React from 'react'
import "./message.css"
import { Avatar} from '@mui/material'

export default function Message() {
  return (
    <div className='Message-Main'>
      <div className='message-header'>
        <div className="profile-Image">
        <Avatar alt="Remy Sharp" src="src/assets/Images/Profile1.png" className='profile-Image'/>
        <div className="profilName">        <h4>Jasmeen Bahloul</h4>
        </div>
        </div>
      <div className='icons-onHeader'>
        <img src="#" alt="call" className='call-icone'/>
        <img src="#" alt="video-call" className='video-call-icone'/>
        <img src="#" alt="dots" className='dots-icone'/>
      </div>
      </div>
      <div className="epengle">
        <img src="#" alt="epne" className="epengle-icon" />
        <div className="message-epengle">
          <p>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza..."</p>

        </div>
      </div>
      <div className="date">
        <span className='today'>
        Today</span>
      </div>
      <div className="messenger">
      <div className="send">
      <div className="aMessage">
      <div className="profileMessage">
        <Avatar alt="Remy Sharp" src="src/assets/Images/Profile1.png" className='profile-Image'/>
        </div>
      <div className="paragraphe">
      <p className='text'>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza..."</p>
      <span className='time'>3:17 PM </span>
        </div>
      </div>
      <div className="aMessage ">
      <div className="profileMessage">
        <Avatar alt="Remy Sharp" src="src/assets/Images/Profile1.png" className='profile-Image'/>
        </div>
      <div className="paragraphe">
      <p className='text'>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza..."</p>
      <span className='time'>3:17 PM </span>
        </div>
      </div>
      </div>
      <div className="receive">
      <div className="aMessage">
      <div className="profileMessage">
        <Avatar alt="Remy Sharp" src="src/assets/Images/Profile1.png" className='profile-Image'/>
        </div>
      <div className="paragraphe">
      <p className='text'>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza..."</p>
      <span className='time'>3:17 PM </span>
        </div>
      </div>
      <div className="aMessage">
      <div className="profileMessage">
        <Avatar alt="Remy Sharp" src="src/assets/Images/Profile1.png" className='profile-Image'/>
        </div>
      <div className="paragraphe">
      <p className='text'>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza..."</p>
      <span className='time'>3:17 PM </span>
        </div>
      </div>
      <div className="aMessage">
      <div className="profileMessage">
        <Avatar alt="Remy Sharp" src="src/assets/Images/Profile1.png" className='profile-Image'/>
        </div>
      <div className="paragraphe">
      <p className='text'>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza..."</p>
      <span className='time'>3:17 PM </span>
        </div>
      </div>
      </div>
      </div>
    </div>
  )

}
*/

import React from 'react';
import './message.css';
import { Avatar, IconButton, TextField } from '@mui/material';
import { FaPhoneAlt, FaVideo, FaEllipsisV } from 'react-icons/fa';

export default function Message() {
  return (
    <div className="message-panel">
      {/* Header section */}
      <div className="message-header">
        <div className="user-info">
          <Avatar alt="Meera" src="src/assets/Images/Profile1.png" className="user-avatar" />
          <div className="user-details">
            <h3>Meera</h3>
          </div>
        </div>
        <div className="icons-header">
          <IconButton className="icon-button">
            <FaPhoneAlt />
          </IconButton>
          <IconButton className="icon-button">
            <FaVideo />
          </IconButton>
          <IconButton className="icon-button">
            <FaEllipsisV />
          </IconButton>
        </div>
      </div>

      {/* Message container */}
      <div className="message-container">
        <div className="messages">
          {/* Sent message */}
          <div className="sent-message">
            <div className="message-profile">
              <Avatar alt="Meera" src="src/assets/Images/Profile1.png" className="message-avatar" />
            </div>
            <div className="message-content">
              <p className="message-text">Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</p>
              <span className="message-time">3:17 PM</span>
            </div>
          </div>

          {/* Received message */}
          <div className="received-message">
            <div className="message-profile">
              <Avatar alt="Meera" src="src/assets/Images/Profile1.png" className="message-avatar" />
            </div>
            <div className="message-content">
              <p className="message-text">Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</p>
              <span className="message-time">3:17 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Message input */}
      <div className="message-input">
        <TextField
          label="Type a message"
          variant="outlined"
          className="input-field"
          fullWidth
          size="small"
        />
        <IconButton className="send-button">
          <FaEllipsisV />
        </IconButton>
      </div>
    </div>
  );
}
