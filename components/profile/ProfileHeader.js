import React from 'react'

import { useRouter} from 'next/navigation'
import { BsArrowLeftShort } from 'react-icons/bs'


const style = {
    wrapper: `border-[#38444d] border-b`,
    header: `py-1 px-3 mt-2 flex items-center`,
    primary: `bg-transparent outline-none font-bold`,
    secondary: `text-[#8899a6] text-xs`,
    backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
    coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
    coverPhoto: `object-cover h-full w-full`,
    profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
    profileImage: `object-cover rounded-full h-full`,
    profileImageNft: `object-cover h-full`,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `px-3`,
    nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
    activeNav: `text-white`,
  }
  


const ProfileHeader = () => {

const router = useRouter()

const isProfileImageNft = false;


const currentAccount = '0xfadasdaada2d232d2d3d3';

return (

    <div className={style.wrapper}>
        <div className={style.header}>
            <div className={style.backButton} onClick={() => { router.push('/')}}>
            <BsArrowLeftShort></BsArrowLeftShort>
            </div>

            <div className={style.details}>
            <div className={style.primary}>Alan Alex</div>
            <div className={style.secondary}>4 Tweets</div>
            </div>

        </div>
        <div className={style.coverPhotoContainer}>
            <img 
            src='https://st.depositphotos.com/2218430/3360/i/450/depositphotos_33600483-stock-photo-fc-barcelona-team.jpg' 
            alt="barca_cover" 
            className={style.coverPhoto}
            />
        </div>

        <div className={style.profileImageContainer}>
            <div>
            <img 
            src='https://cdn.theathletic.com/app/uploads/2023/04/11115132/0412_MessiUpdate-scaled.jpg'
            alt='lionel_messi'
            className={
                isProfileImageNft ? 'hex' : style.profileImageContainer
            }
            />
            </div>
        </div>

        <div className={style.details}>
            <div >
            <div className={style.primary}>Alan K Alex</div>
            </div>

            <div className={style.secondary}>
{
    currentAccount && (

    <>
        @{currentAccount.slice(0,8)}...{currentAccount.slice(-4,)}
        </>
    )
}
            </div>
        </div>  
        <div className={style.nav}>
            <div className={style.activeNav}>Tweets</div>
            <div>Tweets & Replies</div>
            <div>Media</div>
            <div>Likes</div>
        </div>
    </div>    


)


}

export default ProfileHeader;
