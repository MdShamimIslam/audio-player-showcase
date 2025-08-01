import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import Theme from './Components/Common/theme/theme';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-aps-audio-player-showcase');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<div className="bBlocksAudioPlayer">
				<div className="audioPlayerWrapper">
					<Theme {...{ attributes }} />
				</div>
			</div>

		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});
