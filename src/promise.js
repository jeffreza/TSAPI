/* 
function otherFunction(){
    console.log("we are in other function");
    console.log("do something");
};

console.log("start");

otherFunction();

console.log("end"); */

//async now!
console.log("start");

function loginUser(email, password, callbacks){

    setTimeout(()=>{
        console.log("Now data received");
        callbacks ({userEmail:email});

    },2000)
}

function userVideos(email){

    etTimeout(()=>{
        console.log("user videos");
        callbacks ({Videos:"videos1,videos2,videos3,videos4"});

    },3000)
};

const users = loginUser("jeff@gmail.com",12312, user =>{
    console.log(user);
    userVideos(loginUser.userEmail, videos =>{
        console.log(videos);

    });
});

console.log("end");
