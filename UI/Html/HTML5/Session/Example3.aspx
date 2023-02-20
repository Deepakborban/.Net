<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Example3.aspx.cs" Inherits="HTML5.Session.Example3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript">
        function DispInfo() {
            
            var item = localStorage.totalval;
            if (typeof (Storage) != "undefined") {
                document.getElementById("total").innerHTML = "You have to pay Rs. "
                    + item + ".00";
            }
            else {
                alert("Sorry, your browser does not support web storage...");
            }
        }

        </script>
</head>

    <body onload="DispInfo()">
        <h3>Local Store</h3>
        <hr/>
        <div id="total"/>
    </body>

</html>
