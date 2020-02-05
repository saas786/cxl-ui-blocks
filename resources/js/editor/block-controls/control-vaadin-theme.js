/**
 * Vaadin Theme Control.
 *
 * Outputs a select dropdown control for handling the theme="sometheme othertheme".
 *
 * @package   CXL
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 */

const {
    TextControl,
    SelectControl
} = wp.components;

const { __ } = wp.i18n;

// Global set via `wp_localize_script()`.
const { labels } = cxlUIEditor;

export default ( props ) => {

	// Get the vaadin-theme attribute.
	let { vaadinTheme } = props.attributes;

	return (
        <TextControl
            key="vaadinTheme"
            className="html-vaadin-theme-control"
            label={ labels.theme }
            value={ props.attributes.vaadinTheme || '' }
            onChange={ ( nextValue ) => {
                props.setAttributes( {
                    vaadinTheme: nextValue
                } );
            } }
            help={ __( 'Separate multiple attribute values with spaces.' ) }
        />
	);
};
