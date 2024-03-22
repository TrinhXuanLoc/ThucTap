import React, { memo } from "react";
import "./Header.scss";
import { useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import smallLogo from "../../../styles/image/smallLogo.png";
import withBase from "../../../hocs/withBase";
function Header({ navigate }) {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="header-ad">
      <div
        className="header-ad--left"
        onClick={() => {
          navigate("/");
        }}
      >
        <p style={{ margin: 0, fontSize: "28px", color:"#55d4ed" }}>HÀUY</p>
        <p style={{ margin: 0, fontSize: "28px", color: "white" }}>T</p>
        <p style={{ margin: 0, fontSize: "28px", color: "white" }}>E</p>
        <p style={{ margin: 0, fontSize: "28px", color: "white" }}>C</p>
        <p style={{ margin: 0, fontSize: "28px", color: "white" }}>H</p>
        <img src={smallLogo} className="right--image" alt="" />
      </div>
      <div className="header-ad--right">
        <div className="header-ad--right--image">
          <FaRegUser size={20} />
        </div>
        <p>{user?.name}</p>
      </div>
    </div>
  );
}

export default withBase(memo(Header));
