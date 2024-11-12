import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {quizUrl} from "../../utils/constamt";

//api: each IP can only access the API once every 5 seconds.
//doc api https://opentdb.com/api_config.php
const decodeHtmlEntities = (text) => {
    const element = document.createElement("div");
    element.innerHTML = text;
    return element.textContent;
};

export const fetchQuestion = createAsyncThunk("quiz/fetchQuestion", async () => {
    const response = await fetch(quizUrl);
    const data = await response.json();
    const questionData = data.results[0];
    questionData.question = decodeHtmlEntities(questionData.question);
    questionData.correct_answer = decodeHtmlEntities(questionData.correct_answer);
    questionData.incorrect_answers = questionData.incorrect_answers.map(decodeHtmlEntities);
    return questionData;
});

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        question: '',
        correctAnswer: '',
        options: [],
        selectedAnswer: null,
        isCorrect: null,
        loading: false,
        error: null
    },
    reducers: {
        selectAnswer: (state, action) => {
            state.selectedAnswer = action.payload;
            state.isCorrect = action.payload === state.correctAnswer;
        },
        resetQuiz: (state) => {
            state.question = '';
            state.correctAnswer = '';
            state.options = [];
            state.selectedAnswer = null;
            state.isCorrect = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestion.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchQuestion.fulfilled, (state, action) => {
                const { question, correct_answer, incorrect_answers } = action.payload;
                state.question = question;
                state.correctAnswer = correct_answer;
                state.options = [...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5);
                state.loading = false;
                state.isCorrect = null;
            })
            .addCase(fetchQuestion.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { selectAnswer, resetQuiz } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;

