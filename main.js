function preload(){
    mustache_image=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
noseX=0;
noseY=0;

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(mustache_image, noseX, noseY, 35, 30);

}

function take_snapshot(){
    save('myFilterImage.png')
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-17;
        noseY=results[0].pose.nose.y+5;
        console.log("nose x"+noseX);
        console.log("nose y"+noseY);
    }
  
}