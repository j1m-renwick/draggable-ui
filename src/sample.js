export const sample = [
    {
        "id": "9890c7a3-033f-4d13-9176-27b72915682a",
        "type": "spiral-icon",
        "level": 0,
        "config": {
            "title": "item one",
            "question": "Who's house?",
            "answers": ["Run's house", "Joe's house"]
        },
        "children": [
            {
                "childId": "5c6e4997-ab58-442a-be0b-ca91eb18d63b",
                "linkedAnswer": "Run's house"
            },
            {
                "childId": "01072689-9163-4d3f-987f-7483bb7bfc37",
                "linkedAnswer": "Joe's house"
            }
        ]
    },
    {
        "id": "5c6e4997-ab58-442a-be0b-ca91eb18d63b",
        "type": "equals-icon",
        "level": 1,
        "config": {
            "title": "item two",
            "question": "Enough now?",
            "answers": ["Yes", "No"]
        }
    },
    {
        "id": "01072689-9163-4d3f-987f-7483bb7bfc37",
        "type": "pic-icon",
        "level": 1,
        "config": {
            "title": "item three",
            "question": "Hello?",
            "answers": ["Hello!"]
        }
    }
];