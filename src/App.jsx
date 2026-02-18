import React, {useState} from "react";
import UserCard from "./components/UserCard"

export default function App(){
  const [username, setName] = useState("Sathvika");
  const [email, setEmail] = useState("sathvika@gmail.com");
  const [status, setStatus] = useState("Offline");
  const [btncolor, setbtncolor] = useState("red");

  return(
    <div>
      <UserCard username = {username} email = {email} status = {status} btncolor = {btncolor}></UserCard>
      <div style={{
        marginLeft: "35vw",
        textAlign: "center",
        marginTop: "35px",

      }}>
        <button onClick={() => {setStatus("Online"), setbtncolor("green")}} style={{
            backgroundColor: "green",
        }}>Go Online</button>

          <button onClick={() => {setStatus("Offline"), setbtncolor("red")}} style={{
            backgroundColor: "red",
          }}>GO Offline</button>
        </div>
      </div>
      
  );
}