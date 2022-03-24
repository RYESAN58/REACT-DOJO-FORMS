import React from "react";


const Socials = (props) =>{
    const socielaMedias = ['facebook', 'instagram', 'Twitter', 'snapchat', 'linkedin'];
    return(
        <ul>
            {
                socielaMedias.map((item, index) =>
                <li key={index}> {item} </li>
                )
            }

        </ul>
    );
}


export default Socials;