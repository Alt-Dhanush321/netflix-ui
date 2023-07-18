import React from 'react'
import Main from '../components/Main'
import Rows from '../components/Rows'
import request from '../Request'

function Home() {
  return (
    <>
        <Main />
        <Rows rowID='1' title="Upcomings" fetchUrl={request['reqUpcoming']} />
        <Rows rowID='2' title="Popular" fetchUrl={request['reqPopular']} />
        <Rows rowID='3' title="Trending" fetchUrl={request['reqTrending']} />
        <Rows rowID='4' title="Top Rated" fetchUrl={request['reqTop']} />

    </>
  )
}

export default Home