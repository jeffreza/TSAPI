this.router.post('/UpadateApplication', async (req, res) => {
    let newApplication: IAPPLICATIONS = req.body.Application;
    let response = await new ApplicationBuss().updateApplication(newApplication);
    // here delete submission function should also run
    // update application changes the status of application from active to pending

    if (response === null) {
        res.send('Some thing Went Wrong');
    } else {a
        
        res.status(200).json({
            response,
        });
    }
});