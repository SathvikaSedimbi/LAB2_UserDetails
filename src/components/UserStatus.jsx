export default function UserStatus({status, btncolor}){
  return(
    <div style={{
      marginLeft: "35vw",
      color: "black",
      backgroundColor: "pink",
      textAlign: "center",
      borderRadius: "30px",
      padding: "10px",
      marginTop: "30px"
    }}>
      <h2>User Status</h2>
      <p style={{
        backgroundColor: btncolor,
        width: "5vw",
        marginLeft: "15vw",
        color: "pink",
        borderRadius: "30px"
      }}>{status}</p>
    </div>
  );
}