<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Example1.aspx.cs" Inherits="HTML5.Media.Example1" %>

<!DOCTYPE html>

<html>    
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Audio & Video Demo</title>
    <script type="text/javascript">
        function playPause() {
            var vid = document.getElementById("myvideo");
            if (vid.paused) {
                vid.play();
            }
            else {
                vid.pause();
            }
        }
        </script>
</head>
<body>
        <b>Play Video</b>        
        <br/><br/>

    <video width="620" controls="controls" >
            <source src="../video/a2.mp4" type="video/mp4" />       
            Your browser does not support the video tag.
        </video>
</body>
</html>
