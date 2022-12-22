import React from 'react'
import './tweetbox.css'
import { Avatar, Button } from "@material-ui/core";

function Twetbox() {
  return (
    <div className='tweetbox'>
        <form>
         <div className='tweetbox-input'>
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/>
          <input type="text" placeholder="What's in your mind"/>
         </div>
         <input className='tweetbox-input-url' type="text" placeholder="Option: Enter picture url"  />
         <Button className='tweetboxInput-tweet'>Tweet</Button>
        </form>
        
    </div>
  )
}

export default Twetbox