import { Question, User, UserType } from "./types/types"
export const admin: User = {
    id: 1,
    role: UserType.ADMIN,
    email: "admin@gmail.com",
    password: "admin"
}

export const user: User = {
    id: 2,
    role:UserType.USER,
    email: "user@gmail.com",
    password: "user"
}


export const userRoles = [
    UserType.USER,
    UserType.ADMIN
]

export const questions: Question[] = [
    {
        id: 1,
        question: "What is the role of the admin user?",
        options: ["User", "Admin", "Guest", "None"],
        answer: "Admin"
    },
    {
        id: 2,
        question: "What is the email of the user?",
        options: ["admin@gmail.com", "user@gmail.com", "guest@gmail.com", "none"],
        answer: "user@gmail.com"
    },
    {
        id: 3,
        question: "What is the password of the admin user?",
        options: ["admin", "user", "guest", "none"],
        answer: "admin"
    },
    {
        id: 4,
        question: "What is the id of the user?",
        options: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        id: 5,
        question: "What is the role of the user?",
        options: ["User", "Admin", "Guest", "None"],
        answer: "User"
    },
    {
        id: 6,
        question: "What is the email of the admin user?",
        options: ["admin@gmail.com", "user@gmail.com", "guest@gmail.com", "none"],
        answer: "admin@gmail.com"
    },
    {
        id: 7,
        question: "What is the password of the user?",
        options: ["admin", "user", "guest", "none"],
        answer: "user"
    },
    {
        id: 8,
        question: "What is the id of the admin user?",
        options: ["1", "2", "3", "4"],
        answer: "1"
    },
    {
        id: 9,
        question: "Is the role of the admin user UserType.ADMIN?",
        options: ["True", "False"],
        answer: "True"
    },
    {
        id: 10,
        question: "Is the role of the user UserType.USER?",
        options: ["True", "False"],
        answer: "True"
    },
];

const allQuestion: Question[] | null | undefined = JSON.parse(localStorage.getItem("questions") || "null");
if(!allQuestion){
    localStorage.setItem("questions",JSON.stringify(questions));
}

