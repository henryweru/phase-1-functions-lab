function distanceFromHqInBlocks(block) {
    const hqLocation = 42; // Example headquarters location
    const distance = Math.abs(hqLocation - block);
    return distance;
  }
  function distanceFromHqInFeet(blocks) {
    const feetPerBlock = 264; // Number of feet per block
    const hqLocation = 42; // Headquarters location
    let distanceInFeet;
  
    if (blocks <= hqLocation) {
      distanceInFeet = (hqLocation - blocks) * feetPerBlock;
    } else {
      distanceInFeet = (blocks - hqLocation) * feetPerBlock;
    }
  
    return distanceInFeet;
  }
  function distanceTravelledInFeet(start, end) {
    const feetPerBlock = 264; // Number of feet per block
    let distanceInFeet;
  
    if (end >= start) {
      distanceInFeet = (end - start) * feetPerBlock;
    } else {
      distanceInFeet = (start - end) * feetPerBlock;
    }
  
    return distanceInFeet;
  }  
  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264; // Number of feet per block
    const freeFeet = 400; // Free distance in feet
    const maxDistance = 2500; // Maximum distance in feet
    let distanceInFeet = Math.abs(destination - start) * feetPerBlock; // Calculate distance in feet
    let farePrice;
  
    if (distanceInFeet <= freeFeet) { // Check if distance is within free distance
      farePrice = 0;
    } else if (distanceInFeet > freeFeet && distanceInFeet <= 2000) { // Check if distance is within 2 cents/foot range
      farePrice = (distanceInFeet - freeFeet) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= maxDistance) { // Check if distance is over 2000 feet
      farePrice = 25;
    } else { // Check if distance is over 2500 feet
      farePrice = 'cannot travel that far';                                            
     }
  
    return farePrice;
  }
  s