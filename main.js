var headline="local man is Welcome"
var subtext="Ready to break some news"


var t_str="12:00PM";
  var img = new Image();

   var canvas = document.getElementById("imageCanvas");
   var ctx = canvas.getContext("2d");
   var canvas2 = document.getElementById("imageCanvas2");
   var ctx2 = canvas2.getContext("2d");
 
var input='';
var inputs='';
  
$(document).ready(function(){
  drawCanvas();
  
});

   


function drawCanvas(){
  
  if (inputs===''){
      ctx.fillStyle = "#c7b299";
ctx.fillRect(0, 0, canvas.width, canvas.height);

  }
    else{
      drawImageCanvas(inputs);
    }


ctx2.font = "10px Montserrat";



ctx2.beginPath();

ctx2.fillStyle = "red";
ctx2.rect(30, 30, 65, 40); 
ctx2.fill();

ctx2.fillStyle = "white";

ctx2.font = "25px Montserrat";
ctx2.shadowOffsetX = 3;
ctx2.shadowOffsetY = 3;
ctx2.shadowColor = "rgba(0,0,0,0.3)";
ctx2.shadowBlur = 4;
ctx2.fillText("yourownbreakingnews.com", 900, 40);

//ctx2.shadowOffsetX = 0;
//ctx2.shadowOffsetY = 0;
ctx2.shadowColor = "transparent";
//ctx2.shadowBlur = 0;

ctx2.fillText("LIVE", 35, 58);
//headline
    ctx2.fillStyle = "rgba(255,255,255,0.85)";
    ctx2.fillRect(80, 510, 1200, 110);

ctx2.fillStyle = "black";
ctx2.font = "bold 40px Montserrat";
ctx2.fillText(headline.toUpperCase(), 85, 580);






//subheadline
ctx2.beginPath();
ctx2.fillStyle = "orange";
ctx2.rect(80, 620, 1100, 40); 
ctx2.fill();


//breaking news
ctx2.beginPath();
ctx2.fillStyle = "red";
ctx2.rect(80, 450, 390, 60); 
ctx2.fill();


ctx2.font = "bold 40px Montserrat";
ctx2.fillStyle = "white";

ctx2.fillText("BREAKING NEWS", 85, 495);

//subtext


ctx2.font = "20px Montserrat";
ctx2.fillStyle = "black";
ctx2.fillText(subtext.toUpperCase(), 85, 650);

ctx2.beginPath();
ctx2.fillStyle = "black";
ctx2.rect(1100, 620, 200, 40); 
ctx2.fill()

ctx2.fillStyle = "white";
ctx2.font = "20px Montserrat";

ctx2.fillText(t_str,1150,650);

ctx2.beginPath();
ctx2.fillStyle = "red";
ctx2.rect(1100, 510, 200, 110); 
ctx2.fill()

ctx2.fillStyle = "white";
ctx2.font = "bold 70px Montserrat";

ctx2.fillText("YBN",1115,590);

}

function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    
    var meridian="AM";
   
    if(hours > 11){
      hours-=12;
        meridian = "PM";
    } else {
        meridian= "AM";
    }
     t_str = hours + ":" + minutes + " "+ meridian;
    $('#clock').text(t_str);
}
setInterval(updateTime, 1000);

$("#mainText").on("change paste keyup", function() {
    headline=$("#mainText").val();
    drawCanvas();
    
});
$("#smallText").on("change paste keyup", function() {
    subtext=$("#smallText").val();
    drawCanvas();
    
});

function drawImageCanvas(input){
// alert('got here draw image');
       var reader = new FileReader();

        reader.onload = function (e) {
          var img=new Image();
          img.onload =function(){
          //  var canvas = document.getElementById('imageCanvas');
            canvas.width = 1280;
            canvas.height = 768;
           // var ctx = canvas.getContext('2d');
            //ctx.drawImage(img,0,0,img.width,    img.height,0, 0, canvas.width, canvas.height);
            var hRatio = canvas.width / img.width    ;
            var vRatio = canvas.height / img.height  ;
            var ratio  = Math.min ( hRatio, vRatio );
            //ctx.drawImage(img, 0,0, img.width, img.height, 0,0,img.width*ratio, img.height*ratio);
            // get the scale
    var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    // get the top left position of the image
    var x = (canvas.width / 2) - (img.width / 2) * scale;
    var y = (canvas.height / 2) - (img.height / 2) * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);


            ctx.font="30px Montserrat";
          }
          img.src=event.target.result;
//           $('#img').attr('src', e.target.result);
        };
       reader.readAsDataURL(input.files[0]);
}

function drawImageT(){
 //  alert('got here draw image');
   var input = this;
   console.log($(this));
   console.log($(this).val())
  var url = $(this).val();
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) 
     {
       inputs=input;
       drawImageCanvas(inputs);
    }
    else
    {
      //$('#img').attr('src', 'no_preview.png');
    }

};
$('#imageLoader').on("change",function(){
  //alert('got here image loader');
   // var input = this;
    //drawCanvas();
   
drawImageT.call(this);

// return (new Promise(drawImageT.call(this).then(drawCanvas())));

    
  });

$("#downloadButton").click(function(){
    
   var c1 = document.getElementById('imageCanvas');
   var c2 = document.getElementById('imageCanvas2');
   

  

  var c1Context = c1.getContext('2d');
  c1Context.drawImage(c2, 0, 0);
  
  var link = document.createElement('a');
  link.download = "ybn-news.png";
  link.href = c1.toDataURL("image/png").replace("image/png", "image/octet-stream");
  link.click();
  });