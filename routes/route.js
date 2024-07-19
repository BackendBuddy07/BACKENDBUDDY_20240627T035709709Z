const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// dockerschema routes
const { createDockerschema, updateDockerschema, deleteDockerschema, getDockerschema, getAllDockerschema } = require('../controllers/dockerschema');
// 
router.post("/dockerschema/create", checkAuthorizationHeaders,authorizeUser("createdockerschema") ,createDockerschema);
router.put("/dockerschema/update/:id", checkAuthorizationHeaders,authorizeUser("updatedockerschema"), updateDockerschema);
router.delete("/dockerschema/delete/:id", checkAuthorizationHeaders, authorizeUser("deletedockerschema"), deleteDockerschema);
router.get("/dockerschema/get/:id", checkAuthorizationHeaders, authorizeUser("readdockerschema"), getDockerschema);
router.get("/dockerschema/getAll", checkAuthorizationHeaders, authorizeUser("readdockerschema"), getAllDockerschema);

    
// he routes
const { createHe, updateHe, deleteHe, getHe, getAllHe } = require('../controllers/he');
// 
router.post("/he/create", checkAuthorizationHeaders,authorizeUser("createhe") ,createHe);
router.put("/he/update/:id", checkAuthorizationHeaders,authorizeUser("updatehe"), updateHe);
router.delete("/he/delete/:id", checkAuthorizationHeaders, authorizeUser("deletehe"), deleteHe);
router.get("/he/get/:id", checkAuthorizationHeaders, authorizeUser("readhe"), getHe);
router.get("/he/getAll", checkAuthorizationHeaders, authorizeUser("readhe"), getAllHe);

    
// him routes
const { createHim, updateHim, deleteHim, getHim, getAllHim } = require('../controllers/him');
// 
router.post("/him/create", checkAuthorizationHeaders,authorizeUser("createhim") ,createHim);
router.put("/him/update/:id", checkAuthorizationHeaders,authorizeUser("updatehim"), updateHim);
router.delete("/him/delete/:id", checkAuthorizationHeaders, authorizeUser("deletehim"), deleteHim);
router.get("/him/get/:id", checkAuthorizationHeaders, authorizeUser("readhim"), getHim);
router.get("/him/getAll", checkAuthorizationHeaders, authorizeUser("readhim"), getAllHim);

    
// ex routes
const { createEx, updateEx, deleteEx, getEx, getAllEx } = require('../controllers/ex');
// 
router.post("/ex/create", checkAuthorizationHeaders,authorizeUser("createex") ,createEx);
router.put("/ex/update/:id", checkAuthorizationHeaders,authorizeUser("updateex"), updateEx);
router.delete("/ex/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteex"), deleteEx);
router.get("/ex/get/:id", checkAuthorizationHeaders, authorizeUser("readex"), getEx);
router.get("/ex/getAll", checkAuthorizationHeaders, authorizeUser("readex"), getAllEx);

    
// new routes
const { createNew, updateNew, deleteNew, getNew, getAllNew } = require('../controllers/new');
// 
router.post("/new/create", checkAuthorizationHeaders,authorizeUser("createnew") ,createNew);
router.put("/new/update/:id", checkAuthorizationHeaders,authorizeUser("updatenew"), updateNew);
router.delete("/new/delete/:id", checkAuthorizationHeaders, authorizeUser("deletenew"), deleteNew);
router.get("/new/get/:id", checkAuthorizationHeaders, authorizeUser("readnew"), getNew);
router.get("/new/getAll", checkAuthorizationHeaders, authorizeUser("readnew"), getAllNew);

    
// dockerschema2 routes
const { createDockerschema2, updateDockerschema2, deleteDockerschema2, getDockerschema2, getAllDockerschema2 } = require('../controllers/dockerschema2');
// 
router.post("/dockerschema2/create", checkAuthorizationHeaders,authorizeUser("createdockerschema2") ,createDockerschema2);
router.put("/dockerschema2/update/:id", checkAuthorizationHeaders,authorizeUser("updatedockerschema2"), updateDockerschema2);
router.delete("/dockerschema2/delete/:id", checkAuthorizationHeaders, authorizeUser("deletedockerschema2"), deleteDockerschema2);
router.get("/dockerschema2/get/:id", checkAuthorizationHeaders, authorizeUser("readdockerschema2"), getDockerschema2);
router.get("/dockerschema2/getAll", checkAuthorizationHeaders, authorizeUser("readdockerschema2"), getAllDockerschema2);

  
module.exports = router;
