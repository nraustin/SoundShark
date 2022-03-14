import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

function SplashPage() {

    return (
        <div className="background">
            <h1 className="Welcome to the ocean."></h1>
        </div>
    )
}


export default SplashPage;