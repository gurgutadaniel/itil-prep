# ITIL Foundation (Version 5) Practice Simulator

Independent, unofficial, static practice simulator.

## Current Foundation exam configuration
According to PeopleCert: 40 multiple-choice questions, 60 minutes, closed book, minimum 65% to pass.

## Run
Open `index.html` locally. No Python, Node, npm, backend or external libraries are required.

## GitHub Pages
Upload all files to a repository → Settings → Pages → Deploy from branch → `main` → `/ (root)`.

## Files
- `index.html` — page structure
- `style.css` — original exam-style UI
- `app.js` — timer, navigation, scoring, review
- `questions.js` — 40 original practice questions

## Add/edit questions
In `questions.js`, each question is:
```js
{
  "q": "Question",
  "options": ["A","B","C","D"],
  "answer": 0,
  "explanation": "Explanation"
}
```
Answer index: 0=A, 1=B, 2=C, 3=D.

## Copyright / trademark note
This project is independently designed and written. It does not reproduce PeopleCert's or any other provider's proprietary exam interface, assets, questions, logos, or branding. It is not affiliated with or endorsed by PeopleCert, AXELOS, or the owners of ITIL intellectual property.

Do not present the questions as official or leaked examination questions.
