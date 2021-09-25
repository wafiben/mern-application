import React from "react";
import "./UserSingup.css";

const UserSingup = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="box">
              <h1>Create your Account</h1>
              <p class="text-muted"> Please enter your informations</p>
              <input type="text" name="" placeholder="Username" />
              <input type="text" name="" placeholder="email" />
              <input type="password" name="" placeholder="Password" />
               <button className="bn31 " >
                  <span className="bn31span">Submit</span>
                </button>
              <div class="col-md-12">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserSingup;
