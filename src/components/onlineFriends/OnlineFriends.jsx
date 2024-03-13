import './onlineFriends.css'
export default function onlineFriends({user}) {
  return (
    <div>
                  <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li> 
    </div>
  )
}
