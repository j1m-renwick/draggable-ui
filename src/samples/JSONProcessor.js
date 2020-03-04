// code generator takes a UUID and supplies a codeName - the same one if the UUID has already been passed, otherwise a new one

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

const exampleToSave = {
    currentLevel: 0,
    linkageInProgress: false,
    linkageReference: null,
    hoveredLinkId: null,
    boxes: {
        '9890c7a3-033f-4d13-9176-27b72915682a': {
            id: '9890c7a3-033f-4d13-9176-27b72915682a',
            type: 'spiral-icon',
            x: 0,
            y: 0
        },
        '5c6e4997-ab58-442a-be0b-ca91eb18d63b': {
            id: '5c6e4997-ab58-442a-be0b-ca91eb18d63b',
            type: 'equals-icon',
            x: 0,
            y: 121
        },
        '01072689-9163-4d3f-987f-7483bb7bfc37': {
            id: '01072689-9163-4d3f-987f-7483bb7bfc37',
            type: 'pic-icon',
            x: 100,
            y: 121
        }
    },
    config: {
        '9890c7a3-033f-4d13-9176-27b72915682a': {
            title: {
                value: 'item one'
            },
            question: {
                value: 'Who\'s house?'
            },
            answers: {
                '061f17f8-ef1d-4e6e-845e-9c06a432ca20': {
                    value: 'Run\'s house',
                    linkable: true,
                    linkedId: '5c6e4997-ab58-442a-be0b-ca91eb18d63b'
                },
                '03dc2743-a9c0-4c80-90f3-901c5cea0765': {
                    value: 'Joe\'s house',
                    linkable: true,
                    linkedId: '01072689-9163-4d3f-987f-7483bb7bfc37'
                }
            }
        },
        '5c6e4997-ab58-442a-be0b-ca91eb18d63b': {
            title: {
                value: 'item two'
            },
            question: {
                value: 'Enough now?'
            },
            answers: {
                'e8a41ae0-fd8e-4bd4-aec8-65dcc4da64f9': {
                    linkable: true,
                    value: 'Yes'
                }
            }
        },
        '01072689-9163-4d3f-987f-7483bb7bfc37': {
            title: {
                value: 'item three'
            },
            question: {
                value: 'Hello?'
            },
            answers: {
                '8119942f-c12c-424c-94fb-61e243e8e773': {
                    linkable: true,
                    value: 'Yes'
                }
            }
        }
    },
    children: {
        '9890c7a3-033f-4d13-9176-27b72915682a': [
            '5c6e4997-ab58-442a-be0b-ca91eb18d63b',
            '01072689-9163-4d3f-987f-7483bb7bfc37'
        ],
        '5c6e4997-ab58-442a-be0b-ca91eb18d63b': [],
        '01072689-9163-4d3f-987f-7483bb7bfc37': []
    }
};

function process(stateJson) {

    let generatedJson = {};
    generatedJson["codeName"] = "SOME_CODENAME";
    generatedJson["description"] = "Some description";
    generatedJson["type"] = "SOME_TYPE";
    generatedJson["version"] = "1.2.3";
    generatedJson["versionDescription"] = "some version description";
    generatedJson["publicationDateTime"] = new Date().toISOString();
    generatedJson["questions"] = [];
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
            "type": boxJson.type,
            "section": "EXPECTATIONS",
            "visibilityCheckers": [],
            "text1stPerson": configJson.question.value,
            "guidanceScript1stPerson": "Some guidance text here",
            "answers": []
        };

        let answerCode;
        Object.entries(configJson.answers).forEach(answerItem => {
            answerCode = answerGenerator.getCode(answerItem[0]);
            question.answers.push({
                "codeName": answerCode,
                "triageLevel": {
                    "$numberInt": "someIntHere"
                },
                "groupScore": {
                    "$numberInt": "someIntHere"
                },
                "text1stPerson": answerItem[1].value
            });
            if(answerItem[1].linkedId) {
                generatedJson.questions.push(generateQuestionFromBoxType(answerItem[1].linkedId, stateJson.boxes[answerItem[1].linkedId], stateJson.config[answerItem[1].linkedId], stateJson.children[answerItem[1].linkedId], answerCode));
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

console.dir(process(exampleToSave));