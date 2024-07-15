const express = require("express");
const router = new  express.Router();
const userController = require('../Controller/userController');
const jwtMiddleware = require('../Middlewares/jwtMiddlewares')
const projectController =require('../Controller/projectController');
const multerConfig = require("../Middlewares/multerMiddleware");
//register api

router.post('/user/register',userController.register)


//login api
router.post('/user/login',userController.login)



//addProject
router.post('/projects/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)


//getUserProjects

router.get('/user/allProjects',jwtMiddleware,projectController.allUserProjects)

//getallProjects

router.get('/projects/all',jwtMiddleware,projectController.allProjects)

//getHomeProjects

router.get('/projects/homeProjects',projectController.getHomeProjects)

//editProjects
router.put("/projects/edit/:id",jwtMiddleware,multerConfig.single('projectImage')
,projectController.editProjectController)

//delete project
router.delete("/projects/remove/:id" ,jwtMiddleware,projectController.deleteProjectController);



//export router
module.exports=router;



