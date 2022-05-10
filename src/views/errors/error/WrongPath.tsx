import React from "react";
import {Link} from "react-router-dom";
import {Vortex} from "../../../components/Vortex/Vortex";

export const WrongPath = () => {
    return (
        <div className={"Error"}>
            <div className={"WrongPath Error_wrapper"}>
                <h2 className={"Error_title"}>Excuse me. Coming through.</h2>
                <h2 className={"Error_title"}>What are you here for?</h2>
                <h2 className={"Error_title"}>Just kidding, I don’t care.</h2>
                <h3 className={"Error_code"}>Code 404</h3>
                <p className={"Error_description textError"}>
                    Url is bad
                </p>
                <button className={"ReturnHome"}>
                    <Link className={"ReturnHome_Link"} to={"/"}>Return to home!</Link>
                </button>
                <div className={"Vortex_Box"}>
                    <div className={"Vortex"}>
                        <div className={"Card_Vortex"}>
                            <Vortex/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}