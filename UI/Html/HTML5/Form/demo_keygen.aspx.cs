using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace HTML5.Form
{
    public partial class demo_keygen : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string user = Request["usr_name"].ToString();
            string key = Request["security"].ToString();
            Response.Write("User :" + user + " Generated Key :" + key);
        }
    }
}