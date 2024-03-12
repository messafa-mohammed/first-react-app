
function ProfilePicture(){
    const imageUrl='./src/assets/img09.jpg'
    const handleClick = (e) => e.target.style.display = 'none'; 
    return(
        <img onClick={(e)=> handleClick(e)} src={imageUrl} alt="profile" />
    )
}

export default ProfilePicture