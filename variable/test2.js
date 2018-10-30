const subject = 'Math'; // String
const point = 8; // int
const isGood = true; // bool

const curriculums = [ // JSON
    {
        subject: 'English',
        point: 3,
    }, {
        subject: 'Bahasa',
        point: 9,
    }, {
        subject: 'Computer Science',
        point: 10,
    }
];

const minion = ['Kevin', 'Bob', 'Dave']; // array

const subjectToStudy = { // object
    subjectName: 'Physics',
    point: 7,
    chapter: {
        number: 1,
        name: 'introduction',
        points: {
            number: '1A',
            name: 'Get to know about Quantum Physics',
        }
    }
}

// console.log(`Subject ${subjectToStudy.subjectName}`);
// console.log(`Number ${subjectToStudy.chapter.number}`);
// console.log(`Name ${subjectToStudy.chapter.name}`);
// console.log(`Topic number ${subjectToStudy.chapter.points.number} Explains about ${subjectToStudy.chapter.points.name}`);