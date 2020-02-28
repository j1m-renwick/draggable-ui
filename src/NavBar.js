import {Nav, Navbar} from "react-bootstrap";
import React, {useState} from "react";
import {TemplateDetailsAccordion} from "./TemplateDetailsAccordion";
import {LoadNavLink} from "./LoadNavLink";

export function NavBar() {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">TEMPLATE UI</Navbar.Brand>
                <Nav>
                    <Nav.Link onSelect={() => setShowDetails(!showDetails)} href="#details">Details...</Nav.Link>
                    <Nav.Link href="#save">Save</Nav.Link>
                    <LoadNavLink/>
                </Nav>
            </Navbar>
            <TemplateDetailsAccordion showDetails={showDetails}/>
        </>

    )


}