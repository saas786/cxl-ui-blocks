<?php
/**
 * CXL UI integration.
 *
 * @package CXL
 * @since 2020.02.04
 */

namespace CXL\UI\Blocks\Plugin\Integrations;

/**
 * Main class.
 */
class CXLUi {

    /**
     * Constructor.
     */
    public function __construct() {
        $this->init();
    }

    /**
     * Init.
     */
    protected function init(): void {

        add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_cxl_ui' ] );

    }

    /**
     * Enqueue CXL UI bundle.
     *
     * @since 2020.02.04
     */
    public function enqueue_cxl_ui(): void {

        $deps = [
            'wp-blocks',
            'wp-edit-post',
            'wp-plugins',
            'wp-i18n',
            'wp-element',
            'wp-components',
            'wp-compose',
            'wp-data',
            'lodash',
            'moment',
            'wp-dom-ready',
            'wp-dom',
            'wp-token-list',
        ];

        wp_enqueue_script(
            'cxl-ui-blocks-editor',
            cxl_ui_blocks()->plugin_dir_url . 'public/js/editor.js',
            $deps,
            null,
            true
        );

        // For now, we're adding translations via PHP. In the future, when our
        // tools catch up, we'll internationalize in the JS files.
        wp_localize_script( 'cxl-ui-blocks-editor', 'cxlUIEditor', [
            'labels' => [
                'default'        => __( 'Default',            'cxl-ui' ),
                'designSettings' => __( 'Design Settings',    'cxl-ui' ),
                'none'           => __( 'None',               'cxl-ui' ),
                'theme'          => __( 'Theme Attribute(s)', 'cxl-ui' )
            ]
        ] );

    }

}
