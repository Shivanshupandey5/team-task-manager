export const BASE_URL = "http://localhost:8000";

//utils/apiPaths.js
export const API_PATHS = {
  Auth:{
    REGISTER: "/api/auth/register",//Register a new user(Admin or Member)
    LOGIN: "/api/auth/login",//Authenticate user & return JWT token
    GET_PROFILE: "/api/auth/profile"//Fetch logged in user's profile
  },

  USERS:{
    GET_ALL_USERS: "/api/users", //Get list of all users (Admin only)
    GET_USER_BY_ID: (userId) => `/api/users/${userId}`, //Get specific user details (Admin only)
    CREATE_USER: "/api/users", //Create a new user (Admin only)
    UPDATE_USER: (userId) => `/api/users/${userId}`, //Update user details (Admin only)
    DELETE_USER: (userId) => `/api/users/${userId}` //Delete a user (Admin only)
  },

  TASKS:{
    GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", //Get task summary for dashboard
    GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data", //Get task summary for user dashboard
    GET_ALL_TASKS: "/api/tasks", //Get list of all tasks
    GET_TASK_BY_ID: (taskId) => `/api/tasks/${taskId}`, //Get specific task details
    CREATE_TASK: "/api/tasks", //Create a new task
    UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`, //Update task details
    DELETE_TASK: (taskId) => `/api/tasks/${taskId}` ,//Delete a task

    UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`, //Update only task status
    UPDATE_TODO_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo` //Update only todo checklist
  },

  REPORTS:{
    EXPORT_TASKS: "/api/reports/export/tasks",//Export/Download all tasks as Excel (Admin only)
    EXPORT_USERS: "/api/reports/export/users" //Export/Download all users as Excel (Admin only)
  },

  IMAGE:{
    UPLOAD_IMAGE: "/api/images/upload-image" //Upload image and get URL
  }

};