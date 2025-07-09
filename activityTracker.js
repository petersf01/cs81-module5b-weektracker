// https://github.com/petersf01/cs81-module5b-weektracker

// weekly activity array of objects
const myWeek = [
  { day: "Monday", activity: "biking", category: "physical", hoursSpent: 1, enjoyment: 8, timeOfDay: "morning" },
  { day: "Tuesday", activity: "woodworking", category: "creative", hoursSpent: 2, enjoyment: 7, timeOfDay: "evening" },
  { day: "Wednesday", activity: "biking", category: "physical", hoursSpent: 1, enjoyment: 8, timeOfDay: "morning" },
  { day: "Thursday", activity: "Radio", category: "social", hoursSpent: 1, enjoyment: 6, timeOfDay: "morning" },
  { day: "Friday", activity: "woodworking", category: "creative", hoursSpent: 1, enjoyment: 8, timeOfDay: "evening" },
  { day: "Saturday", activity: "Radio", category: "social", hoursSpent: 2, enjoyment: 7, timeOfDay: "afternoon" },
  { day: "Sunday", activity: "biking", category: "physical", hoursSpent: 2, enjoyment: 9, timeOfDay: "evening" }    
];

/*
Which activity will have the highest enjoyment?
Biking will have the highest enjoyment.

What category will dominate your week?
Biking, as it appears three times.

What patterns might exist around time of day?
Biking is mostly done in the morning, woodworking in the evening, and radio in the afternoon.

*/

function mostCommonActivity(log) {
  // map to get the activity names
  const activities = log.map(entry => entry.activity);
  // create a frequency object to count occurrences of each activity
  const frequency = {};
  
  activities.forEach(activity => {
    // here we are adding frequency[activity] to itself but we need to check if its undefined first, if so set it to 0
    frequency[activity] = (frequency[activity] || 0) + 1;
  });
  
  // now that we have total for each activity, we need to find the one with the highest count
  let maxCount = 0;
  let mostCommon = '';
  
  for (let activity in frequency) {
    if (frequency[activity] > maxCount) {
      maxCount = frequency[activity];
      mostCommon = activity;
    }
  }
  
  return mostCommon;
}

// Test the function
mostCommonActivity(myWeek);

// this function calculates the total hours spent on physical activities
function physicalActivitiesHours(log) {
  // filter the log for physical activities
  return log.filter(entry => entry.category === "physical" )
             // map to get the hours spent on each physical activity
             .map(entry => entry.hoursSpent)
             // reduce to sum up the hours. The initial value for the accumulator is 0.
             .reduce((total, hours) => total + hours, 0);
}

// Test the function
physicalActivitiesHours(myWeek);

// this function filters myWeek based on a passed function
function myFilterFunction(passedFunction) {
   return myWeek.filter(passedFunction);
}

// call myFilterFunction with a function that filters for social activities
myFilterFunction(weekEntry => weekEntry.category === "social");

