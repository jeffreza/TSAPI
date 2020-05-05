this.router.post('/UpadateApplication', async (req, res,next) => {

    try {
        
        let newApplication: IAPPLICATIONS = req.body.Application;
        let subWidrawnID: string = req.body.Application.SubmissionId;
        let updatedApplication = await new ApplicationBuss().updateApplication(newApplication);
        let deletedSubmission = await new SubmissionBuss().deleteSubmission(subWidrawnID);
        let response = {

            updatedApplication,
            deletedSubmission
        }
            
        
        if (response === null) {
            res.send('Some thing Went Wrong');
        } else {

            res.status(200).json({
                message: response
               
            });
        }

    } catch (error) {

        res.status(503).json({
            error: error,
        });

    }
});