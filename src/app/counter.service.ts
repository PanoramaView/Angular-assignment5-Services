export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveCounter(){
        this.activeToInactiveCounter++;
        console.log("Active Counter: " + this.activeToInactiveCounter);
    }

    incrementInactiveCounter(){
        this.inactiveToActiveCounter++;
        console.log("Active Counter: " + this.inactiveToActiveCounter);
    }
}