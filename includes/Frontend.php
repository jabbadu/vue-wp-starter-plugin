<?php
namespace App;

/**
 * Frontend Pages Handler
 */
class Frontend {

    public function __construct() {
        add_shortcode( 'vue-plugin-options', [ $this, 'render_frontend' ] );
    }

    /**
     * Render frontend app
     *
     * @param  array $atts
     * @param  string $content
     *
     * @return string
     */
    public function render_frontend( $atts, $content = '' ) {
        wp_enqueue_style( 'pluginbase-frontend' );
        wp_enqueue_style( 'pluginbase-style' );
        wp_enqueue_script( 'pluginbase-frontend' );

        $content .= '<div id="pluginbase-frontend-app"></div>';

        return $content;
    }
}
