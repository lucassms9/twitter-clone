# Posterr - Lucas Santos Mendonça da Silva

> This project is a social network like Twitter, created with a focus in process of interview at strider using React Native.

## 💻 Requirements
Firstly, you need to configure your environment for running react native app;

please, follow the instructions for official documentation:

`https://reactnative.dev/docs/environment-setup`

## 🚀 How to start Posterr

For Starting the Posterr app follow the steps:

Install dependencies:
```
yarn install
```

For building in IOS, install the pods:
```
cd ios && npx pod-install
```

Running the test server:
```
yarn server
```

Run app in IOS or Android platform:
```
yarn ios 
```
or
```
yarn android 
```

Running the tests:
```
yarn test 
```
### Aditional

The data about user logged in app is stored  `src/store/index.tsx`.
You can change this content, but remember to check the `server.json` file if user exists there!

## Critique

Like every project, our Posterr still needs improvement to run well at large scale.
for exemple:

- [ ] create authentication layer
- [ ] implement pagination in post list
- [ ] implement socket to receive real-time events of post creation from other users
- [ ] improve service layer, better separating responsibilities from services
- [ ] implement design system to ensure standard and documentation of components on the platform, we could use StoryBook for example
- [ ] implement code push to improve ci/cd flow and quick fixes in the app once published in stores
- [ ] implement ci/cd using appcenter or bitrise for example
- [ ] create more test from screen and components

