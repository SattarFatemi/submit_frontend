//subtitle
let cnt = 0;
let subtitles = [
    { text: 'ثبت نام آغاز شد: برنامه نویسی مقدماتی', url: 'https://sbmt.ir' },
    { text: 'ثبت نام تموم شد: برنامه نویسی پیشرفته', url: 'https://sbmt.ir' },
    { text: 'ظرفیت تکمیل شد: برنامه نویسی', url: 'https://sbmt.ir' },
];
let subtitleObj = document.getElementById('subtitle');
subtitleObj.style.fontFamily = "iransans";
subtitleObj.innerHTML = subtitles[0].text;
subtitleObj.href = subtitles[0].url;
setInterval(() => {
    cnt++;
    subtitleObj.innerHTML = subtitles[cnt%3].text;
    subtitleObj.addEventListener('click', () => {
        subtitleObj.href = subtitles[cnt%3].url;
    });
}, 5000);