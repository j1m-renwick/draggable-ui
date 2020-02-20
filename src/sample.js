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
            "answer": "Yes"
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

// export const sample = [
//     {
//         id: "9890c7a3-033f-4d13-9176-27b72915682a",
//         type: "spiral-icon",
//         level: 0,
//         config: {
//             title: {
//                 id: "8625aeb9-5d06-4d90-bee4-d16e86ffc99a",
//                 value: "item one",
//                 linkable: false
//             },
//             question: {
//                 id: "a17d88f2-66d1-4db2-89c9-795a15eb35ec",
//                 value: "Who's house?",
//                 linkable: false
//             },
//             answers: [
//                 {
//                     id: "061f17f8-ef1d-4e6e-845e-9c06a432ca20",
//                     value: "Run's house",
//                     linkable: true,
//                     linkedId: "5c6e4997-ab58-442a-be0b-ca91eb18d63b"
//                 },
//                 {
//                     id: "03dc2743-a9c0-4c80-90f3-901c5cea0765",
//                     value: "Joe's house",
//                     linkable: true,
//                     linkedId: "01072689-9163-4d3f-987f-7483bb7bfc37"
//                 }
//             ]
//         }
//     },
//     {
//         id: "5c6e4997-ab58-442a-be0b-ca91eb18d63b",
//         type: "equals-icon",
//         level: 1,
//         config: {
//             title: {
//                 id: "e0be3cf0-2d89-4df6-a626-6d61b8dc713b",
//                 value: "item two",
//                 linkable: false
//             },
//             question: {
//                 id: "02192f8f-25eb-4eb8-b841-9815078db40c",
//                 value: "Enough now?",
//                 linkable: false
//             },
//             answer: {
//                     id: "09ec2098-3aeb-4bf5-8c38-abb13c3b8944",
//                     value: "Yes",
//                     linkable: true
//             }
//         }
//     },
//     {
//         id: "01072689-9163-4d3f-987f-7483bb7bfc37",
//         type: "pic-icon",
//         level: 1,
//         config: {
//             title: {
//                 id: "ab826236-12dd-4698-9ecb-acea1cb433a6",
//                 value: "item three",
//                 linkable: false
//             },
//             question: {
//                 id: "458defec-9b57-4ad8-8e22-e32dd17a19e0",
//                 value: "Hello?",
//                 linkable: false
//             },
//             answer: {
//                 id: "26357734-56b5-4038-b5bf-7182129661c9",
//                 value: "Something unrenderable",
//                 linkable: true
//             }
//         }
//     }
// ];