export default function UserDetails({username, email}){
  return(
    <div className="user_details" style={{
      marginLeft: "35vw",
      backgroundColor: "pink",
      color: "black",
      padding: "30px",
      borderRadius: "30px"

    }}>
      <h1 style={{
        
      }}>User Info DashBoard</h1>

      <div style={{
        textAlign: "center"
      }}>
        <h2>User Details</h2>
        <p>User Name: {username}</p>
        <p>E- Mail ID: {email}</p>
      </div>
      
    </div>
  );
}
