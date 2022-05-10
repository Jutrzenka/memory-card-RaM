import React from "react";
import {Link} from "react-router-dom";
import {Vortex} from "../../../components/Vortex/Vortex";

export const WrongAmount = () => {
    return (
        <div className={"Error"}>
            <div className={"WrongAmount Error_wrapper"}>
                <h2 className={"Error_title"}>Thanks, Mr. Poopybutthole.</h2>
                <h2 className={"Error_title"}>I always could count on you.</h2>
                <h3 className={"Error_code"}>Code 406</h3>
                <p className={"Error_description textError"}>
                    Set amount is invalid
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