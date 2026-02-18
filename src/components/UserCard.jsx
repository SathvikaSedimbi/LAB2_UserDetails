import UserDetails from "./UserDetails";
import UserStatus from "./UserStatus";

export default function UserCard({username, email, status, btncolor}){
  return(
    <div>
      <UserDetails username={username} email={email}></UserDetails>
      <UserStatus status = {status} btncolor = {btncolor}></UserStatus>
    </div>
  );
  
}