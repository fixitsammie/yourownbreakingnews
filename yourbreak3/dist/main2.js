
  $('#imageLoader').change(function(){
    var input = this;
    var url = $(this).val();
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) 
     {
        alert('got here');
       var reader = new FileReader();

        reader.onload = function (e) {
        	var img=new Image();
        	img.onload =function(){
            var canvas = document.getElementById('imageCanvas');
            canvas.width = 600;
            canvas.height = 400;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img,0,0);
            ctx.font="30px Arial";
        	}
        	img.src=event.target.result;
//           $('#img').attr('src', e.target.result);
        };
       reader.readAsDataURL(input.files[0]);
    }
    else
    {
      //$('#img').attr('src', 'no_preview.png');
    }
  });




 function(){drawCanvasImage(img) {
            var canvas = document.getElementById('imageCanvas');
            //canvas.width = img.width;
            //canvas.height = img.height;
            canvas.width = 600;
            canvas.height = 400;
 
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img,0,0);
            ctx.font="30px Arial";
           // ctx.fillText(this.mainText,10,40);
           // ctx.fillText(this.smallText,40,400);
        }}   