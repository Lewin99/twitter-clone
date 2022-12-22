import React from 'react'
import './widget.css'
import {TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widget() {
  return (
    <div className='widget'>
        <div className='search'>
            <SearchIcon />
         <input type="text" placeholder="search a tweet" />
        </div>
        <div className='widget-widgetContainer'>
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1605921147219955712"} />
        <TwitterTweetEmbed tweetId={"1601105949137461249"} />


      </div>
        </div>
  )
}

export default Widget