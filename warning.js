const checkWarningLevel = (lowerLimit,upperLimit,value) =>{
	  const WarningLimit =calculateWarningLimit(upperLimit) ;
	  
	  if((lowerLimit>value)){
	     setWarningStatement('lowbreach')
	  }
	  if((lowerLimit<=value) && ((lowerLimit+WarningLimit)>=value)){
	     setWarningStatement('lowwarning')
	  }
	   if(((lowerLimit+WarningLimit)<=value)&&((upperLimit-WarningLimit)>=value)){
	     setWarningStatement('normal')
	  }
	  if(((upperLimit-WarningLimit)<=value) && (value>=upperLimit)){
	   setWarningStatement('highwarning')
	  }
	   if((upperLimit>value)){
	     setWarningStatement('highbreach')
	  }
	  
	  
	}
