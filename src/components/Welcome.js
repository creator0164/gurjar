import axios from "axios";
import Cookies from "universal-cookie";
function Welcome({data}) {
  return (
    <div className="flex flex-col items-center text-3xl my-7">
      <div>Welcome Umesh Sharma!</div>
      <div>You Gurjar ID is <b>{data.user.gurjar_id}.</b></div>
    </div>
  );
}

export default Welcome;
