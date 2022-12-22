import React from 'react'
import './feed.css'
import Post from './Post'
import Twetbox from './Twetbox'


function Feed() {
  return (
    <div className='feed'>
        <div className="feed-header"><h2>Home</h2></div>
        <Twetbox />
        <Post />
        <Post />
        <Post />
        </div>
  )
}

export default Feed