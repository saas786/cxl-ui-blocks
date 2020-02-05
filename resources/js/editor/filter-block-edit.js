/**
 * Block Edit Filter.
 *
 * Adds a filter on `editor.BlockEdit` and adds custom inspector controls to
 * any blocks that has custom design settings.
 *
 * @package   CXL
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 */

// Imports the design setting fields.
import fields   from './block-controls/fields';

// Assign core WP variables.
const { createHigherOrderComponent } = wp.compose;
const { Fragment }                   = wp.element;
const { InspectorAdvancedControls }  = wp.blockEditor;
const { addFilter }                  = wp.hooks;

/**
 * Filter on block edit to add custom inspector controls.
 *
 * @since  2020.02.04
 * @access public
 * @param  object   BlockEdit
 * @return function
 */
const CXLUIBlockEdit = createHigherOrderComponent( ( BlockEdit ) => {

	return ( props ) => {

		// Create an array to hold the fields for the current block.
		let blockFields = [];

		// Loop through the global fields and add them to the block
		// fields array if they belong to the current block. `props.name`
		// is the current block ID.
		fields.forEach( field => {
            if ( !field.restrictBlocks || ( field.restrictBlocks && field.blocks.includes( props.name ) ) ) {
			//if ( field.blocks.includes( props.name ) ) {

				blockFields.push( field );
			}
		} );

		// If there are no fields for the current block, return the
		// block edit component.
		if ( ! blockFields.length ) {
			return (
				<BlockEdit { ...props } />
			);
		}

		// Insert a new design settings panel and pass along the fields
		// to display.
		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorAdvancedControls>
                    {
                        blockFields.map( ( field, i ) => {
                            return field.control( props )
                        } )
                    }
				</InspectorAdvancedControls>
			</Fragment>
		);
	};

}, 'CXLUIBlockEdit' );

addFilter( 'editor.BlockEdit', 'cxl/ui/block/edit', CXLUIBlockEdit );
