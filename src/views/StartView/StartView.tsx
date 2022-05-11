import React, {useState} from "react";

import "./_StartView.css";
import {Header} from "../../components/Header/Header";
import {Separator} from "../../components/Separator/Separator";
import {Form} from "../../components/StartForm/Form/Form";
import {AmountInput} from "../../components/StartForm/AmountInput/AmountInput";
import {FormButton} from "../../components/StartForm/FormButton/FormButton";
import {Vortex} from "../../components/Vortex/Vortex";

export const StartView = () => {
    const [amount, setAmount] = useState(5);
    return (
        <div className={"StartView"}>
            <Header title={"Rick and Morty"}/>
            <Separator/>
            <Form>
                <AmountInput amount={amount} setAmount={setAmount}/>
                <FormButton urlStarted={`/game/${amount}`}/>
            </Form>
            <div className={"Vortex_Box"}>
                <div className={"Vortex"}>
                    <div className={"Card_Vortex"}>
                        <Vortex/>
                    </div>
                </div>
            </div>
        </div>
    )
}