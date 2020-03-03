const example = {
    "_id": {
        "$oid": "5d7a54e30c068310bad97e32"
    },
    "codeName": "ALG_HFV_AD",
    "description": "Hay fever Adult clinical",
    "type": "CLINICAL",
    "version": "0.1.6",
    "versionDescription": "Fixing triageLevel from 0 to 1 for suicide Q",
    "publicationDateTime": "2019-08-23T17:14:07.205",
    "questions": [
        {
            "codeName": "Q_ALG_HFV_AD_1",
            "type": "FREETEXT",
            "section": "EXPECTATIONS",
            "text1stPerson": "Before we ask you detailed questions about your condition, please tell us what would you like to achieve from this consultation?",
            "guidanceScript1stPerson": "For example: whether you would like to get a prescription for a particular medication",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_1",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_2_SCHECK",
            "type": "SINGLE",
            "section": "EXPECTATIONS",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.SuicideTextChecker",
                    "answerId": "A_ALG_HFV_AD_1"
                }
            ],
            "text1stPerson": "We just want to check: have you had thoughts of suicide or self-harm today or in recent days?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_2_SCHECK_Y",
                    "triageLevel": {
                        "$numberInt": "99"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_3_SCHECK_N",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_3",
            "type": "FREETEXT",
            "section": "EXPECTATIONS",
            "text1stPerson": "How much is this bothering you?",
            "guidanceScript1stPerson": "For example: whether it is affecting your daily activities, your job or your social life",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_4",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV__165_BR1_EXPECTATIONS_1_TREATMENTPAST",
            "type": "SINGLE",
            "section": "EXPECTATIONS",
            "text1stPerson": "Have you tried anything for this in the past?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV__165_BR1_EXPECTATIONS_1_TREATMENTPAST_YES",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_5",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_4",
            "type": "FREETEXT",
            "section": "EXPECTATIONS",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV__165_BR1_EXPECTATIONS_1_TREATMENTPAST_YES"
                }
            ],
            "text1stPerson": "Please tell us what those treatments were",
            "guidanceScript1stPerson": "Treatment names, dosages, when you started and stopped the treatment",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_6",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_5",
            "type": "SINGLE",
            "section": "EXPECTATIONS",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV__165_BR1_EXPECTATIONS_1_TREATMENTPAST_YES"
                }
            ],
            "text1stPerson": "Did they work?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_7",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_8",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                },
                {
                    "codeName": "A_ALG_HFV_AD_9",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Somewhat"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_6",
            "type": "FREETEXT",
            "section": "EXPECTATIONS",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV_AD_9"
                }
            ],
            "text1stPerson": "Please tell us how the treatment has helped.",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_10",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV__165_BR1_EXPECTATIONS_1_TREATMENTNOW",
            "type": "SINGLE",
            "section": "EXPECTATIONS",
            "text1stPerson": "Are you trying anything now?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV__165_BR1_EXPECTATIONS_1_TREATMENTNOW_YES",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_11",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_7",
            "type": "FREETEXT",
            "section": "EXPECTATIONS",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV__165_BR1_EXPECTATIONS_1_TREATMENTNOW_YES"
                }
            ],
            "text1stPerson": "Please tell us what those treatments are",
            "guidanceScript1stPerson": "Treatment names, dosages, when you started the treatment",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_12",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_8",
            "type": "SINGLE",
            "section": "EXPECTATIONS",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV__165_BR1_EXPECTATIONS_1_TREATMENTNOW_YES"
                }
            ],
            "text1stPerson": "Are they working?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_13",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_14",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                },
                {
                    "codeName": "A_ALG_HFV_AD_15",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Somewhat"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_9",
            "type": "FREETEXT",
            "section": "EXPECTATIONS",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV_AD_15"
                }
            ],
            "text1stPerson": "Please tell us how the treatment is helping.",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_16",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_10",
            "type": "SINGLE",
            "section": "EXPECTATIONS",
            "text1stPerson": "Is there any particular treatment you would like to try now?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_17",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_19",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_11",
            "type": "FREETEXT",
            "section": "EXPECTATIONS",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV_AD_17"
                }
            ],
            "text1stPerson": "What treatment would you like to try?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_18",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV__165_BR1_EXPECTATIONS_1_PARTICULARGP",
            "type": "SINGLE",
            "section": "EXPECTATIONS",
            "text1stPerson": "Would you like help from a particular GP? <b>If the doctor that you requested is not available, another doctor at the practice will contact you</b>",
            "text3rdPerson": "Would you like help from a particular GP? <b>If the doctor that you requested is not available, another doctor at the practice will contact you</b>",
            "answers": [
                {
                    "codeName": "A_ALG_HFV__165_BR1_EXPECTATIONS_1_PARTICULARGP_YES",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes",
                    "text3rdPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_20",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No",
                    "text3rdPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_12",
            "type": "FREETEXTSHORT",
            "section": "EXPECTATIONS",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV__165_BR1_EXPECTATIONS_1_PARTICULARGP_YES"
                }
            ],
            "text1stPerson": "Please tell us the name of the GP you would like help from",
            "text3rdPerson": "Please tell us the name of the GP you would like help from",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_21",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "tags": [
                        "PREFERRED_GP"
                    ]
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_13",
            "type": "SINGLE",
            "section": "CLINICAL",
            "text1stPerson": "Have you seen your GP about your hay fever?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_22",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_24",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_14",
            "type": "FREETEXT",
            "section": "CLINICAL",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV_AD_22"
                }
            ],
            "text1stPerson": "What did your GP tell you about your hay fever and were you given any treatment?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_23",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_15",
            "type": "FREETEXT",
            "section": "CLINICAL",
            "text1stPerson": "Please describe your symptoms.",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_25",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_16",
            "type": "SINGLE",
            "section": "CLINICAL",
            "text1stPerson": "How long have you had this problem?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_26",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Less than 1 day"
                },
                {
                    "codeName": "A_ALG_HFV_AD_27",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "1-3 days"
                },
                {
                    "codeName": "A_ALG_HFV_AD_28",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "4-6 days"
                },
                {
                    "codeName": "A_ALG_HFV_AD_29",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "1-4 weeks"
                },
                {
                    "codeName": "A_ALG_HFV_AD_30",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "1-3 months"
                },
                {
                    "codeName": "A_ALG_HFV_AD_31",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "3-6 months"
                },
                {
                    "codeName": "A_ALG_HFV_AD_32",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "More than 6 months"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV__165_BR1_CLINICAL_2_CURRENTFEVER",
            "type": "SINGLE",
            "section": "CLINICAL",
            "text1stPerson": "During this illness have you had a fever?",
            "guidanceScript1stPerson": "A fever or raised temperature can make you feel hot or cold. It can also make you shiver or sweat.",
            "answers": [
                {
                    "codeName": "A_ALG_HFV__165_BR1_CLINICAL_2_CURRENTFEVER_YES",
                    "triageLevel": {
                        "$numberInt": "2"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_33",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_17",
            "type": "SINGLE",
            "section": "CLINICAL",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV__165_BR1_CLINICAL_2_CURRENTFEVER_YES"
                }
            ],
            "text1stPerson": "Have you been abroad to a malarial zone recently?",
            "guidanceScript1stPerson": "If you are not sure whether you travelled to a malarial zone you can check on the <a href=\"http://www.fitfortravel.nhs.uk/\" rel=\"noopener noreferrer\" target=\"_blank\">Fit For Travel</a> website",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_34",
                    "triageLevel": {
                        "$numberInt": "4"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_35",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_18",
            "type": "SINGLE",
            "section": "CLINICAL",
            "text1stPerson": "Do you have any thick green nasal discharge or blood stained nasal discharge?",
            "guidanceScript1stPerson": "Thick green nasal discharge or blood stained nasal discharge suggests a nasal infection",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_36",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_37",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_19",
            "type": "SINGLE",
            "section": "CLINICAL",
            "text1stPerson": "Do you have a cough?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_38",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_39",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_20",
            "type": "SINGLE",
            "section": "CLINICAL",
            "text1stPerson": "Do you have severe wheezing or shortness of breath?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_40",
                    "triageLevel": {
                        "$numberInt": "4"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_41",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_21",
            "type": "SINGLE",
            "section": "CLINICAL",
            "text1stPerson": "Do you have severe swelling of your lips or tongue?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_42",
                    "triageLevel": {
                        "$numberInt": "4"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_43",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_22",
            "type": "SINGLE",
            "section": "CLINICAL",
            "text1stPerson": "Have you had any nasal surgery within the past 6 weeks?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_44",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_46",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_23",
            "type": "FREETEXT",
            "section": "CLINICAL",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV_AD_44"
                }
            ],
            "text1stPerson": "What nasal surgery did you have within the past 6 weeks?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_45",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_24",
            "type": "SINGLE",
            "section": "CLINICAL",
            "text1stPerson": "Have you seen a doctor or nurse about your current hay fever problem?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_47",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_49",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_25",
            "type": "FREETEXT",
            "section": "CLINICAL",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV_AD_47"
                }
            ],
            "text1stPerson": "When did you see a doctor or nurse about this problem and what was the result?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_48",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_26",
            "type": "SINGLE",
            "section": "CLINICAL",
            "text1stPerson": "Is there anything else you think we should know?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_50",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_52",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_27",
            "type": "FREETEXT",
            "section": "CLINICAL",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV_AD_50"
                }
            ],
            "text1stPerson": "What else do we need to know?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_51",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_28",
            "type": "SINGLE",
            "section": "ABOUTYOU",
            "text1stPerson": "Do you have any other medical conditions? For example: gastric ulcer, asthma, heart disease, liver disease, deep vein thrombosis (DVT)",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_53",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_55",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_29",
            "type": "FREETEXT",
            "section": "ABOUTYOU",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV_AD_53"
                }
            ],
            "text1stPerson": "Please tell us what other medical conditions you have. For example: gastric ulcer, asthma, heart disease, liver disease, deep vein thrombosis (DVT).",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_54",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_30",
            "type": "SINGLE",
            "section": "ABOUTYOU",
            "text1stPerson": "Are you taking any prescribed drugs not related to this condition?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_56",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_58",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_31",
            "type": "FREETEXT",
            "section": "ABOUTYOU",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV_AD_56"
                }
            ],
            "text1stPerson": "What other prescribed drugs are you taking?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_57",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_32",
            "type": "SINGLE",
            "section": "ABOUTYOU",
            "text1stPerson": "Are you taking any other drugs? For example: over-the-counter medication from your pharmacist",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_59",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_61",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_33",
            "type": "FREETEXT",
            "section": "ABOUTYOU",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV_AD_59"
                }
            ],
            "text1stPerson": "What other drugs are you taking? For example: over-the-counter medication from your pharmacist.",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_60",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_34",
            "type": "SINGLE",
            "section": "ABOUTYOU",
            "text1stPerson": "Are you receiving any other treatment, like physio?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_62",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_64",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_35",
            "type": "FREETEXT",
            "section": "ABOUTYOU",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV_AD_62"
                }
            ],
            "text1stPerson": "What other treatment are you receiving?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_63",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_36",
            "type": "SINGLE",
            "section": "ABOUTYOU",
            "text1stPerson": "Do you have any family history of illness? For example: heart disease, cancer",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_65",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_67",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_37",
            "type": "FREETEXT",
            "section": "ABOUTYOU",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV_AD_65"
                }
            ],
            "text1stPerson": "Please tell us any family history of illnesses. For example: heart disease, cancer.",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_66",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_38",
            "type": "SINGLE",
            "section": "ABOUTYOU",
            "text1stPerson": "Do you know how many units of alcohol you drink each week? (1 pint of beer is approximately two units and one small glass of wine is 1 unit)",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_68",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Don't know"
                },
                {
                    "codeName": "A_ALG_HFV_AD_69",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Zero"
                },
                {
                    "codeName": "A_ALG_HFV_AD_70",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "1-7 units per week"
                },
                {
                    "codeName": "A_ALG_HFV_AD_71",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "8-14 units per week"
                },
                {
                    "codeName": "A_ALG_HFV_AD_72",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "15-21 units per week"
                },
                {
                    "codeName": "A_ALG_HFV_AD_73",
                    "triageLevel": {
                        "$numberInt": "2"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "22-28 units per week"
                },
                {
                    "codeName": "A_ALG_HFV_AD_74",
                    "triageLevel": {
                        "$numberInt": "2"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "29-35 units per week"
                },
                {
                    "codeName": "A_ALG_HFV_AD_75",
                    "triageLevel": {
                        "$numberInt": "2"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "36-69 units per week"
                },
                {
                    "codeName": "A_ALG_HFV_AD_76",
                    "triageLevel": {
                        "$numberInt": "2"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "More than 70 units per week"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV__165_BR1_ABOUTYOU_3_SMOKE",
            "type": "SINGLE",
            "section": "ABOUTYOU",
            "text1stPerson": "Do you smoke?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV__165_BR1_ABOUTYOU_3_SMOKE_NO-NEVER",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No, I've never smoked"
                },
                {
                    "codeName": "A_ALG_HFV__165_BR1_ABOUTYOU_3_SMOKE_NO-BEFORE",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No, but I used to smoke"
                },
                {
                    "codeName": "A_ALG_HFV__165_BR1_ABOUTYOU_3_SMOKE_YES-LESS5",
                    "triageLevel": {
                        "$numberInt": "2"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "tags": [
                        "SMOKER"
                    ],
                    "text1stPerson": "Yes – less than 5 cigarettes a day"
                },
                {
                    "codeName": "A_ALG_HFV__165_BR1_ABOUTYOU_3_SMOKE_YES-5TO10",
                    "triageLevel": {
                        "$numberInt": "2"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "tags": [
                        "SMOKER"
                    ],
                    "text1stPerson": "Yes – 5 to 10 cigarettes a day"
                },
                {
                    "codeName": "A_ALG_HFV__165_BR1_ABOUTYOU_3_SMOKE_YES-11to20",
                    "triageLevel": {
                        "$numberInt": "2"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "tags": [
                        "SMOKER"
                    ],
                    "text1stPerson": "Yes – between 11 and 20 cigarettes a day"
                },
                {
                    "codeName": "A_ALG_HFV__165_BR1_ABOUTYOU_3_SMOKE_YES-21to40",
                    "triageLevel": {
                        "$numberInt": "2"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "tags": [
                        "SMOKER"
                    ],
                    "text1stPerson": "Yes – between 21 and 40 cigarettes a day"
                },
                {
                    "codeName": "A_ALG_HFV__165_BR1_ABOUTYOU_3_SMOKE_YES-More40",
                    "triageLevel": {
                        "$numberInt": "2"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "tags": [
                        "SMOKER"
                    ],
                    "text1stPerson": "Yes – more than 40 cigarettes a day"
                },
                {
                    "codeName": "A_ALG_HFV__165_BR1_ABOUTYOU_3_SMOKE_NO-OTHER",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "I smoke other things: vapes, cigars or joints"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_39",
            "type": "FREETEXTSHORT",
            "section": "ABOUTYOU",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV__165_BR1_ABOUTYOU_3_SMOKE_NO-OTHER"
                }
            ],
            "text1stPerson": "What other things do you smoke?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_77",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_40",
            "type": "SINGLE",
            "section": "ABOUTYOU",
            "text1stPerson": "Are you allergic to any drugs or creams?",
            "guidanceScript1stPerson": "Some drug allergies may be important when making decisions about what medication to recommend for this condition",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_78",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes"
                },
                {
                    "codeName": "A_ALG_HFV_AD_80",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_41",
            "type": "FREETEXT",
            "section": "ABOUTYOU",
            "visibilityCheckers": [
                {
                    "@class": "com.econsult.consultation.metadata.visibility.RequiredAnswerChecker",
                    "answerId": "A_ALG_HFV_AD_78"
                }
            ],
            "text1stPerson": "What are you allergic to?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_79",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    }
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_42",
            "type": "SINGLE",
            "section": "ABOUTYOU",
            "text1stPerson": "Are you pregnant or have given birth in the last 12 weeks?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_81",
                    "triageLevel": {
                        "$numberInt": "2"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes",
                    "guidanceScript1stPerson": "If you’re pregnant or have just had a baby, please see your GP, midwife or health visitor directly about this."
                },
                {
                    "codeName": "A_ALG_HFV_AD_82",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ],
            "restrictions": [
                {
                    "@class": "com.econsult.consultation.metadata.restriction.GenderRestriction",
                    "gender": "FEMALE"
                },
                {
                    "@class": "com.econsult.consultation.metadata.restriction.AgeRestriction",
                    "maximumAge": "P55Y"
                }
            ]
        },
        {
            "codeName": "Q_ALG_HFV_AD_43",
            "type": "SINGLE",
            "section": "ABOUTYOU",
            "text1stPerson": "Are you breast feeding?",
            "answers": [
                {
                    "codeName": "A_ALG_HFV_AD_83",
                    "triageLevel": {
                        "$numberInt": "2"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "Yes",
                    "guidanceScript1stPerson": "If you’re breastfeeding, please see your GP, midwife or health visitor directly about this."
                },
                {
                    "codeName": "A_ALG_HFV_AD_84",
                    "triageLevel": {
                        "$numberInt": "1"
                    },
                    "groupScore": {
                        "$numberInt": "0"
                    },
                    "text1stPerson": "No"
                }
            ],
            "restrictions": [
                {
                    "@class": "com.econsult.consultation.metadata.restriction.GenderRestriction",
                    "gender": "FEMALE"
                },
                {
                    "@class": "com.econsult.consultation.metadata.restriction.AgeRestriction",
                    "maximumAge": "P55Y"
                }
            ]
        }
    ],
    "restrictions": [
        {
            "@class": "com.econsult.consultation.metadata.restriction.AgeRestriction",
            "minimumAge": "P18Y",
            "maximumAge": "P126Y"
        }
    ]
}