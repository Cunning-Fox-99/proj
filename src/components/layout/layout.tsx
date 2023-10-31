import React from "react";
import Nav from "../nav/nav";

export default function Layout({el}:any) {

    return <div className="wrapper">
        <Nav />
        {el}
    </div>
}