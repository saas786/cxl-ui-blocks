/**
 * Vaadin Theme Control.
 *
 * Outputs a select dropdown control for handling the theme="sometheme othertheme".
 *
 * @package   CXL
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 */

// Import the class update utility.
import updateClass from './../util/update-class';

// Get the core WP select control.

const {
    TextControl,
    SelectControl
} = wp.components;

const { __ } = wp.i18n;


/**
 * Regular expression matching invalid anchor characters for replacement.
 *
 * @type {RegExp}
 */
const ANCHOR_REGEX = /[\s#]/g;

// Global set via `wp_localize_script()`.
const { labels } = cxlUIEditor;

export default ( props ) => {

	// Get the vaadin-theme attribute.
	let { vaadinTheme } = props.attributes;

	return (
        <TextControl
            key="vaadinTheme"
            className="html-vaadinTheme-control"
            label={ __( 'Vaadin Theme' ) }
            value={ props.attributes.vaadinTheme || '' }
            onChange={ ( nextValue ) => {
                /*
                nextValue = nextValue.replace(
                    ANCHOR_REGEX,
                    '-'
                );
                */
                props.setAttributes( {
                    vaadinTheme: nextValue
                } );
            } }
        />
	);
};

/*
<SelectControl
    key="vaadinTheme"
    label={ labels.theme }
    value={ vaadinTheme }
    options={ options }
    onChange={ ( selected ) => {
        props.setAttributes( {
            vaadinTheme: selected,
            className: updateClass(
                props.attributes.className,
                selected ? 'theme-' + selected : '',
                options.filter( opt => opt.value ).map( opt => 'theme-' + opt.value )
            )
        } );
    } }
/>
*/
