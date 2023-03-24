import React from 'react';
import Background from '../components/background/Background';
import Navbar from '../components/Navbar';

const About = () => {

	const handleClick = () => {
		console.log('inside click');
		window.location.replace(`${window.location.origin}/instructions`);
	};

	return (
		<>
			<Background />
			<Navbar />
			<div className='jumbotron bg-transparent mb-0 pt-3 radius-0'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-12'>
							<h1 className='display-1 bold color_white content__title text-center'>
								<span className='color_danger'>ABOUT</span>US
								<span className='vim-caret'>&nbsp;</span>
							</h1>
							<p className='text-grey text-spacey text-center hackerFont lead'>
								A community of like minded individuals who support cybersecurity
								and FOSS.
							</p>
							<div className='row justify-content-center hackerFont'>
								<div className='col-md-8'>
									<h5 className='bold color_white pt-3'>
										What is Capture the Flag?
									</h5>
									A capture the flag (CTF) contest is a special kind of
									cybersecurity competition designed to challenge its
									participants to solve computer security problems and/or
									capture and defend computer systems. The game consists of a
									series of challenges where participants must reverse engineer,
									break, hack, decrypt, or do whatever it takes to solve the
									challenge. The challenges are all set up with the intent of
									being hacked, making it an excellent, legal way to get
									hands-on experience.
									<h5 className='bold color_white pt-3'>About Lakshya CTF</h5>
									Lakshya CTF is a sub event of PICT's{' '}
									<a href='https://pictinc.org'>Impetus and Concepts</a> mega
									event where students partcipate from all over the world!
									<br /> Out aim is about spreading the importance of
									cybersecurity in today's community. Each and every person
									should be aware of different vulnerabilities in systems as
									well as how to protect onselves agains cyber attacks
									<br /> We believe gamification is the best technique to teach
									oneself about cybersecurity.
									<h5 className='bold color_white pt-3'>
										Who can play Lakshya CTF
									</h5>
									Lakshya CTF is mainly focused at students who are
									undergraduates.
									<div className='row text-center pt-5'>
										<div className='col-xl-12'>
											<button
												onClick={handleClick}
												className='btn btn-outline-danger btn-shadow px-3my-2 ml-0 ml-sm-1 text-left typewriter'
											>
												<h4>LET IT RIP!</h4>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
