<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Example3.aspx.cs" Inherits="HTML5.Introduction.Example3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>SkillAssure - HTML5 Demos</title>
    <style type="text/css">
        #outer-div
        {
            font-family:Arial;             
            text-align:center;
            border:1px solid #333;            
        }
        
        #top
        {
            font-family:Arial; 
            font-size:1.0em;            
            text-align:center;            
            border:1px solid #333;
        }
        #nav
        {
            font-family:Arial; 
            font-size:1.0em;            
            text-align:center;                       
            border-top:1px solid #333;
            height: 30px;            
        }
        #left
        {
            font-family:Arial; 
            font-size:1.0em;            
            text-align:center;            
            float: left;
            border:1px solid #333;
            width: 20%;
            height: 300px;
        }
        #middle
        {
            font-family:Arial; 
            font-size:1.0em;            
            text-align:center;            
            float: left;
            border:1px solid #333;
            width: 79.3%;
            height: 300px;
        }        
        #bottom
        {
            font-family:Arial; 
            font-size:1.0em;            
            text-align:center;   
            border:1px solid #333;                     
        }
        .clear
        {
            clear: both;
        }
    </style>
</head>
<body>
 
  <div id="outer-div">        
        <div id="top">
            <span>Heading</span>
            <div id="nav">
                <span>Navigation Goes Here</span>
            </div>
        </div>
        <div id="left">
            <span>Left Pan</span>
        </div>
        <div id="middle">
            <span>Middle Pan</span>
        </div>
        <div class="clear"></div>
        <div id="bottom">
            <span>Bottom</span>
        </div>
    </div>  

</body>
</html>