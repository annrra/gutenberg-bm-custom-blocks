<?php
/**
 * BLOCK: BM Accordion
 *
 * Gutenberg Custom Block assets.
 *
 * @since   1.0.0
 * @package bm
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue the block's assets for the editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function bm_accordion_block_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'bm-accordion',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);

	// Styles.
	wp_enqueue_style(
		'bm-accordion-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
} // End function bm_accordion_block_editor_assets().
add_action( 'enqueue_block_editor_assets', 'bm_accordion_block_editor_assets' );


// Hook: Frontend assets.
/**
 * Enqueue the block's assets for the frontend.
 *
 * @since 1.0.0
 */
function bm_accordion_block_block_assets() {
    // Scripts.
	wp_enqueue_script(
		'bm-accordion-frontend-js',
		plugins_url( 'frontend.js', __FILE__ ),
		array( 'jquery' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'frontend.js' )
	);
    
	// Styles.
	wp_enqueue_style(
		'bm-accordion-block-frontend',
		plugins_url( 'style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
} // End function bm_accordion_block_block_assets().
add_action( 'enqueue_block_assets', 'bm_accordion_block_block_assets' );