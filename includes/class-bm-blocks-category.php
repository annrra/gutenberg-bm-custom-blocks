<?php
/**
 * Load bm blocks custom categories.
 *
 * @package   BM Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main BM Blocks Category Class
 */
class BM_Blocks_Category {

	/**
	 * This class's instance.
	 *
	 * @var BM_Blocks_Category
	 */
	private static $instance;

	/**
	 * Registers the class.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new BM_Blocks_Category();
		}
	}

	/**
	 * The Constructor.
	 */
	private function __construct() {
		add_filter( 'block_categories', array( $this, 'block_categories' ) );
	}

	/**
	 * Register our custom block category.
	 *
	 * @access public
	 * @param array $categories All categories.
	 * @link https://wordpress.org/gutenberg/handbook/extensibility/extending-blocks/#managing-block-categories
	 */
	public function block_categories( $categories ) {

		return array_merge(
			$categories,
			array(
				array(
					'slug' => 'bm-blocks',
					'title' => __( 'BM Blocks', 'bm-blocks' ),
				),
			)
		);
	}
}

BM_Blocks_Category::register();
