<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AssessmentQuestion2.aspx.cs" Inherits="HTML5.Assessment.AssessmentQuestion2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        #coin {
            background: url('coin.png') no-repeat center center;
            width: 300px;
            height: 300px;
            background-size: cover;
            box-shadow: rgba(0,0,0,0.4) 5px 5px inset;
            -webkit-box-shadow: 3px 8px 6px -4px black;
            border-radius: 250px;
            position: absolute;
            top: 100px;
            left: 300px;
            cursor: pointer;
        }

        #coin:hover {
            -webkit-transform: rotateY(180deg);
            -moz-transform: rotateY(180deg);
            -ms-transform: rotateY(180deg);
       }
    </style>
</head>
<body>
    <div id="coin"></div>
</body>
</html>
