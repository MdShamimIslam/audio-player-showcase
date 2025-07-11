import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBorderBoxCSS, getBoxCSS, getColorsCSS, getTypoCSS, isValidCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id, device="desktop" }) => {
	const { alignment, style = {} } = attributes;
	const { width, padding, radius, bg, infoBg, border, title={}, artist={}, time={}, thumbnail={}, controls={}, range={} } = style || {};


	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksAudioPlayer`;
	const audioPlayerWrapperSl = `${blockSl} .audioPlayerWrapper`;
	const audioPlayerSl = `${blockSl} .audioPlayer`;
	const banar10Sl = `${audioPlayerSl} .banner10`;
	const info6Sl = `${audioPlayerSl} .info6`;
	const titleSl = `${audioPlayerSl} .title`;
	const artistSl = `${audioPlayerSl} .artist`;
	const timeSl = `${audioPlayerSl} .time`;
	const thumbnailSl = `${audioPlayerSl} .cover`;
	const forwardBackwardBtnSl = `${audioPlayerSl} .btn`;
	const forBackPlayPauseSl = `${audioPlayerSl} .forbackIcn`;
	const playPauseSl = `${audioPlayerSl} .play`;
	const barBgSl = `${audioPlayerSl} .bar-bg`;
	const barFillSl = `${audioPlayerSl} .bar-fill`;
	const volumeIcnSl = `${audioPlayerSl} .volumeIcn`;
	const volumeTrackSl = `${audioPlayerSl} .vol-track`;
	const volumeFillSl = `${audioPlayerSl} .vol-fill`;

	console.log(controls?.hovColor);

	return <style dangerouslySetInnerHTML={{
		__html: `

			${getTypoCSS('', title.typo)?.googleFontLink}
			${getTypoCSS('', artist.typo)?.googleFontLink}
			${getTypoCSS('', time.typo)?.googleFontLink}
			${getTypoCSS(titleSl, title.typo)?.styles}
			${getTypoCSS(artistSl, artist.typo)?.styles}
			${getTypoCSS(timeSl, time.typo)?.styles}

			${blockSl} {
				justify-content: ${alignment[device]};
			}

			${audioPlayerWrapperSl} {
				width: ${width[device]};
			}

			${audioPlayerSl}{
				${getBackgroundCSS(bg)}
				${getBorderBoxCSS(border || {})}
				border-radius: ${radius}px;
				padding: ${padding};
			}

			${banar10Sl}, ${info6Sl} {
				${getBackgroundCSS(infoBg)};
			}

			${titleSl} {
				color: ${title.color};
			}

			${artistSl} {
				color: ${artist.color};
			}

			${timeSl} {
				${getColorsCSS(time.colors)}
			}

			${thumbnailSl} {
				width: ${thumbnail?.width[device]};
				height: ${thumbnail?.height[device]};
				${getBorderBoxCSS(thumbnail.border || {})}
				border-radius: ${getBoxCSS(thumbnail.radius || {})};
			}

			${forwardBackwardBtnSl} {
				color: ${controls?.color};
			}
			${forwardBackwardBtnSl}:hover {
				color: ${controls?.hovColor};
			}

			${forBackPlayPauseSl} {
				width: ${controls?.size}px;
				height: ${controls?.size}px;
			}

			${playPauseSl} {
				${getColorsCSS(controls?.playPauseColors)}
			}
			${playPauseSl}:hover {
				${getColorsCSS(controls?.playPauseHovColors)}
			}

			${barBgSl}, ${volumeTrackSl} {
				background-color: ${range?.color};
			}

			${barFillSl}, ${volumeFillSl} {
				background-color: ${range?.progressColor};
			}

			${volumeIcnSl} {
				width: ${controls?.volumeSize}px;
				height: ${controls?.volumeSize}px;
				${isValidCSS('color',controls.color)}
			}
			${volumeIcnSl}:hover {
				color: ${controls?.hovColor};
			}



			${tabBreakpoint}{
				${blockSl} {
					justify-content: ${alignment.tablet};
				}

				${audioPlayerWrapperSl} {
					width: ${width.tablet};
				}

				${thumbnailSl} {
					width: ${thumbnail?.width[device]};
					height: ${thumbnail?.height[device]};
				}
			}



			${mobileBreakpoint}{
				${blockSl} {
					justify-content: ${alignment.mobile};
				}

				${audioPlayerWrapperSl} {
					width: ${width.mobile};
				}

				${thumbnailSl} {
					width: ${thumbnail?.width[device]};
					height: ${thumbnail?.height[device]};
				}
			}
			

	`}} />;
}
export default Style;