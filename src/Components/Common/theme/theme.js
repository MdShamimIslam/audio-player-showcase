import AudioPlayer1 from "./AudioPlayer1";
import AudioPlayer2 from "./AudioPlayer2";
import AudioPlayer3 from "./AudioPlayer3";
import AudioPlayer4 from "./AudioPlayer4";
import AudioPlayer5 from "./AudioPlayer5";
import AudioPlayer6 from "./AudioPlayer6";
import AudioPlayer7 from "./AudioPlayer7";
import AudioPlayer8 from "./AudioPlayer8";
import AudioPlayer9 from "./AudioPlayer9";
import AudioPlayer10 from "./AudioPlayer10";
import AudioPlayer11 from "./AudioPlayer11";
import AudioPlayer12 from "./AudioPlayer12";
import AudioPlayer13 from "./AudioPlayer13";
import AudioPlayer14 from "./AudioPlayer14";
import AudioPlayer15 from "./AudioPlayer15";

const  Theme = (props) => {
	const { attributes } = props;
	const { playerSl = 'one' } = attributes.options || {};

	return <ThemeSwitch theme={playerSl} {...props} />
}
export default Theme;

const ThemeSwitch = ({ theme, ...props }) => {
	switch (theme) {
		case 'two':
			return <AudioPlayer2 {...props} />
			
		case 'three':
			return <AudioPlayer3 {...props} />

		case 'four':
			return <AudioPlayer4 {...props} />

		case 'five':
			return <AudioPlayer5 {...props} />

		case 'six':
			return <AudioPlayer6 {...props} />

		case 'seven':
			return <AudioPlayer7 {...props} />
		
		case'eight':
			return <AudioPlayer8 {...props} />

		case'nine':
			return <AudioPlayer9 {...props} />

		case'ten':
			return <AudioPlayer10 {...props} />

		case'eleven':
			return <AudioPlayer11 {...props} />

		case'twelve':
			return <AudioPlayer12 {...props} />

		case'thirteen':
			return <AudioPlayer13 {...props} />	

		case'fourteen':
			return <AudioPlayer14 {...props} />	

		case'fifteen':
			return <AudioPlayer15 {...props} />	

		default:
			return <AudioPlayer1 id='2' {...props} />;
	}
}