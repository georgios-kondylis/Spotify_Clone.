import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function TestTypewriter({ classname }) {
	const [text] = useTypewriter({
		words: [
			'Hi, welcome to my Spotify Clone project!',
			'My name is Georgios, and I built this app using Spotify’s API.',
			'It features authentication, token handling, and dynamic routing.',
			'Feel free to explore.',
			'Make sure you have a Spotify account to access everything! 🎧'
		],
		loop: true,
		delaySpeed: 2000
	});

	return (
		<h1 className={classname ? classname : ''}>
			{text}
			<Cursor />
		</h1>
	);
}
