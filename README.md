# ISSUE TRACKER

This application has following features with two view pages

1. home page

```sh
create project
view all projects
```

2. project page.

```sh
create issue
filter issues by the auther name, labels
search issues by title or discription.
```

## How to setup on local machine

1. To use this repository your machine should have [node](https://nodejs.org/en/), npm, [monogodb](https://docs.mongodb.com/manual/installation/) and [git](https://git-scm.com/downloads). to check version exicute these.

```go
node --version
npm --version
git --version
```

2. Now clone this repository

```go
git clone https://github.com/wizzenalum/issue-tracker.git
```

3. Change directory to issue-tracker

```go
cd issue-tracker
```

3. Install dependencies

```go
npm install --save
```

4. Start mongo db this command may differ... system to system.

```go
sudo systemctl start mongod
```

5. That's... it run the application

```go
npm start
```

## File structure

here you are looking at directory structure with root level files only.

```sh
employee-review-system
├── public
│   ├── images
│   ├── scripts
│   ├── scss
│   └── styles
├── node-modules
├── configs
├── controllers
├── index.js
├── models
├── package-lock.json
├── package.json
├── readme.md
├── routers
└── views
```
