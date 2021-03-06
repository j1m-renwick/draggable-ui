import {Nav, Navbar} from "react-bootstrap";
import React, {useState} from "react";
import {TemplateDetailsAccordion} from "./TemplateDetailsAccordion";
import {LoadNavLink} from "./LoadNavLink";
import {SaveNavLink} from "./SaveNavLink";
import {ExportNavLink} from "./ExportNavLink";

export function NavBar() {

    const [showDetails, setShowDetails] = useState(false);

    // TODO add a tab for restrictions
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>TEMPLATE UI</Navbar.Brand>
                <Nav>
                    <Nav.Link onClick={() => setShowDetails(!showDetails)}>Details...</Nav.Link>
                    <LoadNavLink/>
                    <SaveNavLink/>
                    <ExportNavLink/>
                </Nav>
            </Navbar>
            <TemplateDetailsAccordion showDetails={showDetails}/>
        </>

    )


}