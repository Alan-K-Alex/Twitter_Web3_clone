"use client"

import React from 'react'

import ProfileHeader from '../../components/profile/ProfileHeader'
import Sidebar from '../../components/Sidebar'
import Widgets from '../../components/Widgets'
import ProfileTweet from '../../components/profile/ProfileTweet'


const style = {
    wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
    content: `max-w-[1400px] w-2/3 flex justify-between`,
    mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  }


const profile = () => {

    return(

        <div className={style.wrapper}>
            <div className={style.content}>
                <Sidebar></Sidebar>
                <div className={style.mainContent}>
                    <ProfileHeader></ProfileHeader>
                    <ProfileTweet></ProfileTweet>
                </div>
                <Widgets></Widgets>
            </div>
        </div>


    )


}


export default profile;