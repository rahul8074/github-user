import {useState,useContext} from 'react'
import { MyContext } from '../context/contextApi'

function Profile() {
    const {user,setUser} = useContext(MyContext)
  
    return (
     <> 
     <div className='w-full flex flex-col justify-center items-center'>
        {user?.avatar_url &&  <img  className='user-profile-photo border-2 w-[200px] h-[200px] rounded-lg' src={user?.avatar_url} alt='user-profile' />}
        {user?.name && <div className='font-bold'> {user.name}</div>}
        {user?.company && <div className=''><span className='font-bold'>company:</span>  {user.company}</div>}
        {user?.email && <div className=''> <span className='font-bold'> email:</span> {user.email}</div>}
        {user?.twitter_username && <div className=''><span className='font-bold'>twitter:</span>  {user.twitter_username}</div>}
        {user?.blog && <div className=''><span className='font-bold'>Blog:</span>  {user.blog}</div>}
        {user?.location && <div className=''> <span className='font-bold'>Address:</span>  {user.location}</div>}
        {user?.bio && <div className=''> <span className='font-bold'>Bio:</span> {user.bio}</div>}
     </div>
     </>
    )
}

export default Profile