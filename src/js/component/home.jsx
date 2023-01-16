import React, {useState, useEffect} from "react";


const Home = () => {
	
		const [seconds, setSeconds] = useState(0);
		const [secondSeconds, setSecondSeconds] = useState(0);
		const [thirdSeconds, setThirdSeconds] = useState(0);
		const [fourthSeconds, setFourthSeconds] = useState(0)
	  
		useEffect(() => {
		  const interval = setInterval(() => {
			setSeconds(seconds => seconds + 1);
		  }, 1000);
		  return () => clearInterval(interval);
		}, []);
	  
		useEffect(() => {
			if (seconds > 9){
				setSecondSeconds(secondSeconds => secondSeconds + 1)
				setSeconds(seconds => seconds = 0)
				if (secondSeconds > 8 ){
					setThirdSeconds(thirdSeconds => thirdSeconds + 1)
					setSecondSeconds(secondSeconds => secondSeconds = 0)
					if (thirdSeconds > 8){
						setFourthSeconds(fourthSeconds => fourthSeconds + 1)
						setThirdSeconds(thirdSeconds => thirdSeconds = 0)
						
					}
				}
			}
		})

	

		return (

		  	<div className="container bg-light mx-auto w-50 mt-5 border border-dark rounded p-5" >
				<div className="container w-50 text-center">
					<h2 className="text center mb-5 fs-1">Simple Counter - React Hook</h2>
				</div>
				<div className="container w-50 fs-2 border border-dark rounded text-center ">
					<div>
						<i className="fa-regular fa-clock" >  </i> 
					</div>
					<div>
						{fourthSeconds}
						{thirdSeconds}
						{secondSeconds}
						{seconds}
					</div>
				</div>	
				<div className="d-flex justify-content-center mt-3">
					<button type="button" onClick={() => {
						setFourthSeconds(fourthSeconds => fourthSeconds = 0)
						setThirdSeconds(thirdSeconds => thirdSeconds = 0)
						setSecondSeconds(secondSeconds => secondSeconds = 0)
						setSeconds(seconds => seconds = 0)}} 
						className="btn btn-warning">
							Reset Clock
					</button>
				</div>
				</div>
		);
	  };

export default Home;
