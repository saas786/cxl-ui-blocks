/**
 * Block Registration Filter.
 *
 * Adds a filter on `editor.BlockEdit` and adds custom inspector controls to
 * any blocks that has custom design settings.
 *
 * @package   CXL
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 */

// Imports the design setting fields.
import fields from './block-controls/fields';

// Imports the assign function from lodash.
const { assign } = lodash;

const { addFilter } = wp.hooks;

/**
 * Filter on the block registration process to add custom attributes.
 *
 * @since  2020.02.04
 * @access public
 * @param  object  Settings for the block.
 * @param  string  Block name.
 * @return object
 */
addFilter( 'blocks.registerBlockType', 'cxl/ui/block/register', ( settings, name ) => {

	fields.forEach( field => {

        // If a given field is registered for the current block,
        // add the attributes for the field.
        if ( !field.restrictBlocks || ( field.restrictBlocks && field.blocks.includes( name ) ) ) {
		//if ( field.blocks.includes( name ) ) {

			settings.attributes = assign( settings.attributes, {
				[ field.name ] : field.attributes
			} );
		}
	} );

	return settings;
} );
