import React from 'react'

function getUserData(username:any) {
  return new Promise((resolve,reject) => {
    fetch( encodeURI(`https://api.github.com/users/${username}`),{
      headers : {
        Authorization : "Bearer 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"
      }
    })
    .then((resp : any) => {
      resolve(resp.json())
    })
    .catch((err: Object) => {
      console.log("error",err)
      reject(err)
    })
  })
}

export {getUserData} 