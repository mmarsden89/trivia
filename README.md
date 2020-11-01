# TriviDuh

A trivia app. Earn points for every question answered correctly and unlock more question sets as you go!

### Prompt

Your goal is to create an application that others will be able to use in order to help improve their trivia skills.

Timeline: 4 day sprint

#### Assumptions

- A round of trivia has 10 Questions

- All questions are multiple-choice questions

- Your score does not need to update in real time

- Results can update on form submit, button click, or any interaction you choose

- We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file

#### Acceptance Criteria

- A user can view questions.

- Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.

- A user can select only 1 answer out of the 4 possible answers.

- The correct answer must be revealed after a user has submitted their answer A user can see the score they received at the end of the round

![TriviDuh](/src/trividuh.png "Trividuh")

### Lets talk tech stack

This project was built using JavaScript and React and utilized hooks to manage state. I also used Sass to more easily compartmentalize variables across the app. I had originally added the universal-cookie library but decided to impliment vanilla JS to handle cookies after running into a few bugs.

### Future Iterations

- Project could use a refactor and there are definitely some instances where code could be more dry.

- Mobile development. Application could definitely use a rework on mobile

- Build out a backend rather than relying soley on cookie for storing data
  - This would allow for things such as high scores and easier saving of user settings

### How to run

1. Fork / clone and download the repository
2. Install dependencies with npm install
3. Run npm run start to launch project locally
4. Ensure you've accepted website cookies to use application
5. For on the go trivia, consider checking out the deployed app [here](https://mmarsden89.github.io/trividuh)
