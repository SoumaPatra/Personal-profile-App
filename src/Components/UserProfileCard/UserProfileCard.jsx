import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../Assets/photo.jpeg'

const UserProfileCard = () => {
  return (
    <div className='upc'>
      <div className="gradiant"></div>
      <div className="profile-down"></div>
      <img src={profile_icon} alt="" />
      <div className="profile-title">Souma Patra</div>
      <div className="profile-description">
        I am a 3rd year undegraduate student
 
      </div>
      <div className="profile-button"><a href="mailto:soumapatra1@gmail.com">Contact Me</a></div>

    </div>

  )
}

export default UserProfileCard
