import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import Sidebaroption from './Sidebaroption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import './sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='twitter-icon' />

      <Sidebaroption active Icon={HomeIcon} text="Home" />
      <Sidebaroption Icon={SearchIcon} text="Explore" />
      <Sidebaroption Icon={NotificationsNoneIcon} text="Notifications" />
      <Sidebaroption Icon={MailOutlineIcon} text="Messages" />
      <Sidebaroption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <Sidebaroption Icon={ListAltIcon} text="Lists" />
      <Sidebaroption Icon={PermIdentityIcon} text="Profile" />
      <Sidebaroption Icon={MoreHorizIcon} text="More" />
       {/* Button -> Tweet */}
       <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  )
}

export default Sidebar