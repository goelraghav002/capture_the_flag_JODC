import React, { useState } from 'react';
import Navbar from '../components/Navbar';


import { challenges1, challenges2, challenges3 } from '../constants';

const ChallengeCard = ({ challenge, proper, points, category, name }) => {
    
	const [active, setActive] = useState(false);
    return (
        <div className={proper}>
		<div className={`card category_${category}`}>
			<div className='card-header solved' onClick={() => setActive(!active)}>
                {name} <span className='badge'>solved</span>{' '}
				<span className='badge'>{points} points</span>
			</div>
			<div className={`${!active && 'collapse'} card-body`}>
				<blockquote className='card-blockquote'>
					<div style={{ display: 'flex' }}></div>
					<p>
						{' '}
                            {challenge}
                            
                            <br /> Enter the password as flag in the
						following form: lakshya_CTF{'passwordhere'}
					</p>
					<button
						type='button'
						className='btn btn-outline-secondary btn-shadow'
					>
						<span className='fa fa-download mr-2'></span>Download
					</button>
					<button
						type='button'
						className='btn btn-outline-secondary btn-shadow'
					>
						<span className='far fa-lightbulb mr-2'></span>Hint
					</button>
					<div className='input-group mt-3'>
						<input
							type='text'
							className='form-control'
							placeholder='Enter Flag'
						/>
						<div className='input-group-append'>
							<button
								id='submit_p1'
								className='btn btn-outline-secondary'
								type='button'
							>
								Go!
							</button>
						</div>
					</div>
				</blockquote>
			</div>
            </div>
            </div>
	);
};

const Quests = () => {

	return (
		<>
			<Navbar />

			<div className='jumbotron bg-transparent mb-0 pt-0 radius-0'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-12  text-center'>
							<h1 className='display-1 bold color_white content__title'>
								QUESTS<span className='vim-caret'>&nbsp;</span>
							</h1>
							<p className='text-grey text-spacey hackerFont lead mb-5'>
								Its time to show the world what you can do!
							</p>
						</div>
					</div>
					<div className='row hackerFont'>
						<div className='col-md-12'>
							<h4>Challenges</h4>
						</div>
                            {challenges1.map((challenge, index) => (
                                <ChallengeCard
                                    key={challenge.id}
                                    index={index}
                                    proper="col-md-4 mb-3"
                                    {...challenge}
                                />
                            ))}
                            {challenges2.map((challenge, index) => (
                                <ChallengeCard
                                    key={challenge.id}
                                    index={index}
                                    proper="col-md-6 mb-3"
                                    {...challenge}
                                />
                            ))}
                            {challenges3.map((challenge, index) => (
                                <ChallengeCard
                                    key={challenge.id}
                                    index={index}
                                    proper="col-md-12 mb-3"
                                    {...challenge}
                                />
                            ))}
					</div>
				</div>
				<div
					className='modal fade'
					id='hint'
					tabIndex='-1'
					style={{ display: 'none' }}
					// aria-hidden='true'
				>
					<div className='modal-dialog modal-dialog-centered'>
						<div className='modal-content'>
							<div className='modal-body'>HINT GOES HERE</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Quests;
