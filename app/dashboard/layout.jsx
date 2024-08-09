import React from 'react'

import Navbar from '../ui/dashboard/navbar/navbar'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
function layout({ children }) {
    return (
        <div>
            <div><Navbar /></div>
            <div><Sidebar /></div>
            <div>{children}</div>
        </div>
    )
}

export default layout