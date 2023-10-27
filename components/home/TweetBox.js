import React from 'react'
import {useState} from 'react'
//import { TwitterContext } from '../../context/TwitterContext'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'
//import { client } from '../../lib/client'

const style = {
    wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
    tweetBoxLeft: `mr-4`,
    tweetBoxRight: `flex-1`,
    profileImage: `height-12 w-12 rounded-full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg`,
    formLowerContainer: `flex`,
    iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
    icon: `mr-2`,
    submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
    inactiveSubmit: `bg-[#196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`,
  }


function TweetBox() 
{

    const [tweetMessage,setTweetMessage] = useState('');

    const postTweet = (event) => {

        event.preventDefault()
        console.log(tweetMessage);
    }


return(

    <div className={style.wrapper}>
        <div className={style.tweetBoxLeft}>
        <img src="https://media.gq-magazine.co.uk/photos/5e96bf31013fff000829de0c/1:1/w_1280,h_1280,c_limit/GettyImages-1199899108.jpg" alt="profile image" className={style.profileImage}/>
        </div>

        <div className={style.tweetBoxRight}>
        <form>

            <textarea 
            className={style.inputField}
            placeholder = "what's happening?"
            value = {tweetMessage}

            onChange={(e)=>setTweetMessage(e.target.value)}
            ></textarea>

            <div className={style.formLowerContainer}>
                <div className={style.iconsContainer}>
                <BsCardImage className={style.icon}></BsCardImage>
                <RiFileGifLine className={style.icon}></RiFileGifLine>
                <RiBarChartHorizontalFill className={style.icon}></RiBarChartHorizontalFill>
                <BsEmojiSmile className={style.icon}></BsEmojiSmile>
                <IoMdCalendar className={style.icon}></IoMdCalendar>
                <MdOutlineLocationOn className={style.icon}></MdOutlineLocationOn>
                </div>

                <button
                type="submit"

                onClick={(event) => {postTweet(event)}}
                className={`${style.submitGeneral}   ${
                    tweetMessage ? style.activeSubmit : style.inactiveSubmit
                }`}>
                    Tweet
                </button>

            </div>
        </form>
        </div>


    </div>

)


}

export default TweetBox