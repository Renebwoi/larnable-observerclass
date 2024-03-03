class Main {
    constructor() {
        this.observers = new Set()
    }

    add(observer) {
        this.observers.add(observer)
        console.log("added")
        console.log(this.observers)
    }

    remove(observer) {
        this.observers.delete(observer)
        console.log("removed")
    }

    notify(context) {
        for (let observer of this.observers){
            observer.update(context)
            console.log("notified")
        }
    }

}

class Observer {
    constructor() {}
    update() {
        console.log("My Name is Hulo")
    }
}

let s = new Main()
s.add(2)
s.add(3)
s.notify("goop")

let g = new Observer()
g.update()