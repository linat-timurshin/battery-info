navigator.getBattery().then(function (battery) {
    function updaeteAllBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischargingInfo();
    }

    updaeteAllBatteryInfo();

    battery.addEventListener('chargingchange', function () {
        updateChargeInfo();
    });

    function updateChargeInfo() {
        console.log(battery.charging);
        if (battery.charging) {
            document.querySelector('#status').innerHTML = 'Заряжается';
            document.querySelector('#battery-level').classList.add('battery-animate');
        } else {
            document.querySelector('#status').innerHTML = 'Не заряжается';
            document.querySelector('#battery-level').classList.remove('battery-animate');
        }
    };

    battery.addEventListener('lavelchange', updateLevelInfo);

    function updateLevelInfo() {
        console.log(battery.level)
        document.querySelector('#battery-level-digit').innerHTML = battery.level * 100 + '%';
        document.querySelector('#battery-level').style.width = battery.level * 100 + '%';
    };

    battery.addEventListener('chargingtimechange', updateChargingInfo);

    function updateChargingInfo() {
        //battery.chargingTime
        console.log('charge' + battery.chargingTime)
        document.querySelector('#charging-time').innerHTML = battery.chargingTime;
    };

    battery.addEventListener('dischargingtimechange', updateDischargingInfo);

    function updateDischargingInfo() {
        //battery.dischargingTime
        console.log('dis' + battery.dischargingTime)
        document.querySelector('#discharging-time').innerHTML = battery.dischargingTime;
    };
});