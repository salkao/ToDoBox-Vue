# Todobox
TodoBox is web application for organization of simple tasks. It is an application that lets users to create a list of tasks
with specific title and image. It contains of two main parst Todo list(tasks that are not completed yet)
and Done list(tasks that are completed).
Once when task is completed it can be moved to done list, completed task can also be moved back from todo to done list.

## Demo
https://todobox.netlify.com/
#### Demo login data
Email: todobox@test.com  
Password: todoboxtest

## Features
Application has functionality to add task with title and image in todo list. All task in todo list are editable and
have delete option. Once when task is completed it can be moved to done list by clicking on checkbox. When task is in done 
list it can't be edited. Task can be moved back to todo list by clicking on checkbox and it becomes editable again. 
Tasks can be moved from one list to another by drag and drop functionality too. There is also option for delete all done tasks.

## Requirements
* Node
* NPM 

## Framework
This project is developed using Vue.js framework.
[Vue.js documentation](https://vuejs.org/)

## Project setup
### Clone and installation
Clone this project to local machine using comand:
```
git clone https://github.com/salkao/ToDoBox-Vue.git
```

Navigate to projects folder:
```
cd todobox-vue
```

To install all required packages that application uses run command:
```
npm install
```
After installation of packages, you can compile project for developement or production.
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
## Dependencies
..*[vue-router](https://router.vuejs.org/)
..*[vuex](https://vuex.vuejs.org/)
..*[dexie](https://dexie.org/);
..*[vue-click-outside](https://www.npmjs.com/package/vue-click-outside)
..*[vue-material](https://vuematerial.io/)
..*[vuedraggable](https://github.com/SortableJS/Vue.Draggable)

