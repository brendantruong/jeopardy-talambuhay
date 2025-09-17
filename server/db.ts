import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What is the capitol of Vietnam?',
        answer: 'Hanoi',
    },
    {
        points: 200,
        question:
            'Which Board Games are these characters from?',
            imgSrc: 'https://agreeordie.com/wp-content/uploads/2016/03/coup-hero.jpg',
        answer: 'Coup',
    },
    {
            points: 300,
            question:
                'Between which two countries does The Matterhorn lie between?',
            answer: 'Italy and Switzerland'
        },

    {
        points: 400,
        question: 'Which bread of dogs originate from the island of Malta',
        answer: 'Maltese',
    },
   
    
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'What Logo is this',
            imgSrc: 'Shake_Shack.png',
            answer: 'Shake Shack',
        },
        {
            points: 500,
            question:
                'Which country has the most amount of gold medals in the Mens Olympic Rowing Category',
            answer: 'The United States',
        },
        {
            points: 200,
            question: 'What flag is this?',
            imgSrc: '/Flag_of_Chile.svg.png',
            answer: 'Chile',
        },
          {
            points: 400,
            question:
                'What company does the watch type Vivoactive 5 belong to',
            answer: 'Garmin',
        },
        {
    
            points: 300,
            question: 'What animal is this?',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Hydrochoeris_hydrochaeris_in_Brazil_in_Petr%C3%B3polis%2C_Rio_de_Janeiro%2C_Brazil_09.jpg/500px-Hydrochoeris_hydrochaeris_in_Brazil_in_Petr%C3%B3polis%2C_Rio_de_Janeiro%2C_Brazil_09.jpg',
            answer: 'Capybara',
        },
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What sport is the HM Club PickleAid about?',
        answer: 'Pickleball',
    },
    {
points: 200,
question: 'What is the name of the thinnest iPhone?',
answer: 'iPhone Air'
    },
    {
points: 300,
question: 'Which rowing club was named Best Rowing Club of the year in America this past year',
answer: 'Row America Rye'
    }
]);


const categories = [
    {
        title: 'Brendans Past',
        questions: pastQuestions
    },
    {
        title: 'Brendans Present',
        questions: presentQuestions
    },
    {
        title: 'Brendans Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}