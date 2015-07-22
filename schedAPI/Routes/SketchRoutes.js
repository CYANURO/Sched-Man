'use strict';

(function(){

    var express = require('express'),
    router = express.Router(),
    loginRouter = require.('./loginRouter'),
    registerRouter = require.('./registerRouter'),
    userRouter = require.('./userRouter'),
    logoutRouter = require.('./logoutRouter'),
    editContactRouter = require.('./editContactRouter'),
    editShiftRouter = require.('./editShiftRouter'),
    messageRouter = require.('./messageRouter'),
    mgmntEditContactRouter = require.('./mgmntEditContactRouter'),
    mgmntEditShiftRouter = require.('./mgmntEditShiftRouter');

    // Main
    router.use('/login', loginRouter);
    router.use('/register', registerRouter);
    
    // Employee nav
    router.use('/:token', userRouter);
    router.use('/:token/logout', logoutRouter);    
    
    // Employee self-edit
    router.use('/:token/contact', editContactRouter);
    router.use('/:token/shift', editShiftRouter);
    
    // Messages
    router.use('/:token/message/:receiver', messageRouter);
    
    // MGNT
    router.use('/:token/contact/:employee', mgmntEditContactRouter);
    router.use('/:token/shift/:employee', mgmntEditShiftRouter);

    module.exports = router;

}());