import React, { useEffect, useState ,useContext} from 'react'
import { MyContext } from '../context/contextApi'

function Sidebar() {
    const {user, handleSetUser} = useContext(MyContext)
    const [data,setData] = useState<any>([])
    useEffect(() => {
        let data :any = localStorage.getItem("users")
        data = JSON.parse(data)
        setData(data)
    },[user])
   
  return (
    <>
        <div>
            {
                data?.length > 0 && 
                 data.map((user:any,index:number) => {
                    return (
                        <div onClick={() => handleSetUser(user)}  className='w-full flex items-center m-2'>
                        {user?.avatar_url &&  <img  className='user-profile-photo border-2 w-[40px] h-[40px] rounded-lg' src={user?.avatar_url} alt='user-profile' />}
                        {user?.name && <div className='font-bold ml-2'> {user.name}</div>}
                       
                     </div>
                    )
                 })
            }
        </div>
    </>
  )
}

export default Sidebar