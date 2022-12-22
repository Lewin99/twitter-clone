import React from 'react'
import './post.css'
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post() {
  return (
    <div className='post'>
        <div className='post-avatr'>
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/>
        </div>
        <div className='post-body'>
            <div className='post-header'>
           <div className='post-headertext'>
           <h3>
            Lewin99{""}
            <span className='post-headerspecial'>
            <VerifiedUserIcon className="post-badge" />@littleagle
            </span>
            
           </h3>
           </div>
           <div className='post-description'>
            <p>Messi has finally won the world cup</p>
           </div>
           <img alt='' className='pic' src="https://media.cnn.com/api/v1/images/stellar/prod/221218184732-messi-wc-trophy.jpg?c=16x9&q=h_720,w_1280,c_fill" />
           <div className='post-footer'>
           <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
           </div>
            </div>
        </div>
    </div>
  )
}

export default Post