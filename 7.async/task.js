class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, func, id) {
        if (id === undefined) {
            throw new Error('Не передан параметр id')
        }
        let isAlarmWithTheSameId = this.alarmCollection.some((elem) => elem.id === id);
        if (isAlarmWithTheSameId === true) {
            console.error(`Будильник c id=${id} уже существует`);
        } else {
            this.alarmCollection.push({id:id, time:time, callback:func});
        }
    }

    removeClock(id) {
        let initLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((elem) => elem.id !== id);
        let newLength = this.alarmCollection.length;
        return initLength !== newLength;
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }

    start() {
        let checkClock = (element) => {
            if (element.time === this.getCurrentFormattedTime()) {
                element.callback();
            }
        };
        let checkEachAlarmClock = () => this.alarmCollection.forEach(checkClock);
        if (this.timerId === null) {
            this.timerId = setInterval(checkEachAlarmClock, 10000);
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((elem) => console.log(`Будильник id=${elem.id} поставлен на ${elem.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}