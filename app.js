const slackDisplayName = document.querySelector('[data-testid="slackDisplayName"]');
const slackEmail = document.querySelector('[data-testid="slackEmail"]');
const slackProfilePicture = document.querySelector('[data-testid="slackProfilePicture"]');
const currentTime = document.querySelector('.current-time');
const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');


function updateCurrentTimeAndDay() {
    const now = new Date();
    const utcString = now.toISOString().slice(11,19);


    const currentTimeUTC = `
    ${now.getUTCHours().toString().padStart(2, '0')}
     ${now.getUTCMinutes().toString().padStart(2, '0')} 
     ${now.getUTCSeconds().toString().padStart(2, '0')} `;
    document.querySelector('[data-testid="currentTimeUTC"]').textContent=currentTimeUTC;

     const daysOfWeek = ['Sunday','Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday'
     ];

     const currentDay = daysOfWeek[now.getUTCDay()];
     document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

updateCurrentTimeAndDay();
setInterval(updateCurrentTimeAndDay,1000);