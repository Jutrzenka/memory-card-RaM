import React from "react";

import "./_WinView.css";
import {Link, useParams} from "react-router-dom";
import {Vortex} from "../../components/Vortex/Vortex";

export const WinView = () => {
    const {turns} = useParams();
    return (
        <div className={"WinView"}>
            <div className={"WinView_div"}>
                <div className={"ThisErrorIsNotExist Error_wrapper"}>
                    <h2 className={"Error_title win"}>You win with {turns} turns</h2>
                    <p className={"Error_description textError win"}>
                        Nobody exists on purpose.
                    </p>
                    <p className={"Error_description textError win"}>
                        Nobody belongs anywhere.
                    </p>
                    <p className={"Error_description textError win"}>
                        We’re all going to die.
                    </p>
                    <p className={"Error_description textError win"}>
                        Come watch TV.
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
        </div>
    )
}