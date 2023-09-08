// window.onload = function () {
//     var div = document.getElementsByTagName("div")[2];
//     div.setAttribute('id',"myImg")
    
//     var img = new Image();
  
  
//     img.src = "https:/www.webacademie.org/wp-content/uploads/2019/11/LOGO-WEBACADEMIE-2019-QUADRI-2048x367.png";

//     function getBase64Image(img) {
//         var canvas = document.createElement("canvas");
//         var ctx = canvas.getContext("2d");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         ctx.drawImage(img, 0, 0);
//         var dataURL = canvas.toDataURL('image/png', 1.0);
//         return dataURL;
//     }
//     img.addEventListener("load", function(){
//         if (localStorage.getItem("LOGO-WEBACADEMIE-2019-QUADRI-2048x367") === null) {
//             localStorage.setItem("pangolin",
//             getBase64Image(img));
//         }
//         if (localStorage.getItem("LOGO-WEBACADEMIE-2019-QUADRI-2048x367") !== null) {   
//             var image = new Image();
//             div.appendChild(image);
//             image.src = localStorage.getItem("pangolin");
//         }
//     });
//     var myImg = document.getElementById('myImg');
//     if(myImg && myImg.style) {
//       myImg.style.height = 'px';
//       myImg.style.width = '500px';
//     }
    
    
    
    
    
// };





// window.onload = function () {
//     var div = document.getElementsByTagName("div")[2];
//     div.setAttribute('id',"myImg")
    
//     var img = new Image();
  
  
//     img.src = "script/LOGO-WEBACADEMIE-2019-QUADRI-2048x367.png";

//     function getBase64Image(img) {
//         var canvas = document.createElement("canvas");
//         var ctx = canvas.getContext("2d");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         ctx.drawImage(img, 0, 0);
//         var dataURL = canvas.toDataURL('image/jpeg', 1.0);
//         return dataURL;
//     }
//     img.addEventListener("load", function(){
//         if (localStorage.getItem("LOGO-WEBACADEMIE-2019-QUADRI-2048x367") === null) {
//             localStorage.setItem("LOGO-WEBACADEMIE-2019-QUADRI-2048x367",
//             getBase64Image(img));
//         }
//         if (localStorage.getItem("LOGO-WEBACADEMIE-2019-QUADRI-2048x367") !== null) {   
//             var image = new Image();
//             div.appendChild(image);
//             image.src = localStorage.getItem("LOGO-WEBACADEMIE-2019-QUADRI-2048x367");
//         }
//     });
//     // var myImg = document.getElementById('myImg');
//     // if(myImg && myImg.style) {
//     //   myImg.style.height = 'px';
//     //   myImg.style.width = '500px';
//     // }
    
    
    
    
    
// };



localStorage.setItem('Pangolin','https:/www.webacademie.org/wp-content/uploads/2019/11/LOGO-WEBACADEMIE-2019-QUADRI-2048x367.png');

(function() {
    if (localStorage.getItem("Pangolin"))
    {
        document.getElementsByTagName("div")[2].innerHTML = "<img width= 100% heigt=100% src=" + localStorage.getItem('Pangolin') +">" ;
    }

})()