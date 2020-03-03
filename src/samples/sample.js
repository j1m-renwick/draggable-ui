// export const exampleToLoad = [
//     {
//         "id": "9890c7a3-033f-4d13-9176-27b72915682a",
//         "type": "spiral-icon",
//         "level": 0,
//         "config": {
//             "title": {
//                 "value": "item one"
//             },
//             "question": {
//                 "value": "Who's house?"
//             },
//             "answers": {
//                 "061f17f8-ef1d-4e6e-845e-9c06a432ca20": {
//                     "value": "Run's house",
//                     "linkable": true
//                 },
//                 "03dc2743-a9c0-4c80-90f3-901c5cea0765": {
//                     "value": "Joe's house",
//                     "linkable": true
//                 }
//             }
//         },
//         "children": []
//     },
//     {
//         "id": "5c6e4997-ab58-442a-be0b-ca91eb18d63b",
//         "type": "equals-icon",
//         "level": 1,
//         "config": {
//             "title": {
//                 "value": "item two"
//             },
//             "question": {
//                 "value": "Enough now?"
//             },
//             "answer": {
//                 "value": "Yes",
//                 "linkable": true
//             }
//         },
//         "children": []
//     },
//     {
//         "id": "01072689-9163-4d3f-987f-7483bb7bfc37",
//         "type": "pic-icon",
//         "level": 1,
//         "config": {
//             "title": {
//                 "value": "item three"
//             },
//             "question": {
//                 "value": "Hello?"
//             },
//             "answer": {
//                 "value": "Something unrenderable",
//                 "linkable": true
//             }
//         },
//         "children": []
//     }
// ];

/*
  strip out:
  "currentLevel"
  "linkageInProgress"
  "linkageReference"
  "hoveredLinkId"
  "focusedBoxId"
  "focusContext"
  "focusBoxType"

  convert y value to level


 */

export const exampleToSave = {
    "currentLevel": 0,
    "linkageInProgress": false,
    "linkageReference": null,
    "hoveredLinkId": null,
    "boxes": {
        "9890c7a3-033f-4d13-9176-27b72915682a": {
            "id": "9890c7a3-033f-4d13-9176-27b72915682a",
            "type": "spiral-icon",
            "x": 0,
            "y": 0
        },
        "5c6e4997-ab58-442a-be0b-ca91eb18d63b": {
            "id": "5c6e4997-ab58-442a-be0b-ca91eb18d63b",
            "type": "equals-icon",
            "x": 0,
            "y": 121
        },
        "01072689-9163-4d3f-987f-7483bb7bfc37": {
            "id": "01072689-9163-4d3f-987f-7483bb7bfc37",
            "type": "pic-icon",
            "x": 0,
            "y": 242
        },
        "21ac13f9-584e-4d53-a617-9c582cc2f1fa": {
            "id": "21ac13f9-584e-4d53-a617-9c582cc2f1fa",
            "type": "equals-icon",
            "x": 100,
            "y": 121
        }
    },
    "config": {
        "9890c7a3-033f-4d13-9176-27b72915682a": {
            "title": {
                "value": "item one"
            },
            "question": {
                "value": "Who's house?"
            },
            "answers": {
                "061f17f8-ef1d-4e6e-845e-9c06a432ca20": {
                    "value": "Run's house",
                    "linkable": true,
                    "linkedId": "5c6e4997-ab58-442a-be0b-ca91eb18d63b"
                },
                "03dc2743-a9c0-4c80-90f3-901c5cea0765": {
                    "value": "Joe's house",
                    "linkable": true,
                    "linkedId": "21ac13f9-584e-4d53-a617-9c582cc2f1fa"
                }
            }
        },
        "5c6e4997-ab58-442a-be0b-ca91eb18d63b": {
            "title": {
                "value": "item two"
            },
            "question": {
                "value": "Enough now?"
            },
            "answer": {
                "value": "Yes",
                "linkable": true,
                "linkedId": "01072689-9163-4d3f-987f-7483bb7bfc37"
            }
        },
        "01072689-9163-4d3f-987f-7483bb7bfc37": {
            "title": {
                "value": "item three"
            },
            "question": {
                "value": "Hello?"
            },
            "answer": {
                "value": "Something unrenderable",
                "linkable": true
            }
        },
        "21ac13f9-584e-4d53-a617-9c582cc2f1fa": {
            "title": {
                "value": ""
            },
            "question": {
                "value": ""
            },
            "answer": {
                "value": "",
                "linkable": true
            }
        }
    },
    "children": {
        "9890c7a3-033f-4d13-9176-27b72915682a": [
            "5c6e4997-ab58-442a-be0b-ca91eb18d63b",
            "21ac13f9-584e-4d53-a617-9c582cc2f1fa"
        ],
        "5c6e4997-ab58-442a-be0b-ca91eb18d63b": [
            "01072689-9163-4d3f-987f-7483bb7bfc37"
        ],
        "01072689-9163-4d3f-987f-7483bb7bfc37": [],
        "21ac13f9-584e-4d53-a617-9c582cc2f1fa": []
    },
    "focusedBoxId": "9890c7a3-033f-4d13-9176-27b72915682a",
    "focusContext": "VIEW_PORT",
    "focusBoxType": "spiral-icon"
};