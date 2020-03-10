import {exportTypeMap} from "../constants/BoxTypeClasses";

// code generator takes a UUID and supplies a codeName - the same one if the GUID has already been passed, otherwise a new one
const codeGenerator = (prefix, typeCode) => {
    let instance = {};
    let type = typeCode;
    let questionNumber = 0;
    const codeMap = {};

    instance.getCode = (guid) => {
        if(!codeMap.hasOwnProperty(guid)) {
            questionNumber += 1;
            let codeToReturn = prefix + '_' + type + '_' + questionNumber;
            codeMap[guid] = codeToReturn;
            return codeToReturn;
        } else {
            return codeMap[guid];
        }
    };

    return instance;
};

export function process(stateJson) {

    let generatedJson = {};
    generatedJson.codeName = stateJson.projectDetails.templateCode;
    generatedJson.description = stateJson.projectDetails.templateDescription;
    generatedJson.type = stateJson.projectDetails.templateType;
    generatedJson.version = stateJson.projectDetails.templateVersion;
    generatedJson.versionDescription = stateJson.projectDetails.templateVersionDescription;
    generatedJson.publicationDateTime = new Date().toISOString();
    generatedJson.questions = [];
    let questionGenerator = codeGenerator('Q', 'SOME_TYPE');
    let answerGenerator = codeGenerator('A', 'SOME_TYPE');

    /*
        OK....

        1) get all boxes that are not children
        2) for these, call the generateQuestionFromBoxType
        3) make generateQuestionFromBoxType recursive so if there are linked children, fire another generateQuestionFromBoxType call
        4) generateQuestionFromBoxType to set visibilityCheckers

     */

    let children = Object.values(stateJson.children).flat();

    Object.keys(stateJson.boxes).filter(id => !children.includes(id)).forEach(key => {
        let boxJson = stateJson.boxes[key];
        let configJson = stateJson.config[key];
        let childrenJson = stateJson.children[key];
        generatedJson.questions.push(generateQuestionFromBoxType(key, boxJson, configJson, childrenJson));
    });

    return generatedJson;

    function generateQuestionFromBoxType(id, boxJson, configJson, childrenJson, parentAnswer) {

        let questionCode = questionGenerator.getCode(id);

        let question = {
            "codeName": questionCode,
            "type": exportTypeMap[boxJson.type],
            "section": "EXPECTATIONS",
            "visibilityCheckers": [],
            "text1stPerson": configJson.question.value,
            "guidanceScript1stPerson": configJson.guidance.value,
            "answers": []
        };

        // TODO add restrictions to configuration data and map out

        let answerCode;
        Object.entries(configJson.answers).forEach(answerItem => {
            answerCode = answerGenerator.getCode(answerItem[0]);
            let data = answerItem[1];
            question.answers.push({
                "codeName": answerCode,
                "triageLevel": {
                    "$numberInt": "someIntHere"
                },
                "groupScore": {
                    "$numberInt": "someIntHere"
                },
                "text1stPerson": data.value
            });
            if(data.linkedId) {
                generatedJson.questions.push(generateQuestionFromBoxType(data.linkedId, stateJson.boxes[data.linkedId], stateJson.config[data.linkedId], stateJson.children[data.linkedId], answerCode));
            }
        });

        if(parentAnswer !== undefined) {
            question.visibilityCheckers.push({
                "@class": "some.fully.qualified.class.here",
                "answerId": parentAnswer
            });
        }

        return question;
    }
}