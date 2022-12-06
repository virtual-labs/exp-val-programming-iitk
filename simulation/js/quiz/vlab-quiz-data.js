/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "What is the number of degree of freedom (DOF) in PUMA560 robot",
            "a": [
                {"option": "5", "correct": false},
                {"option": "7", "correct": false},
                {"option": "6", "correct": true},
                {"option": "None of this", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How many joints are there in the wrist of the PUMA560 robot",
            "a": [
                {"option": "2", "correct": false},
                {"option": "4", "correct": false},
                {"option": "3", "correct": true},
                {"option": "1", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the Pz positional value of the PUMA560 robot in a configuration [60, -85, -27, 0, 0, 0]",
            "a": [
                {"option": "0.611 m", "correct": true},
                {"option": "0.219 m", "correct": false},
                {"option": "0.377 m", "correct": false},
                {"option": "-0.219 m", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4
            "q": "How many prismatic joints are there in the PUMA robot ",
            "a": [
                {"option": "2", "correct": false},
                {"option": "0", "correct": true},
                {"option": "1", "correct": false},
                {"option": "6", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 5
            "q": "What is the range of waist joint",
            "a": [
                {"option": "&plusmn; 360", "correct": false},
                {"option": "&plusmn; 340", "correct": false},
                {"option": "&plusmn; 320", "correct": true},
                {"option": "&plusmn; 300", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
    ]
};

