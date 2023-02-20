<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Example6.aspx.cs" Inherits="HTML5.Form.Example6" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
     <h2>Other Form Control</h2>
        <hr/>
        <form action="#" method="post">
            <label for="colorpick">Pick Color : </label>
            <input type="color" id="colorpick" /><br/>
            <label for="dob">Select DOB: </label>
            <input type="date" id="dob" /><br/>
            <label for="url">Enter URL: </label>
            <input type="url" id="url" placeholder="http://www.websitename.com" /><br/>
            <label for="name">Enter Name: </label>
            <input type="text" id="name" autofocus="autofocus" /><br/>
            <label for="email">Enter email: </label>
            <input type="email" id="email" multiple="multiple" /><br/>
            <label for="ccode">Enter Country Code: </label>
            <input type="text" name="country_code" pattern="[A-Za-z]{3}" 
                title="Three letter country code" /><br/>
            <input type="submit" value="Send" /> 
            <input type="reset" />
        </form>
</body>
</html>
