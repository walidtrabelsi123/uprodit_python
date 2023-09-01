import React, { useState, useEffect } from 'react';



const ProfileCard = ({ item,handleDelete }) => {
    return (
        <li key={item.id} className="card">
            
            <div className="profile-details">
                <h2>{item.first_name}</h2>
                <p>{item.last_name}</p>
                <p>Email: {item.email_address}</p>
                <p>Phone Number: {item.phone_number}</p>
                <p>Specialities: {item.specialities.map((speciality,i) => (
                    <span key={i+speciality}>{speciality} </span>
                ))}</p>
                
            </div>
        </li>
    );
};

export default ProfileCard;
