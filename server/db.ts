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
            imgSrc: '//www.google.com/url?sa=i&url=https%3A%2F%2Fagreeordie.com%2Fcoup-review-howto-variants%2F&psig=AOvVaw0xwa_mGOUk4OPu8RcPIzT7&ust=1758217389892000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCOD-of-u4I8DFQAAAAAdAAAAABAE',
        answer: 'Coup',
    },
    {
        points: 300,
        question:
            'Between which two countries does the Matterhorn lie between',
        answer: 'Italy and Switzerland',
    },
    {
        points: 400,
        question: '',
        answer: '',
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
            points: 300,
            question: 'What flag is this?',
            imgSrc: '/Flag_of_Chile.svg.png',
            answer: 'Chile',
        },
        {
            points: 200,
            question:
                'What NBA team logo is this?',
            imgSrc:
                "https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg",
            answer: 'Brooklyn Nets',
        },
        {
            points: 500,
            question:
            'What game are these characters from?',
            imgSrc: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fagreeordie.com%2Fcoup-review-howto-variants%2F&psig=AOvVaw0e2FMjWNfnHIqBuhKKgdn4&ust=1757888683533000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCJj2-bPm1o8DFQAAAAAdAAAAABAE",
            answer: 'Coup'

        }
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