# React Bookshelf

Project Link: https://arnonate.github.io/react-bookshelf/

## Decisions:

`typescript`

I am fairly comfortable with the basics of TS and I decided to use it on this project so that I can get some more practice with it. I have come to enjoy using types for props and the strictness ("safety") of having to provide input and return types.

`react-query`

This project was my first experience with React Query. I have been watching this project for a while and was happy to get a chance to finally use it. React Query has a lot of nice "out of the box" features like local caching, refetching and invalidation.

`axios`

Fetch isn't universally supported yet so I decided to pull in axios to get data from the Google API.

`react-testing-library`

I guess this isn't a novel decision anymore as React Testing Library now ships with Create React App.

## If I had more time I would have...

- worked on the debounce a bit more so that the results aren't set back to page one when typing a new search query in.
- added more test coverage.
- spent more time on accessibility and performance wins.
- added keyboard navigation that included pagination and opening/interacting with the modal.
- improved mobile styles.

## Development Info:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
