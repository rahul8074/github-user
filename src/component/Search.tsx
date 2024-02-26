import { useState, useContext, useEffect } from 'react'
import { getUserData } from '../API/getUserData'
import { MyContext } from '../context/contextApi'

function Search() {
  const [username, setUsername] = useState<any>("")

  const { user, handleSetUser } = useContext(MyContext);

  function handleChange(e: any) {
    setUsername(e.target.value)
  }
  function handleSearch(e: any) {
    // let clear = setTimeout(() => {
    //   getUserData(username)
    //     .then((resp) => {
    //       console.log("get user data api resp --->", resp)
    //       setUser(resp)
    //     })
    //     .catch((error: any) => {
    //       console.log("get user data api Error --->", error)
    //     })
    // }, 500)
    // clearTimeout(clear)
  }

  useEffect(() => {

    let clear = setTimeout(() => {
      if (username.length > 0) {
        getUserData(username)
        .then((resp) => {
          console.log("get user data api resp --->", resp)
          handleSetUser(resp)
        })
        .catch((error: any) => {
          console.log("get user data api Error --->", error)
        })
      } else {
        handleSetUser("")
      }
    }, 800)
  return () => clearTimeout(clear)

  },[username])

  return (
    <>
      <div className='mb-6 mt-2 w-full'>

        <div className='bg-white flex flex-col justify-center items-center'>
        <div className='font-bold my-2 text-lg'>Search Github User Details</div>
          <input
            placeholder='search here...'
            name='searchBox'
            value={username}
            onChange={handleChange}
            className='h-10 w-3/4 border pl-2'
            onKeyDown={handleSearch}
          />
        </div>
      </div>
    </>
  )
}

export default Search