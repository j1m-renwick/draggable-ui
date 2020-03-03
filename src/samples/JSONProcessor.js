
const codeGenerator = (prefix, typeCode) => {
    let instance = {};
    let code = typeCode;
    let questionNumber = 0;

    instance.getNextCode = () => {
        questionNumber += 1;
        return prefix + '_' + code + '_' + questionNumber;
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
                    linkedId: '5c6e4997-ab58-442a-be0b-ca91eb18d63b'
                },
                '03dc2743-a9c0-4c80-90f3-901c5cea0765': {
                    value: 'Joe\'s house',
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
                alias: 'answer',
                '4e728edc-974a-4590-a6ee-1c67b4e5bb04': {
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
                alias: 'answer',
                '6fe41f6a-aa7a-4d05-b9ae-9b97bd1b93e9': {
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
    let answerGenerator = codeGenerator( 'A', 'SOME_TYPE');

    /*
        OK....

        1) get all boxes with no children
        2) for these, call the generateQuestionFromBoxType
        3) make generateQuestionFromBoxType recursive so if there are linked children, fire another generateQuestionFromBoxType call
        4) generateQuestionFromBoxType to set visibilityCheckers

     */

    Object.entries(stateJson.children).forEach(entry => {
        let key = entry[0];
        let configJson = stateJson.config[key];
        let childrenJson = stateJson.children[key];
        // console.dir(value);
        // console.dir(jsonForQuestion);
        generatedJson.questions.push(generateQuestionFromBoxType(key, childrenJson, configJson));
    });

    return generatedJson;

    function generateQuestionFromBoxType(questionId, childrenJson, configJson) {
        let question = {
            "codeName": questionGenerator.getNextCode(),
            "type": "FREETEXT",
            "section": "EXPECTATIONS",
            "visibilityCheckers": [],
            "text1stPerson": configJson.question.value,
            "guidanceScript1stPerson": "For example: whether you would like to get a prescription for a particular medication",
            "answers": []
        };
        // add answers and add them to the guid map
        Object.entries(configJson.answers).filter(item => item[0] !== "alias").forEach(answerItems => {
            let answerCode = answerGenerator.getNextCode();
            question.answers.push({
                "codeName": answerCode,
                "triageLevel": {
                    "$numberInt": "1"
                },
                "groupScore": {
                    "$numberInt": "0"
                }
            });
        });

        return question;
    }
}

// {
//     "codeName": questionGenerator.getNextCode(),
//     // "codeName": "Q_ALG_HFV_AD_1",
//     "type": "FREETEXT",
//     "section": "EXPECTATIONS",
//     "visibilityCheckers": [
//     {
//         "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
//         "answerId": "A_ALG_HFV__165_BR1_EXPECTATIONS_1_TREATMENTPAST_YES"
//     }
// ],
//     "text1stPerson": sourceJson.question,
//     "guidanceScript1stPerson": "For example: whether you would like to get a prescription for a particular medication",
//     "answers": [
//     {
//         "codeName": "A_ALG_HFV_AD_1",
//         "triageLevel": {
//             "$numberInt": "1"
//         },
//         "groupScore": {
//             "$numberInt": "0"
//         }
//     }
// ]
// }

console.dir(process(exampleToSave));