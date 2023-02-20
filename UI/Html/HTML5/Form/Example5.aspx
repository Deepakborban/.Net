<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Example5.aspx.cs" Inherits="HTML5.Form.Example5" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <h2>Form Control</h2>
        <hr/>
        <form action="#" method="post" autocomplete="on" >
            <label for="firstname">First name: </label>
            <input type="text" id="firstname" required="required" /><br/>
            <label for="lastname">Last name: </label>
            <input type="text" id="lastname" required="required" /><br/>
            <label for="email">Email: </label>
            <input type="email" id="email" required="required" autocomplete="off" /><br/>
            <input type="submit" value="Send" /> 
            <input type="reset" />
        </form>
</body>
</html>
