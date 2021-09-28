import React from "react";
import "./UserSingnIn.css";
const UserSignIn = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="box">
              <h1>Sign In</h1>
              <p className="text-muted"> Please enter your informations</p>
              <input type="text" name="" placeholder="Username" />
              <input type="text" name="" placeholder="email" />
              <input type="password" name="" placeholder="Password" />
             
              <div className="col-md-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserSignIn;
