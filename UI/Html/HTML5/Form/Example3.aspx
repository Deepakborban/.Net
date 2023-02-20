<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Example3.aspx.cs" Inherits="HTML5.Form.Example3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <h2>Keygen</h2>
        <hr/>
        <br/>
        <br/>
        <form action="demo_keygen.aspx" method="get">  <br/>
            Username: <input type="text" name="usr_name" /><br/>  
            Encryption: <keygen name="security" />  
            <input type="submit" />
        </form>
</body>
</html>
