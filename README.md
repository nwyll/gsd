

# Get Sh!t Done

### GSD is a productivity timer inspired by the Pomodoro Technique. It provides a framework for committing to specific work and break periods to reduce distractions and improve time management.

GSD follows the traditional Pomodoro method using standardized 25-minute work periods accompanied by set breaks. After each completed work session you can take a 5-min break. Complete 4 work sessions and you get to take a longer 15-min break. During a 25-minute session, you focus on a task. Checking email, answering the phone, or browsing your favorite forum is not allowed. During a break, you do not do anything related to work. You can meditate, do push ups and play with your dog, but you can't think about work.

When implemented with discipline, GSD can be a powerful tool to increase your productivity.

## [Demo Site](http://gsd-app-nwyll.s3-website-us-east-1.amazonaws.com/)

## Project Objectives

- As a user, I want to start and reset a 25-minute work session.
- As a user, I want to start and reset a five-minute break after each completed work session.
- As a user, I want to start and reset a longer, 15-minute break after every four completed work sessions.
- As a user, I want to see a live timer during work sessions and breaks.
- As a user, I want to hear a sound at the end of work sessions and breaks.
- As a user, I want to record completed tasks.
- As a user, I want to view a history of my tasks in reverse chronological order.

## Built With

#### Languages and Frameworks:
- React 16.2.0
- Bootstrap 4.0.0

#### To run GSD locally:

Getting Started
If you would like to use this project remotely to add additional functionality to the app itself, you can perform the following steps:

1. Clone this repository
2. cd into the gsd directory and run npm install
3. Edit the code (if you'd like)
4. Run npm start within your terminal
5. Visit localhost:3006 in your browser to start using!

The following components & containers make up this application:

| **Component** | **Description** |
| :--- | :--- |
| `App` | The main container that holds all components/containers of the main app page. |
| `AddTask` | Adds new tasks to the TaskList. |
| `Countdown` | Custom countdown clock. |
| `TaskList` | Renders the list of tasks the user has created, with the ability to clear the list. |
| `Timer` | Responsible for setting, starting and reseting the timer and incorporates Countdown. |
