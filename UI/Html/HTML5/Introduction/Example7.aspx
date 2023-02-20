<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Example7.aspx.cs" Inherits="HTML5.Introduction.Example7" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
     <title>SkillAssure - HTML5 Demos</title>
    <style type="text/css">
        h2 {
            color: red;
        }
    </style>
</head>
<body>
<div id="content">
  <article>
     <h2>How to use the section tag</h2>
     <section id="disclaimer">
         <h3>Disclaimer</h3>
         <p>Don't take my word for it...</p>
     </section>
     <section id="examples">
       <h3>Examples</h3>
       <p>But here's how I would do it...</p>
     </section>
     <section id="closing_notes">
       <h3>Closing Notes</h3>
       <p>Well that was fun. I wonder if the spec will change next week?</p>
     </section>
  </article>
</div>
</body>
</html>
