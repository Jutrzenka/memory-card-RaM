import React, {ReactNode} from "react";

import "./_Form.css";

interface Props {
    children: ReactNode;
}

export const Form = ({children}:Props) => {
    return (
        <div className={"Form"}>
            <div className={"Form_wrapper"}>
                {children}
            </div>
        </div>
    )
}