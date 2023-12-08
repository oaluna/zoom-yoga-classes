import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import Home from './core/Home';
import Users from './user/Users';
import Signup from './user/Signup';
import Signin from './auth/Signin';
import EditProfile from './user/EditProfile';
import Profile from './user/Profile';
import PrivateRoute from './auth/PrivateRoute';

import NewCourse from './course/NewCourse';
// import Courses from './course/Courses';
import Course from './course/Course';
import EditCourse from './course/EditCourse';
import MyCourses from './course/MyCourses';
import Enrollment from './enrollment/Enrollment';

const MainRouter = createBrowserRouter(
	createRoutesFromElements(
		
        <Route exact path="/" element={<Home />}>
        <Route path="users" element={<Users />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="user/edit/:userId" element={<EditProfile />} />
        <Route path="user/:userId" element={<Profile />} />
        <Route path="course/:courseId" element={<Course />} />
        <Route path="teach/courses" element={<MyCourses />} />
        <Route path="teach/course/new" element={<NewCourse />} />
        <Route
          path="teach/course/edit/:courseId"
          element={<EditCourse />}
        />
        <Route
          path="teach/course/:courseId"
          element={<Course />}
        />
        <Route path="learn/:enrollmentId" element={<Enrollment />} />
      </Route>
	)
)

export default MainRouter