class Subject {
    constructor() {
        this.observers = [];
        var obv = this.observers;
        return {
            AddPhoneNumber: function (observer) {
                obv.push(observer);
            },
            RemovePhoneNumber: function (observer) {
                var index = obv.indexOf(observer);
                if (index > -1) {
                    obv.splice(index, 1);
                }
            },
            DialPhoneNumber: function (observer) {
                var index = obv.indexOf(observer);
                if (index > -1) {
                    // obv[index].notify(index);
                    obv[index].inform(observer.bean);
                }
            },
            // DialAllPhoneNumbers: function () {
            //     for (var i = 0; i < obv.length; i++) {
            //         obv[i].notify(i);
            //     };
            // }
            DialAllPhoneNumbers: function (observer) {
                for (var i = 0; i < obv.length; i++) {
                    // obv[i].notify(i);
                    obv[i].inform(observer.bean);
                };
            }
        };
    }
}

class Observer {
    constructor(number) {
        this.number = number;
        return {
            // notify: function (index) {
            //     console.log("Observer " + index + " is notified!");
            // },
            inform: function (numbe) {
                console.log(`${numbe} is calling`)
            },
            bean: this.number
        };
    }
}

class DialerObserver {
    constructor(number) {
        this.number = number;
        return {
            // notify: function (index) {
            //     // console.log("Observer " + index + " is notified!");
            //     console.log(`Now Dialing 2347023232`);
            // },
            inform: function (numbe) {
                // console.log(`${numbe} is calling`)
                console.log(`Now Dialing 2347023232`);
            },
            bean: this.number
        };
    }
}

var subject = new Subject();

var observer1 = new Observer("123");
var observerDial = new DialerObserver("234")

subject.AddPhoneNumber(observer1);
subject.AddPhoneNumber(observerDial);

// subject.DialPhoneNumber(observer1); // Observer 2 is notified!
// subject.DialPhoneNumber(observerDial)
// console.log("juyt",observer1.bean)
subject.DialAllPhoneNumbers(observer1);
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!
// Observer 4 is notified!