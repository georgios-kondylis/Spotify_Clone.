
export const getAccessTokenFromSessionStorage = () => {
  const token = sessionStorage.getItem('spotifyToken')
  if (token !== null) {
    return token
  } else {
    return false
  }
}






//                    does the same

// export const getAccessTokenFromSessionStorage = () => {
//   const token = sessionStorage.getItem('spotifyToken')
//   !!token? token : null