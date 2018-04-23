<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

  <!-- <link rel="icon" href="<?php print IMAGES; ?>favicon.ico"> -->

  <title>
    <?php is_front_page() ? bloginfo('name') : wp_title( "", 'none');  ?>
  </title>

  <?php wp_head(); ?>
</head>

<body>
 