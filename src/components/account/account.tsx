import React, {useState} from "react";
import './account.scss'

export default function Account() {

    const [active, setActive] = useState('profile')

    return <div className="account">

        <h1>Account</h1>

        <div className="account__wrapper">
            <div className="account__nav">
                <div className="account__nav-item" onClick={() => setActive('profile')}>Profile</div>
                <div className="account__nav-item" onClick={() => setActive('settings')}>Settings</div>
            </div>

            {active === 'profile' && <div className="account__nav-content">Profile</div>}
            {active === 'settings' && <div className="account__nav-content">Settings</div>}
        </div>

    </div>
}