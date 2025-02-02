import { Box, Button } from '@mui/material';
import ContactForm from '../components/contactForm';
import TestTypewriter from '../components/TestTypewriter';

function Home() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
				px: '15px',
				paddingTop: { xs: '0px', sm: '150px', md: '70px' },
			}}
		>
			<TestTypewriter classname={'text-left text-[1rem] max-md:w-[100%] max-sm:px-[50px] max-md:pt-[50px] md:w-[50%]'} />

			<Box // IMAGE AND FADE
				sx={{ position: 'relative', display: 'inline-block', width: { xs: '70%', sm: '50%' } }}
			>
				<img src="/giio-Photoroom.png" alt="GK" className=" w-full" />
				{/* Gradient Overlay */}
				<div
					className="absolute left-0 bottom-0 w-full h-[30%]"
					style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #121212 100%)' }}
				></div>
			</Box>
		</Box>
	);
}

export default Home;
