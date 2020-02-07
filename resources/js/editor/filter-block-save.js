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

// Imports the assign function from lodash.
const { assign, has } = lodash;

// Assign core WP variables.
const { createHigherOrderComponent } = wp.compose;
const { Fragment }                   = wp.element;
const { InspectorControls }          = wp.blockEditor;
const { addFilter }                  = wp.hooks;

/**
 * Add custom element attributes in save element.
 *
 * @since  2020.02.04
 * @param {Object} extraProps     Block element.
 * @param {Object} blockType      Blocks object.
 * @param {Object} attributes     Blocks attributes.
 *
 * @return {Object} extraProps Modified block element.
 */
addFilter( 'blocks.getSaveContent.extraProps', 'cxl/ui/block/applyExtraProps', ( extraProps, blockType, attributes ) => {

    fields.forEach( field => {

        // If a given field is registered for the current block, add the
        // attributes for the field.
        if ( !field.restrictBlocks || ( field.restrictBlocks && field.blocks.includes( blockType.name ) ) ) {
        //if ( field.blocks.includes( blockType.name ) ) {

            if ( has( field, [ 'setExtraProps' ] ) ) {
            //if ( typeof field.setExtraProps=== 'function') {

                extraProps = assign( extraProps, field.setExtraProps( attributes ) );
            }
        }
    } );

    return extraProps;
} );
