import {Accordion, Card, Col, Row} from "react-bootstrap";
import React from "react";
import {TemplateDetailsInputField} from "./TemplateDetailsInputField";

export function TemplateDetailsAccordion(props) {

    return (
        <Accordion activeKey={props.showDetails}>
            <Card>
                <Accordion.Collapse eventKey={true}>
                    <Card.Body>
                        <Row>
                            <Col xs={3}>
                                <TemplateDetailsInputField label="Template Code" fieldId="templateCode" placeholder="Code here..."/>
                            </Col>
                            <Col xs={3}>
                                <TemplateDetailsInputField label="Template Type" fieldId="templateType" placeholder="Dropdown...?"/>
                            </Col>
                            <Col xs={3}>
                                <TemplateDetailsInputField label="Version #" fieldId="templateVersion" placeholder="Version here..."/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={9}>
                                <TemplateDetailsInputField label="Template Description" fieldId="templateDescription" placeholder="Template description here..."/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={9}>
                                <TemplateDetailsInputField label="Template Version Description" fieldId="templateVersionDescription" placeholder="Version description here..."/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}