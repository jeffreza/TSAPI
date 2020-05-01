this.router.post('/forgetPassword', async (req, res) => {
    let email = req.body.email
    let user = await new userBuss().getAuthenticated(email);

    if (user == null) {
        message: "this email is not in our database"
    } else {
        let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(user._id);
        genSalt(10, (err, salt) => {
            if (err) throw err
            hash(email, salt, (err, hash) => {
                if (err) throw err
                let forget = new userBuss().forgotpasswordLinkgenration(user._id, hash);
                let forgetLink = "http://69.16.200.12:8001/recover-password/" + hash + "|jaboo|||" + user._id
                
                let html = readFileSync('src/Public/mailtemp/activationCode/Forgetpassword.html', 'utf8');
                let template = handlebars.compile(html)
                let replacments = {
                    username: consaltant.C_First_Name,
                    forgetLink:forgetLink
                }
                let htmltosend = template(replacments)
                let newMail = new Mail(user.email, "Password Reset Link", '',htmltosend);
                newMail.sendMail();
                res.status(200).json({
                    message: "Link Send to your registerd email"
                })
            })
        })
    }

})