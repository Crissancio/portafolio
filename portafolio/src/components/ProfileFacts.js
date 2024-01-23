import React from "react";
import '../styles/ProfileFacts.css'

function ProfileFacts({yearExp, compPro, satisfaceCustomer}) {
    return(
        <div className="facts-container">
            <div>
                <p>{yearExp}</p>
                <p>Years of work</p>
                <p>experience</p>
            </div>
            <div>
                <p>{compPro}</p>
                <p>Complete</p>
                <p>projects</p>
            </div>
            <div>
                <p>{satisfaceCustomer}</p>
                <p>satisface</p>
                <p>customers</p>
            </div>
        </div>
    );
}

export default ProfileFacts;