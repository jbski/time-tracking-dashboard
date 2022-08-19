
// Add code to load daily data when page is loaded
if (window.addEventListener) {
    window.addEventListener("load", getWeeklyData, false);
 } else if (window.attachEvent) {
    window.attachEvent("onload", getWeeklyData);
 } else {
    window.onload = getWeeklyData; //will override previously attached event listeners.
 }


// Add event listeners to call functions that load JSON file data
document.getElementById('daily').addEventListener('click', getDailyData);
document.getElementById('weekly').addEventListener('click', getWeeklyData);
document.getElementById('monthly').addEventListener('click', getMonthlyData);


// Function to get daily data from JSON file
function getDailyData(){
    period = 'Yesterday';
    fetch('data.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data) {
            document.getElementById('daily').style.fontWeight = 400;
            document.getElementById('daily').style.color = '#fff';
            document.getElementById('weekly').style.fontweight = '300';
            document.getElementById('weekly').style.color = 'hsl(236, 100%, 87%, 70%)';
            document.getElementById('monthly').style.fontweight = '300';
            document.getElementById('monthly').style.color = 'hsl(236, 100%, 87%, 70%)';
            data.forEach(function(activity) {
                console.log(activity.title);
                if(activity.title == "Work"){
                    document.getElementById('work-cur').innerHTML = `${activity.timeframes.daily.current}hrs`;
                    document.getElementById('work-last-period').innerHTML = `${period} - ${activity.timeframes.daily.previous}hrs`;                    
                } else if (activity.title == "Play"){
                    document.getElementById('play-cur').innerHTML = `${activity.timeframes.daily.current}hrs`;
                    document.getElementById('play-last-period').innerHTML = `${period} - ${activity.timeframes.daily.previous}hrs`; 
                } else if (activity.title == "Study"){
                    document.getElementById('study-cur').innerHTML = `${activity.timeframes.daily.current}hrs`;
                    document.getElementById('study-last-period').innerHTML = `${period} - ${activity.timeframes.daily.previous}hrs`; 
                } else if (activity.title == "Exercise"){
                    document.getElementById('exercise-cur').innerHTML = `${activity.timeframes.daily.current}hrs`;
                    document.getElementById('exercise-last-period').innerHTML = `${period} - ${activity.timeframes.daily.previous}hrs`; 
                } else if (activity.title == "Social"){
                    document.getElementById('social-cur').innerHTML = `${activity.timeframes.daily.current}hrs`;
                    document.getElementById('social-last-period').innerHTML = `${period} - ${activity.timeframes.daily.previous}hrs`; 
                } else if (activity.title == "Self Care"){
                    document.getElementById('self-care-cur').innerHTML = `${activity.timeframes.daily.current}hrs`;
                    document.getElementById('self-care-last-period').innerHTML = `${period} - ${activity.timeframes.daily.previous}hrs`; 
                }
            });
        })
    }

// Function to get weekly data from JSON file
function getWeeklyData(){
    period = 'Last Week';
    fetch('data.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data) {
            document.getElementById('daily').style.fontWeight = '300';
            document.getElementById('daily').style.color = 'hsl(236, 100%, 87%, 70%)';
            document.getElementById('weekly').style.fontweight = '400';
            document.getElementById('weekly').style.color = '#fff';
            document.getElementById('monthly').style.fontweight = '300';
            document.getElementById('monthly').style.color = 'hsl(236, 100%, 87%, 70%)';
            data.forEach(function(activity) {
                console.log(activity.title);
                if(activity.title == "Work"){
                    document.getElementById('work-cur').innerHTML = `${activity.timeframes.weekly.current}hrs`;
                    document.getElementById('work-last-period').innerHTML = `${period} - ${activity.timeframes.weekly.previous}hrs`;                    
                } else if (activity.title == "Play"){
                    document.getElementById('play-cur').innerHTML = `${activity.timeframes.weekly.current}hrs`;
                    document.getElementById('play-last-period').innerHTML = `${period} - ${activity.timeframes.weekly.previous}hrs`; 
                } else if (activity.title == "Study"){
                    document.getElementById('study-cur').innerHTML = `${activity.timeframes.weekly.current}hrs`;
                    document.getElementById('study-last-period').innerHTML = `${period} - ${activity.timeframes.weekly.previous}hrs`; 
                } else if (activity.title == "Exercise"){
                    document.getElementById('exercise-cur').innerHTML = `${activity.timeframes.weekly.current}hrs`;
                    document.getElementById('exercise-last-period').innerHTML = `${period} - ${activity.timeframes.weekly.previous}hrs`; 
                } else if (activity.title == "Social"){
                    document.getElementById('social-cur').innerHTML = `${activity.timeframes.weekly.current}hrs`;
                    document.getElementById('social-last-period').innerHTML = `${period} - ${activity.timeframes.weekly.previous}hrs`; 
                } else if (activity.title == "Self Care"){
                    document.getElementById('self-care-cur').innerHTML = `${activity.timeframes.weekly.current}hrs`;
                    document.getElementById('self-care-last-period').innerHTML = `${period} - ${activity.timeframes.weekly.previous}hrs`; 
                }
            });
        })
    }

// Function to get monthly data from JSON file
function getMonthlyData(){
    period = 'Last Month';
    fetch('data.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data) {
            document.getElementById('daily').style.fontWeight = '300';
            document.getElementById('daily').style.color = 'hsl(236, 100%, 87%, 70%)';
            document.getElementById('weekly').style.fontweight = '300';
            document.getElementById('weekly').style.color = 'hsl(236, 100%, 87%, 70%)';
            document.getElementById('monthly').style.fontweight = '400';
            document.getElementById('monthly').style.color = '#fff'
            data.forEach(function(activity) {
                console.log(activity.title);
                if(activity.title == "Work"){
                    document.getElementById('work-cur').innerHTML = `${activity.timeframes.monthly.current}hrs`;
                    document.getElementById('work-last-period').innerHTML = `${period} - ${activity.timeframes.monthly.previous}hrs`;                    
                } else if (activity.title == "Play"){
                    document.getElementById('play-cur').innerHTML = `${activity.timeframes.monthly.current}hrs`;
                    document.getElementById('play-last-period').innerHTML = `${period} - ${activity.timeframes.monthly.previous}hrs`; 
                } else if (activity.title == "Study"){
                    document.getElementById('study-cur').innerHTML = `${activity.timeframes.monthly.current}hrs`;
                    document.getElementById('study-last-period').innerHTML = `${period} - ${activity.timeframes.monthly.previous}hrs`; 
                } else if (activity.title == "Exercise"){
                    document.getElementById('exercise-cur').innerHTML = `${activity.timeframes.monthly.current}hrs`;
                    document.getElementById('exercise-last-period').innerHTML = `${period} - ${activity.timeframes.monthly.previous}hrs`; 
                } else if (activity.title == "Social"){
                    document.getElementById('social-cur').innerHTML = `${activity.timeframes.monthly.current}hrs`;
                    document.getElementById('social-last-period').innerHTML = `${period} - ${activity.timeframes.monthly.previous}hrs`; 
                } else if (activity.title == "Self Care"){
                    document.getElementById('self-care-cur').innerHTML = `${activity.timeframes.monthly.current}hrs`;
                    document.getElementById('self-care-last-period').innerHTML = `${period} - ${activity.timeframes.monthly.previous}hrs`; 
                }
            });
        })
    }
            
            
                

                
        