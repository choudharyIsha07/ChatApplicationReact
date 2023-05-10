import React from "react";

function LogoutButton() {
  const logoutData = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  };

  return (
    <button
      onClick={logoutData}
      style={{
        position: "absolute",
        width: "200px",
        bottom: "0px",
        right: "0px",
        background: "#3B2A50",
        color: "white",
        marginRight: "100px",
        marginBottom: "40px",
      }}
      className="button"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
