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
            'Which country has the most world cup wins?',
        answer: 'Brazil',
    },
    {
        points: 300,
        question:
            'Which part of the sailboat provides the necessary height and structure to hold and support the sails',
        answer: 'mast',
    },
    {
        points: 400,
        question: 'Which bread of dogs originate from the island of Malta',
        answer: 'Maltese',
    }
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
            points: 400,
            question:
                'Which country has the most amount of gold medals in the Mens Olympic Rowing Category',
            answer: 'The United States',
        },
        {
            points: 200,
            question: 'What animal is this?',
            imgSrc: '/https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCapybara&psig=AOvVaw3CvrM7-TF9hCq0OYqAs_PX&ust=1758044786239000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCMDq_vmr248DFQAAAAAdAAAAABAL',
            answer: 'Capybara',
        },
        {
            points: 300,
            question:
                'What flag is this?',
            imgSrc:
                "Flag_of_Chile.svg.png",
            answer: 'Chile',
        },
        {
            points: 500,
            question:
                'Between which two countries does The Matterhorn lie between?',
            answer: 'Italy and Switzerland'
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
        imgSrc:
            "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'Italy',
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