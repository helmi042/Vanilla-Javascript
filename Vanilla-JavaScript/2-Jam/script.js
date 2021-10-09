function showTime(){
    let date = new Date();
    let jam = date.getHours();
    let menit = date.getMinutes();
    let detik = date.getSeconds();

    jam = (jam < 10) ? `0${jam}` : jam;
    menit = (menit < 10) ? `0${menit}` : menit;
    detik = (detik < 10) ? `0${detik}` : detik;

    let handleSapa = (jam >= 10 && jam < 14) ? 'Selamat Siang, Helmi'
            : (jam >= 14 && jam < 18) ? 'Selamat Sore, Helmi'
            : (jam >= 18 && jam < 4) ? 'Selamat Malam, Helmi'
            : (jam >= 4 && jam < 10) ? 'Selamat Pagi, Helmi'
            : '';
    const sapa = document.getElementById('sapa');
    sapa.innerHTML = handleSapa;

    const clockDisplay = document.getElementById('clock-display');
    clockDisplay.innerHTML = `${jam} : ${menit} : ${detik}`;

    setTimeout(showTime, 1000);
}

showTime();