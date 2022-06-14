let questions = [
    {question: "During the initial Licensing Phase, a teen driver is only allowed two passengers under age 20 in the vehicle during the first 12 months of licensing",
     answers: ['true', 'false'],
     correctAns: 'false'   
    },

    {question: "How should a driver proceed within an intersection waiting to make a left turn and the traffic signal light turns red?",
    answers: ['a.  Wait at the intersection until the light turns green.', 'b.  Yield to oncoming traffic and complete the turn', 'c.  Make sure it is clear, then back up from the intersection'],
    correctAns: 'b.  Yield to oncoming traffic and complete the turn'       
    },

    {question: "In Order to Obtain court supervision for a traffic violation, a minor must appear in court with a parent/legal guardian and attend traffic safety school.",
    answers: ['true', 'false'],
    correctAns: 'true'    
    },  

    {question: "A parent or legal guardian may request that the driver's license of a minor be canceled at any time prior to age 18.",
    answers: ['true', 'false'],
    correctAns: 'true'    
    },

    {question: "When passing another vehicle, a driver should wait until the entire car the driver just passed is visible in the rearview mirror before turning back into the right-hand lane.",
    answers: ['true', 'false'],
    correctAns: 'true'    
    },

    {question: "After making the proper stop, yielding to traffic or pedestrians within the intersection, it is permissible for drivers on a one-way street to turn left at a red light onto another one-way street that moves traffic to left.",
    answers: ['true', 'false'],
    correctAns: 'true'    
    },
    
    {question: "When on a two-lane roadway, drivers must stop their vehicles when approaching a stopped school bus with its warning lights flashing and its stop signal arm extended.",
    answers: ['true', 'false'],
    correctAns: 'true'    
    },

    {question: "When an authorized vehicle using its sirens and flashing lights approaches a vehicle, the driver should pull to the right-hand edge of the roadway and wait for the emergency vehicle to pass.",
     answers: ['true', 'false'],
    correctAns: 'true'    
    },
   
    {question: "What is the penalty for being convicted of illegally passing a stopped school bus?",
    answers: ['a.  A suspension of driving privileges.', 'b.  A suspension of the vehicle registration.','c. A $30 fine.'],
    correctAns: 'a.  A suspension of driving privileges.'    
    }, 

    {question: "A driver may pass another vehicle by driving on the shoulder of the road.",
    answers: ['true', 'false'],
    correctAns: 'false'   
    },  

   {question: "It is permissible to make a right turn against a red-signal light after stopping and yielding to other vehicles and pedestrians.",
   answers: ['true', 'false'],
   correctAns: 'true'    
   },

  {question: "A driver must give the right- or left-turn signal when changing lanes.",
  answers: ['true', 'false'],
  correctAns: 'true'    
  },

  {question: "In urban areas, drivers moving out of an alley, building, private road, or driveway need not come to a complete stop before entering the roadway if the roadway is clear of traffic.",
  answers: ['true', 'false'],
  correctAns: 'false'   
  },

  {question: "Illinois drivers under age 16 are required to have at least 50 hours of behind-the-wheel supervised driving before obtaining their driver’s license.",
  answers: ['true', 'false'],
  correctAns: 'true'   
  },

  {question: "Drivers under age 20 are prohibited from using their cellphone while driving except in the case of an emergency",
  answers: ['true', 'false'],
  correctAns: 'false'   
  },

  {question: "Drivers under age 18 must hold their instruction permit for nine consecutive months prior to obtaining their driver’s license.",
  answers: ['true', 'false'],
  correctAns: 'true'   
  },
// need to verify answers
  {question: "Cellphone use while driving is permitted as long as the driver is using a hands-free device",
  answers: ['true', 'false'],
  correctAns: 'true'   
  },

  {question: "Illinois law requires children under 8 years old to be secured by a restraining system or seat belt when traveling in a motor vehicle.",
  answers: ['a. Anywhere in the vehicle.', 'b. In the front seat only', 'c. In the back seat only.', 'd. Never, this is not law.'],
  correctAns: 'true'   
  },

  {question: "Drivers under age 18 must hold their instruction permit for nine consecutive months prior to obtaining their driver’s license.",
  answers: ['true', 'false'],
  correctAns: 'true'   
  },

  {question: "For what distance should a continous turn signal be given when making a left or right turn in a business or residential district",
  answers: ['a. Not less than 50 feet before turning', 'b. Not less than 75 feet before turning', 'c. Not less than 100 feet before turning'],
  correctAns: 'true'   
  },

  {question: "When waiting at an intersection and the traffic signal light turns green, a driver should look to the left and then right before proceeding into the intersection",
  answers: ['true', 'false'],
  correctAns: 'true'   
  },

  {question: "What should drivers do when approaching a construction area?",
  answers: ['a. Increase their speed quickly to get out of the way quickly', 'b. Slow down, stop all wireless telephone communications and yield the right of way.', 'c. Honk their horn several times to alert individuals working in the area of their presence'],
  correctAns: 'true'   
  },

  {question: "Drivers are not required to yield to pedestrians in a crosswalk",
  answers: ['true', 'false'],
  correctAns: 'true'   
  },

  {question: "It is permissible for anyone to wear a headset while driving",
  answers: ['true', 'false'],
  correctAns: 'true'   
  },

  {question: "Speed should be reduced below the posted speed limit for which of the following reasons:",
  answers: ['true', 'false'],
  correctAns: 'true'   
  },
  
  // {question: "https://o.quizlet.com/xMQJTp.rKkkati3nEV3S8g_m.jpg",
  // answers: ['Yield', 'Stop', 'School Crossing'],
  // correctAns: 'Stop',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/WK1NKl8lovwJDP7Gb0avqQ_m.jpg",
  // answers: ['School Zone Ahead', 'Construction Zone', 'Yield'],
  // correctAns: 'Yield',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/i/VS2LaEW9-VCbKtXBkg4cTg_m.jpg",
  // answers: ['Stop', 'All Way Stop', 'Stop Sign Ahead'],
  // correctAns: 'All Way Stop',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/SJabXm7l4cO5jP3OYAYv2g_m.png",
  // answers: ['Do Not Enter', 'Stop', 'Handicap Parking'],
  // correctAns: 'Do Not Enter',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/i/O07_bIEmFOx7Gk1Qt5Lqtg_m.jpg",
  // answers: ['Speed Zone Ahead', 'Fun Zone Ahead', 'Stop Sign Ahead'],
  // correctAns: 'Speed Zone Ahead',
  // hasImage: true
  // },

  
  // {question: "https://o.quizlet.com/K1Y3s0cONCtFfUUL.ukVWA_m.png",
  // answers:['Yield', 'Speed Limit', 'Speed Zone Ahead'],
  // correctAns: 'Speed Limit',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/kNjvuKHGcIe.q0CgzDJqTQ_m.jpg",
  // answers:['School Crossing', 'Bike Lane', 'Wrong Way'],
  // correctAns: 'Wrong Way',
  // hasImage: true
  // },
  

  // {question: "https://o.quizlet.com/DrrhLyr-h7Dh8U2zl0G64w_m.jpg",
  // answers: ['No Passing', 'No Bikes', 'Shared Bike Lane'],
  // correctAns: 'No Bikes',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/i/NRRnnEbLWwH0p24L-Xyfgw_m.jpg",
  // answers: ['No U-turn', 'No Passing', 'U-turn Permitted'],
  // correctAns: 'No U-turn',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/rUDdqIRAEzU4uwUHeASeyg_m.png",
  // answers: ['No Turns', 'Right Turns Permitted', 'No Right Turns'],
  // correctAns: 'No Right Turns',
  // hasImage: true
  // },

  // {question: "https://farm6.staticflickr.com/5124/5362911323_559ab34cae_m.jpg",
  // answers: ['This Way', 'Two way', 'One Way'],
  // correctAns: 'One Way',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/i/ck8_JjxzkhG1Wkv6jYt7Aw_m.jpg",
  // answers: ['No Should Riding', 'Keep Right', 'Merge Left'],
  // correctAns: 'Keep Right',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/i/xDEXj6sP5o83UUIqOP72ow_m.jpg",
  // answers: ['Road Closed', 'Do Not Pass', 'Road Open'],
  // correctAns: 'Road Closed',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/qUT9kB5TNZTqo2lpZavbnQ_m.png",
  // answers: ['Stop Ahead', 'Signal Ahead', 'Do Not Pass'],
  // correctAns: 'Do Not Pass',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/oz8qJUhu7rhcCd22DwjUCA_m.jpg",
  // answers: ['Bike Lane', 'No bikes', 'Stop Sign Ahead'],
  // correctAns: 'Bike Lane',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/mV4H2s8xu7KAZFWU8sie6w_m.jpg",
  // answers: ['School Crossing', 'Pedestrian Crossing', 'School Zone'],
  // correctAns: 'Pedestrian Crossing',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/xJ.1bCwElanggd90miyofw_m.jpg",
  // answers: ['Speed Limit', 'Yield Ahead', 'School Speed Limit'],
  // correctAns: 'School Speed Limit',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/wDAvkEIRysCfFJ14DplpQw_m.jpg",
  // answers: ['Stop', 'All Way Stop', 'Stop Ahead'],
  // correctAns: 'Stop Ahead',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/7EUvzNdxLBsQG4FiyFyttA_m.jpg",
  // answers: ['Yield Ahead', 'Construction Zone Ahead', 'Yield'],
  // correctAns: 'Yield Ahead',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/PNKVaxlrnezPYtNkECn3SQ_m.jpg",
  // answers: ['Railroad Crossing', 'T-Intersection', 'Signal Ahead'],
  // correctAns: 'Signal Ahead',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/MiPhdH.pMsFZqQmafhENzw_m.jpg",
  // answers: ['Crossroad Intersection', 'Hospital Ahead', 'Plus Sign'],
  // correctAns: 'Crossroad Intersection',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/kfPt1E-N06sgORK3cxpRMQ_m.jpg",
  // answers: ['Merge Right', 'All Way Stop', 'Side Road Intersection'],
  // correctAns: 'Side Road Intersection',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/AnZ078SYXXyoSMp3zmz3uQ_m.png",
  // answers: ['Y-Intersection', 'Winding Road', 'T-Intersection'],
  // correctAns: 'T-Intersection',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/Vvn5BRVfdN82ee2J7xDfrA_m.jpg",
  // answers: ['Y-Intersection', 'T-Intersection', 'Four Way Intersection'],
  // correctAns: 'Y-Intersection',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/euupw9pLt3K-zQ1lWw1s-Q_m.jpg",
  // answers: ['Winding Road', 'Slippery Pavement', 'Snake Road'],
  // correctAns: 'Winding Road',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/i/3iCm64A94d4LirR3SIQx0w_m.jpg",
  // answers: ['No Passing Zone', 'Rainbow Road', 'Road Curves'],
  // correctAns: 'Road Curves',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/iyG6MSwBp5CHXrq9MDQFCw_m.jpg",
  // answers: ['Enter', 'Exit Ramp', 'Signal Ahead'],
  // correctAns: 'Exit Ramp',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/FE47Ip5SC0CnOUqPUWqDnQ_m.jpg",
  // answers: ['Railroad Crossing', 'Slippery Pavement', 'Yield'],
  // correctAns: 'Slippery Pavement',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/9StT9jP8Pc5vVM-.1YdFjg_m.jpg",
  // answers: ['Downgrade', 'Slide', 'Upgrade'],
  // correctAns: 'Downgrade',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/g4u37VQSgEjIEPWoWKLfNw_m.jpg",
  // answers: ['Tourist Attraction', 'COnstruction Zone', 'No Passing Zone'],
  // correctAns: 'No Passing Zone',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/GaKrvLvqYgtmygxMFur8Xg_m.png",
  // answers: ['Split Lanes', 'Divided Highway', 'Merge Lanes'],
  // correctAns: 'Merge Lanes',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/ESQwVKOQaZetjnIXNrluDw_m.jpg",
  // answers: ['Change Direction', 'Road Curves', 'No Bikes'],
  // correctAns: 'Change Direction',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/HUnbF6gd.YzOmviclPopgA_m.png",
  // answers: ['No Pedestrians', 'Divide Sign', 'Stop Sign Ahead'],
  // correctAns: 'Divide Sign',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/.JACV3zRHpT8wlGuINUezA_m.jpg",
  // answers: ['Two Way Road', 'Road Closed', 'One Way'],
  // correctAns: 'Two Way Road',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/EFL3LZDgyfan-mBMPglPzA_m.jpg",
  // answers: ['No Right Turns', 'Yield Ahead', 'Road Construction'],
  // correctAns: 'Road Construction',
  // hasImage: true
  // },

  // {question: "https://o.quizlet.com/xtbCtxGfQ3oDpVzW198cDQ_m.png",
  // answers: ['Yield', 'Construction zone', 'Slow Moving Vehicle'],
  // correctAns: 'Slow Moving Vehicle',
  // hasImage: true
  // },
 
  // {question: "https://o.quizlet.com/s7MQRAhFiwX7mNxyWcjKyA_m.jpg",
  // answers: ['No Parking', 'Parking With Disabilities', 'Stop'],
  // correctAns: 'Parking With Disabilities',
  // hasImage: true
  // }

];
