<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Example4.aspx.cs" Inherits="HTML5.Form.Example4" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <h2>Range & Number Example</h2>
        <hr/>
        <br/>
        <br/>
        <b>Scroll to change the value</b>
        <form oninput="drange.value=arange.value">
        <input type="range" id="arange" value="50">
        <output name="drange" for="arange">50</output>
        </form>
        <br/>
        <br/>
        <b>Click on the number to change</b>
        <form oninput="dnumber.value=bnumber.value">
            <input type="number" id="bnumber" value="0" min="0" max="100">
            <output name="dnumber" for="bnumber">0</output>
        </form>        
        <br/>
        <br/>
        <b>Calculate</b>
        <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
            <input type="range" id="a" value="50">100
            +<input type="number" id="b" value="50">
            =<output name="x" for="a b">100</output>
        </form>
</body>
</html>
