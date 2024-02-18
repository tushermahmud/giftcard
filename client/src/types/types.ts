export type User = {
    id: number;
    role: string;
    email: string;
    username: string;
    password: string;
}

export enum UserType {
    ADMIN = 'admin',
    USER = 'user'
}

export type Question = {
    id: number;
    question: string;
    answer: string;
    options: string[];
}

export type Answer = {
    questionId: number;
    answer: string;
}

