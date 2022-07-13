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

	  const calculateWarningLimit = (upperLimit) =>{
	    return Number((upperLimit * 0.05).toFixed(2))  ;
	  }
	
   const setWarningStatement=(limit)=>{
       if(language==='english'){
		     printStatement(limitStatus_en[limit])
		  }
		  if(language==='german'){
		     printStatement(limitStatus_gm[limit])
		  }
    }
	
	
	
		const printStatement = (statement) =>{
	  console.log(statement)
	}