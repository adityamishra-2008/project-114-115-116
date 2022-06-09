nose_x=0;
nose_y=0;

function preload(){
    imagee= loadImage("https://i.postimg.cc/kMxnwQ2Q/pngegg-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,300,300);
    image(imagee,nose_x,nose_y,60,45);
}

function take_snapshot(){
    save("my_image.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x: "+nose_x);
        nose_x = results[0].pose.nose.x-30;
        console.log("nose y: "+nose_y);
        nose_y = results[0].pose.nose.y;
    };
}
function change1(){
    // similar behavior as an HTTP redirec
    window.location.replace("third.html");
 }; 
 function change(){
    // similar behavior as an HTTP redirec
    window.location.replace("sec.html");
 };