
import React from 'react';
import './Avatar.css'
import 'tachyons';

const Avatar = (props) => {
    return(
    <div className="avatarStyle ma4 bg-light-blue dib p4 grow shadow-2">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"></img>
        <h1 className="">{props.name}</h1>
        <p>{props.work}</p>
    </div>
    )
}

export default Avatar;