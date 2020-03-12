const ampq= require ("amqplib");

connect ();
async function connect (){

    try {

        const connection =  await ampq.connect("amqp://localhost:5672");
        const channel =  await connection.createChannel();
        const result =  await channel.assertQueue("jobs");
        channel.consume("jobs", message =>{
            
            var input = JSON.parse(message.content.toString());
            console.log(`message consumed with input: ${input.number}`);
            if (input.number==undefined)
            channel.ack(message);
    
        })
        console.log("waiting for messages:")
        

        

    } catch (error) {
        
        console.error(error);


    }
}