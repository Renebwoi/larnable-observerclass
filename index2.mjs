var Subject = function() {
    this.observers = [];
    var obv = this.observers;
    return {
    subscribeObserver: function(observer) {
        obv.push(observer);
    },
    unsubscribeObserver: function(observer) {
        var index = obv.indexOf(observer);
        if(index > -1) {
        obv.splice(index, 1);
        }
    },
    notifyObserver: function(observer) {
        var index = obv.indexOf(observer);
        if(index > -1) {
        obv[index].notify(index);
        }
    },
    notifyAllObservers: function() {
        for(var i = 0; i < obv.length; i++){
        obv[i].notify(i);
        };
    }
    };
};

var Observer = function() {
    return {
    notify: function(index) {
        console.log("Observer " + index + " is notified!");
    }
    }
}

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObservers();
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!
// Observer 4 is notified!