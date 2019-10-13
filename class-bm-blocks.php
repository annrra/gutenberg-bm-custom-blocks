<?php
/**
 * Plugin Name: BM Blocks
 * Plugin URI: https://bettermonday.org/
 * Description: New blocks for the Gutenberg editor.
 * Author: annrra
 * Author URI: https://bettermonday.org/
 * Version: 1.1.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
/**
 * Main BM Blocks Class
 *
 * @since 1.0.4
 */
class BM_Blocks {
    /**
     * This plugin's instance.
     *
     * @var BM Blocks
     */
    private static $instance;

    /**
     * Registers the plugin.
     */
    public static function register() {
        if ( null === self::$instance ) {
            self::$instance = new BM_Blocks();
            self::$instance->includes();
        }
    }
    /**
     * The base directory path (without trailing slash).
     *
     * @var string $_url
     */
    private $_dir;

    /**
     * The base URL path (without trailing slash).
     *
     * @var string $_url
     */
    private $_url;

    /**
     * The Constructor.
     */
    private function __construct() {
        $this->_slug    = 'bm-blocks';
        $this->_version = '1.0.4';
        $this->_dir     = untrailingslashit( plugin_dir_path( '/', __FILE__ ) );
        $this->_url     = untrailingslashit( plugins_url( '/', __FILE__ ) );

        //if ( function_exists ( 'register_block_type' ) ) {
			add_action( 'init', array( $this, 'register_blocks' ) );
		/*} else {
			add_action( 'admin_notices', 'bm_error_notice' );
		}*/
    }

    /**
     * Include required files.
     */
    private function includes() {
        include_once $this->_dir . 'includes/class-bm-blocks-category.php';
    }

    /**
     * Add actions to enqueue assets.
     *
     * Enqueue block assets for use within Gutenberg.
     */
    public function register_blocks() {
	
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}
        // -----------tabs block------------
        // Scripts.
        wp_register_script(
            'bm-blocks-tabs-block', // Handle.
            plugins_url( 'blocks_bm_tabs/bm_blocks_tabs_block.js', __FILE__ ), // Block.js: We register the block here.
            array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components', 'wp-editor' ), // Dependencies, defined above.
            $this->_version
        );
        wp_register_script(
            'bm-blocks-tabs-frontend', // Handle.
            plugins_url( 'blocks_bm_tabs/bm_blocks_tabs_frontend.js', __FILE__ ), // Block.js: We register the block here.
            array( 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components', 'wp-editor' ), // Dependencies, defined above.
            $this->_version
        );
        // Styles.
        wp_register_style(
            'bm-blocks-tabs-block-editor', // Handle.
            plugins_url( 'blocks_bm_tabs/bm_blocks_tabs_editor.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        wp_register_style(
            'bm-blocks-tabs-block-style', // Handle.
            plugins_url( 'blocks_bm_tabs/bm_blocks_tabs_style.css', __FILE__ ), // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            $this->_version
        );
        register_block_type(
            'bmblocks/bmtabs',
            array(
                'editor_script' => 'bm-blocks-tabs-block',
                'script' => 'bm-blocks-tabs-frontend',
                'editor_style' => 'bm-blocks-tabs-block-editor',
                'style' => 'bm-blocks-tabs-block-style',
            )
        );
    }
}
BM_Blocks::register();

/**
 * Error message display
 */
function bm_error_notice() {
    ?>
    <div class="error notice" style='color:#dc3232;'>
        <p>Please, First install <a href="https://wordpress.org/plugins/gutenberg/">Gutenberg Plugin</a> in order to use BM Blocks Plugin.</p>
    </div>
    <?php
}
