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

        <TwitterTweetEmbed tweetId={"1601105949137461249"} />
        <TwitterTweetEmbed tweetId={"1603154364020838400"} />


      </div>
        </div>
  )
}

export default Widget