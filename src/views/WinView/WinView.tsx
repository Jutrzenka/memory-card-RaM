import React from "react";

import "./_WinView.css";
import {Link, useParams} from "react-router-dom";
import {Vortex} from "../../components/Vortex/Vortex";

export const WinView = () => {
    const {turns} = useParams();
    return (
        <div className={"WinView"}>
            <div className={"WinView_div"}>
                <div className={"WinView_wrapper"}>
                    <h2 className={"WinView_title win"}>You win with {turns} turns</h2>
                    <p className={"WinView_description win"}>
                        Nobody exists on purpose.
                    </p>
                    <p className={"WinView_description win"}>
                        Nobody belongs anywhere.
                    </p>
                    <p className={"WinView_description win"}>
                        We’re all going to die.
                    </p>
                    <p className={"WinView_description win"}>
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