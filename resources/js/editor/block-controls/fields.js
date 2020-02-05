/**
 * Block Design Setting Fields.
 *
 * Returns an array of design setting fields to output in the block editor.
 *
 * @package   CXL
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 */

const { isEmptyElement } = wp.element;

// Import block controls.
import ControlVaadinTheme from './control-vaadin-theme';

export const setExtraProps = ( attributes ) => {
    const { vaadinTheme } = attributes;

    // If no theme is selected, return the following.
    if ( isEmptyElement( vaadinTheme ) ) {
    //if ( typeof vaadinTheme === 'undefined' || !vaadinTheme ) {

        return {};
    }

    return { theme: vaadinTheme };
};

export default [
	{
		name:    'vaadinTheme',
		control: ControlVaadinTheme,
        setExtraProps: setExtraProps,
        restrictBlocks: false,
        attributes: {
            type: 'string',
            default: '',
            source: 'attribute',
            attribute: 'theme',
            selector: '*',
        },
		blocks:  [],
	}
];
