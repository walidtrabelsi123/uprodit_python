import React, { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/react';
import axios from 'axios';

const ProfileCard = ({ item,handleDelete }) => {
    const [loadedImage, setloadedImage] = useState('');

    //useEffect(() => {
      //  fetchData(item).then((image) => {
        //    image && image.b64Content
          //      ? setloadedImage(`data:image/png;base64,${image.b64Content}`)
             //   : setloadedImage('https://via.placeholder.com/300');
        //});
  //  }, []);

    return (
        <li key={item.id} className="card">
            <div className="profile-image">
                {loadedImage ? (
                    <Image
                        src={loadedImage}
                        alt={`${item.first_name} ${item.last_name}`}
                        maxH="350px"
                        maxW="400px"
                        objectFit="contain"
                    />
                ) : (
                    <div className="no-image">No Image Available</div>
                )}
            </div>
            <div className="profile-details">
                <h2>{item.first_name}</h2>
                <p>{item.last_name}</p>
                <p>Email: {item.email_address}</p>
                <p>Phone Number: {item.phone_number}</p>
                <p>Specialities: {item.specialities.map((speciality,i) => (
                    <span key={i+speciality}>{speciality} </span>
                ))}</p>
                
            </div>
            <button
    onClick={()=>handleDelete(item)}
    
>
    delete
</button>
        </li>
    );
};

export default ProfileCard;
