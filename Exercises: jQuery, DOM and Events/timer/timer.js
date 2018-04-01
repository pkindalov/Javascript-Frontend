function timer(){
    let time, interval_id;
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let timeBeforStop = -1;

    startBtn.on('click', function(){
        time = timeBeforStop;

        incrementTime();

        interval_id = setInterval(incrementTime, 1000);

        startBtn.attr('disabled', true);
        stopBtn.attr('disabled', false);
    })


    stopBtn.on('click', function(){
        timeBeforStop = time;
        clearInterval(interval_id);
       
        startBtn.attr('disabled', false);
        stopBtn.attr('disabled', true);
    });




    function incrementTime(){
        time++;

        let hoursContainer = $('#hours');
        let minutesContainer = $('#minutes');
        let secondsContainer = $('#seconds');

        let hours = Math.floor( time / (60 * 60) % 24).toString();
        if(hours.length < 2){
            hours = "0" + hours;
        }

        let minutes = Math.floor( (time / 60) % 60).toString();
        if(minutes.length < 2){
            minutes = "0" + minutes;
        }

        let seconds = Math.floor(time % 60).toString();
        if(seconds.length < 2){
            seconds = "0" + seconds;
        }

        hoursContainer.text(hours);
        minutesContainer.text(minutes);
        secondsContainer.text(seconds);


    }


}