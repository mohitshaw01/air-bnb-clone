import { Button } from '@mui/material'
import React from 'react'
import './Banner.css'
import {useState} from 'react';
import Search from './Search'
import {Link} from 'react-router-dom';
function Banner() {
 const [showsearch, setshowsearch] = useState(false);
  return (
    <div className='banner'>
    <div className='banner__search'>
        {showsearch && <Search/>}

        <Button onClick={() => setshowsearch(!showsearch)} className='banner__searchbutton' variant='outlined'>
                    {showsearch ? "Hide" : "Search Dates"}
                </Button>
    </div>
 <div className='banner__info'>
 <h1>Get out and stretch your imagination </h1>
<h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
 <Link to='/search'>
  <Button  onClick={'/search'} variant='outlined' className='btn'> Explore Nearby </Button>
</Link>
 </div>
    </div>
  )
}

export default Banner