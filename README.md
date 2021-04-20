# Reactive Nutshell: The Information Dashboard

## What is Reactive Nutshell?

Nutshell is an app for people to use to organize their daily tasks, events, news article, friends, and chat messages.

## Team Members

Taryn Lytle, Dakota Upchurch, Jeremiah Schugt and Laurel Morrison

## The Goal
This group project's focus was to learn how to build a website with React. We were tasked with issue tickets from the "client" including:

1. The user can add friends and see their friend's articles and events.
1. The logged-in user is the only one with ability to edit/delete friends, events, messages (private and public) and tasks.
1. Display today's weather on the homepage, and date-specific weather on the event cards. If it's too far in the future, then show today's with an error message.
1. Be able to create task and have a checkbox that allows you to mark them complete.
1. Private messages should be able to be sent directly to a friend, and only they can see it. 
1. Public messages should be displayed on the dashboard and everyone can read them. 

## My Responsibilities

1. Build the task page with the ability to only see the logged-in user's task.
1. Be able to edit, delete or mark complete your own tasks.
1. Public message thread on the homepage, which were messages that everyone can view.
1. The ability to add, edit or delete your own public messages
1. Applying CSS accross pages and applying a grid to the css

## Wireframe and ERD

<img width="1221" alt="Screen Shot 2021-04-19 at 4 47 03 PM" src="https://user-images.githubusercontent.com/78938657/115434345-97653e00-a1d6-11eb-9c7d-0625e8ab2887.png">

## Homepage View

![Screen Shot 2021-04-20 at 12 49 07 PM](https://user-images.githubusercontent.com/78938657/115434603-e27f5100-a1d6-11eb-9293-584395263a1c.png)

## Setup: 

1. Clone this repository
1. `cd` into the directory it creates
1. In the `api` directory, open Postman and enter the mock data below.
1. Run `json-server -p 8088 -w database.json` from the `api` directory.
1. Run `npm install` from the root directory and wait for all dependencies to be installed.
1. Run `npm start` to verify that installation was successful.

## Mock Data

```{
  "users": [
    {
      "id": 1,
      "name": "Reed Richards",
      "email": "mister@fantastic.com"
    },
    {
      "id": 2,
      "name": "Susan Storm",
      "email": "invisible@woman.com"
    }
  ],
  "articles": [
    {
      "id": 1,
      "timestamp": 1618925984327,
      "userId": 2,
      "title": "Marvel Shows Why HUMAN TORCH is The Most Underrated Hero!",
      "synopsis": "Johnny Storm may be seen as the carefree member of the Fantastic Four, but the Human Torch has more respect for his power than his own teammates!",
      "image": "https://media.giphy.com/media/kgyLlpe3YCkmI/giphy.gif",
      "url": "https://screenrant.com/marvel-human-torch-underrated-hero/"
    },
    {
      "id": 2,
      "timestamp": 1618925905362,
      "title": "Marvel: 10 Things Everyone Forgets About The Thing",
      "synopsis": "The Thing may be one of the founding members of the Fantastic Four, but there are a lot of things everyone forgets about this Marvel hero.",
      "url": "https://www.cbr.com/marvel-the-thing-easter-eggs/",
      "image": "https://media.giphy.com/media/6hhqGnU2V3wIw/giphy.gif",
      "userId": 2
    }
  ],
  "messages": [
    {
      "id": 3,
      "userId": 2,
      "senderId": 1,
      "message": "hi",
      "timestamp": "10:58"
    },
    {
      "userId": 2,
      "senderId": 1,
      "message": "How are you?",
      "timestamp": "13:15",
      "id": 20
    }
  ],
  "publicMessages": [
    {
      "userId": 2,
      "message": "Hi",
      "timestamp": "13:15",
      "id": 1
    },
    {
      "id": 2,
      "userId": 1,
      "message": "hey friends",
      "timestamp": "11:15"
    }
  ],
  "tasks": [
    {
      "id": 1,
      "userId": 2,
      "name": "Fly around",
      "date": "07-09-2021",
      "completed": false
    },
    {
      "id": 2,
      "userId": 2,
      "name": "Save the world",
      "date": "05-21-2021",
      "completed": true
    }
  ],
  "friends": [
    {
      "id": 1,
      "userId": 1,
      "currentUserId": 2
    },
    {
      "id": 2,
      "userId": 2,
      "currentUserId": 1
    }
  ]
}

