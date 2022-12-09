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
		  <div className="text-center fs-2 ">
					<i className="fa-solid fa-clock"></i> {fourthSeconds}{thirdSeconds}{secondSeconds}{seconds} 			
		  </div>
		);
	  };

export default Home;
