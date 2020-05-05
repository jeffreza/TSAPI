
try {

    const question = [
        "what is you name?",
        "how old are you?",
        "do you like burgers?"
    ];

    
    const ask = (i=0)=>{
    
        process.stdout.write(`\n\n\n${question[i]}`);
        process.stdout.write("\n>");
    
     }
    
    ask();
    let answers= [];
    
    process.stdin.on("data", (data)=>{
        answers.push(data.toString().trim());

        if (answers.length<question.length){
            ask(answers.length);
    
        }
        else{
            process.exit();
        }
    });
    
    
    
} catch (error) {
     
    console.log(error);
}