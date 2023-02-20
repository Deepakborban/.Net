<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Example1.aspx.cs" Inherits="HTML5.Session.Example1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script>
        function clickCounter() {
            if (typeof (Storage) !== "undefined") {
                if (localStorage.clickcount) {
                    localStorage.clickcount = Number(localStorage.clickcount) + 1;
                }
                else {
                    localStorage.clickcount = 1;
                }
                document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
            }
            else {
                document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
            }
        }
        </script>
</head>
<body>
    <h3>Local Store</h3>
        <hr/>
        <p><button onclick="clickCounter()" type="button">Click me!</button></p>
        <div id="result"></div>
        <p>Click the button to see the counter increase.</p>
        <p>Close the browser tab (or window), and try again, and the counter will continue to count (is not reset).</p>
</body>
</html>
