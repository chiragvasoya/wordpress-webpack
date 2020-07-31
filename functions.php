<?php
/*************************    Theme Directory   *******************/

get_template_directory();
define ('IMAGES', get_stylesheet_directory_uri()."/src/images/");

add_action( 'login_head', 'ilc_custom_login');
function ilc_custom_login() {
  echo '<style type="text/css">
  h1 a { background-image:url('. get_stylesheet_directory_uri() . '/your_img_src_folder' . ') !important;  background-size:200px !important; width:301px !important; height:82px !important;}
   }
  </style>
  <script type="text/javascript">window.onload = function(){document.getElementById("login").getElementsByTagName("a")[0].href = "'. home_url() . '";document.getElementById("login").getElementsByTagName("a")[0].title = "Go to site";}</script>';
}

function register_themename_menus(){
	register_nav_menus(
		array(
		'main_nav' => __('Main Navigation'), 
		'left_nav' => __('Left Navigation'),
		'footer_nav' => __('Footer Navigation'))
		 );
}
add_action( 'init', 'register_themename_menus');

/*************************     Styles and JavaScript files  *********************/
function themename_enqueue_styles() {
    wp_enqueue_style( 'bundlecss', get_stylesheet_directory_uri().'/dist/bundle.css'); 
}
add_action( 'wp_enqueue_scripts', 'themename_enqueue_styles' ); 

function themename_enqueue_scripts() {
    $dependencies = array('jquery');
    wp_enqueue_script('bundlejs', get_template_directory_uri().'/dist/bundle.js', $dependencies, '', true );
}
 
add_action( 'wp_enqueue_scripts', 'themename_enqueue_scripts' );

/***********************   Image Thumbnails       ********************************/
if(function_exists('add_theme_support')){
	add_theme_support('post-thumbnails');
	set_post_thumbnail_size(538, 269);
}

if(function_exists('add_image_size')){
	add_image_size('slider-image', 768, 255); //adjust name and image size accordingly
	
}

?>