import TweetBox from '../home/TweetBox'
import { BsStars } from 'react-icons/bs'
import Post from '../Post'
const style = {

    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,

}

 const tweets = [

  {
      displayName : 'Carslen',
      userName : '0xc8S23dcsdcscwcsdcscscqq78eer34r224d2',
      avatar:'https://media.gq-magazine.co.uk/photos/5e96bf31013fff000829de0c/1:1/w_1280,h_1280,c_limit/GettyImages-1199899108.jpg',
      text:'gm',
      isProfileImageNft:true,
      timestamp:'2022-02-15T12:00:00.000Z'



  }
  ,
  {
    displayName : 'Carslen',
      userName : '0xc8S23dcsdcscwcsdcscscqq78eer34r224d2',
      avatar:'https://media.gq-magazine.co.uk/photos/5e96bf31013fff000829de0c/1:1/w_1280,h_1280,c_limit/GettyImages-1199899108.jpg',
      text:'gm',
      isProfileImageNft:false,
      timestamp:'2023-02-15T12:00:00.000Z'
  }


]


function Feed()
{
  return(
    <div className={`${style.wrapper} `}>
        <div className={style.header}>
            <div className={style.headerTitle}>Home</div>
        <BsStars/>
        </div>
        <TweetBox/>  
        {
            tweets.map((tweet,index) => (

                <Post 
                key={index}
                displayName={tweet.displayName}
                userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
                avatar={tweet.avatar}
                text={tweet.text}
                isProfileImageNft={tweet.isProfileImageNft}
                timestamp={tweet.timestamp}

    
/>
            ))



        }
    </div>

  )

}

export default Feed;