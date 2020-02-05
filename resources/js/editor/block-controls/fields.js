/**
 * Block Design Setting Fields.
 *
 * Returns an array of design setting fields to output in the block editor.
 *
 * @package   CXL
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 */

// Import block controls.
import ControlVaadinTheme from './control-vaadin-theme';

export const setExtraProps = ( attributes ) => {
    const { vaadinTheme } = attributes;

    // If no theme is selected, return the following.
    if ( typeof vaadinTheme === 'undefined' || !vaadinTheme ) {
        return { theme: '' };
    }

    return { theme: vaadinTheme };
};

export default [
	{
		name:    'vaadinTheme',
		control: ControlVaadinTheme,
        setExtraProps: setExtraProps,
        restrictBlocks: true,
        attributes: {
            type: 'string',
            default: '',
            source: 'attribute',
            attribute: 'theme',
            selector: '*',
        },
		blocks:  [
			'core/image',
			'core/gallery',
			'core/media-text',
			'core/paragraph'
		],
	}
];
