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
                <Navbar.Brand href="#home">TEMPLATE UI</Navbar.Brand>
                <Nav>
                    <Nav.Link onSelect={() => setShowDetails(!showDetails)} href="#details">Details...</Nav.Link>
                    <LoadNavLink/>
                    <SaveNavLink/>
                    <ExportNavLink/>
                </Nav>
            </Navbar>
            <TemplateDetailsAccordion showDetails={showDetails}/>
        </>

    )


}