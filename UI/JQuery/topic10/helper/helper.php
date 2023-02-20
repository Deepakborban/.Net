<?php

    $uname = $_GET['uname'];
    $pwd = $_GET['pwd'];
    if($uname=='Shashi' && $pwd=='shashi'){
        return 'Success';
    } else  {
        return 'Not';
    }
?>
