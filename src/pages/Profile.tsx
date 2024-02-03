import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  console.log(id)

  return (  
    <div>
      <span>ayo man</span>
      <h1>user id is {id}</h1>
      <div></div>
    </div>
  );
}
