const ampq= require ("ampqlib");
const msg = {number:2};

async function connet (){

    try {

        const connection =  await ampq.connect("ampq://localhost:5672");
        const channel =  await connection.CreateChannel();
        const result =  await channel.assertQueue("jobs");
        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
        console.log('job sent successfully ${msg.number}');
        



    } catch (error) {
        
        console.log(error);


    }
}