<?php
/**
 * CXL Blocks functionality.
 *
 * @package CXL
 *
 * Plugin Name: CXL UI Blocks
 * Plugin URI: https://conversionxl.com/institute/
 * Description: Adds a "Theme attribute" field to all blocks, it's for allowing users to configure Vaadin theme attribute in block editor.
 * Author: Leho Kraav
 * Author URI: https://conversionxl.com
 * Version: 2020.02.05
 */

use CXL\UI\Blocks\Plugin;

defined( 'ABSPATH' ) || exit;

require_once __DIR__ . '/vendor/autoload.php';

// @todo What's a better way? Need `cxl/wp-lib`?
require_once get_stylesheet_directory() . '/vendor/cxl/wp-theme-lib/src/Traits/GetIntegrationInstance.php';

define( 'CXL_UI_BLOCKS_PLUGIN_FILE', __FILE__ );

/**
 * Returns plugin instance.
 *
 * @since 2020.02.04
 */
function cxl_ui_blocks(): Plugin {
    return Plugin::get_instance();
}

add_action( 'plugins_loaded', 'cxl_ui_blocks', 11 );
