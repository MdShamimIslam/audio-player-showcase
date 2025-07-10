import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../Components/utils/functions';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';
import { updateData } from '../../../../../bpl-tools/utils/functions';


const Settings = ({ attributes, setAttributes, device }) => {
	const { alignment, options: { playerSl } } = attributes;

	return <>
		{playerSl && <> <InspectorControls>
			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>
				{
					tab => <>
						{'general' === tab.name && <General {...{ attributes, setAttributes }} />}

						{'style' === tab.name && <Style {...{ attributes, setAttributes, device }} />}

					</>	
				}
			</TabPanel>
		</InspectorControls>
		<BlockControls>
			<AlignmentToolbar value={alignment[device]} onChange={val => setAttributes({ alignment: updateData(alignment, val, device) })} describedBy={__('Block Name Alignment')} alignmentControls={[
				{ title: __('left', 'b-block'), align: 'left', icon: 'align-left' },
				{ title: __('center', 'b-block'), align: 'center', icon: 'align-center' },
				{ title: __('right', 'b-block'), align: 'right', icon: 'align-right' }
			]} />
		</BlockControls> </>
		}
	</>;
};
export default Settings;