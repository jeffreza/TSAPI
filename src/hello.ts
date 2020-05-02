this.router.get('/findOneApplication', async (req, res) => {
    try {

        let _id: string = req.body._id;

    if (_id != null) {
        let result: IAPPLICATIONS = await new ApplicationBuss().getApplication(_id);
        if (result === null) {
            res.send('some thing went worng');
        } else {
            
            res.status(200).json({
                result,
            });
        }
    } 
        
    } catch (error) {
        res.status(200).json({
            error: error,
        });
    }
    
});