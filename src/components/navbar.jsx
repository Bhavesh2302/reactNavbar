import React from "react"
import Anchor from "./Anchor"



const Navbar = () => {

    let links = [
        { link: "Services" },
        { link: "Project" },
        { link: "About" }
    ]
    return (

        <div id="navbar">

            <div id="logobak">LOGOBAKERY</div>
            <div class="anch">
                
                {links.map((data) => (
                    <Anchor {...data} />
                ))}

            </div>
            <div>
                <button class="btn">Contact</button>
            </div>



        </div>

    )



}

export default Navbar