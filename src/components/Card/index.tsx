import React from "react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

const Card = ({ children, className } : Props) => {

    return (
        <div className={`px-8 py-8 ${className}`}>
            {children}
        </div>
    )
}

export default Card