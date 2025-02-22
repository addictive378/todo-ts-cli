export class Task{
    constructor (public title: string, public isCompleted: boolean = false){}

    markDone() {
        this.isCompleted = true
    }
}