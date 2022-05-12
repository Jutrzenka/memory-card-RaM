import React, {ReactElement} from "react";

interface Props {
    data:any;
    loading:boolean;
    error:boolean;
    children: ReactElement;
}

export const FetchComponent = ({data, loading, error, children}:Props) => {
    if (!error) {
        if (!loading) {
            if (data !== null) {
                return children
            } else {
                return null;
            }
        } else {
            return <h2>Loading...</h2>
        }
    } else {
        return <h2>Error</h2>
    }
}