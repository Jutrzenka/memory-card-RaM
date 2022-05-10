import React from "react";
import {Link} from "react-router-dom";
import {Vortex} from "../../../components/Vortex/Vortex";

export const ThisErrorIsNotExist = () => {
    return (
        <div className={"Error"}>
            <div className={"ThisErrorIsNotExist Error_wrapper"}>
                <h2 className={"Error_title"}>This guy did it!</h2>
                <h3 className={"Error_code"}>Code 404</h3>
                <p className={"Error_description textError"}>
                    This path to error communicate is invalid
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