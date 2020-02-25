import {Accordion, Card, Col, FormControl, InputGroup, Row} from "react-bootstrap";
import React from "react";

export function TemplateDetailsAccordion(props) {

    return (
        <Accordion activeKey={props.showDetails}>
            <Card>
                <Accordion.Collapse eventKey={true}>
                    <Card.Body>
                        <Row>
                            <Col xs={3}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="template-code">Code</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Code here..."
                                        aria-label="Code"
                                        aria-describedby="template-code"
                                    />
                                </InputGroup>
                            </Col>
                            <Col xs={3}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="template-type">Template type</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Dropdown...?"
                                        aria-label="Template Type"
                                        aria-describedby="template-type"
                                    />
                                </InputGroup>
                            </Col>
                            <Col xs={3}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="template-version">Version #</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Version here..."
                                        aria-label="Template Version"
                                        aria-describedby="template-version"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={9}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="template-description">Template description</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Template description here..."
                                        aria-label="Description"
                                        aria-describedby="template-description"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={9}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="template-version-desc">Version description</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Version description here..."
                                        aria-label="Version Description"
                                        aria-describedby="template-version-desc"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}