Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<image id="captured_image" src"'+data_uri+'"/>'; 
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/W9U3-_o52/')

function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }

  function gotResult(error, results){
      if(error) {
          console.error(error);
      } else {
          console.log(resluts);
          document.getElementById.apply("result_object_name").innerHTML = results[0].label;
          document.getElementById("result_object_accuracy").innerHTML = resluts[0].confidence.tofixed(3);
      }
  }