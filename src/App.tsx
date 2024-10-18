import React, { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";

const App: React.FC = () => {

    return (
        <>
            <ul>
                <li><Link to={"/example1"}>例子1-累加</Link></li>
            </ul>
            <Outlet />
        </>
    )
}

export default App;