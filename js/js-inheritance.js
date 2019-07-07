(function () {
    "use strict";
    const createBicyclePrototye = function () {
        let speed = 0;
        const applyBrake = function (value) {
            if (value > 0 && speed > 0) {
                speed -= value;
            }
        };
        const speedup = function (value) {
            if (value > 0) {
                speed += value;
            }
        };
        const getSpeed = function () {
            return speed;
        };

        return {
            getSpeed: getSpeed,
            applyBrake: applyBrake,
            speedup: speedup
        };
    };

    const createMountainBikeProtoype = function (prototype) {
        const obj = Object.create(prototype);
        obj.gear = 1;
        obj.setGear = function (val) {
            this.gear = val;
        };

        return obj;
    };

    const start = function () {
        let bicycle = createBicyclePrototye();
        let mountainBike = createMountainBikeProtoype(bicycle);

        //alert("Speed: " + mountainBike.speed);
        console.log("Speed: " + mountainBike.getSpeed());
        console.log("Gear: " + mountainBike.gear);
        mountainBike.speedup(5);
        mountainBike.applyBrake(2);
        mountainBike.setGear(3);
        console.log("Speed: " + mountainBike.getSpeed());
        console.log("Gear: " + mountainBike.gear);

    };

    start();

    const bicyclePrototype = Object.create(createBicyclePrototye());
    const mountainBikePrototype = Object.create(createMountainBikeProtoype(bicyclePrototype));

    console.log("Bicycle Prototype Speed: " + bicyclePrototype.getSpeed());
    bicyclePrototype.speedup(30);
    bicyclePrototype.applyBrake(10);
    console.log("Bicycle Prototype Speed: " + bicyclePrototype.getSpeed());

    console.log("Mountain Bike Prototype Speed: " + mountainBikePrototype.getSpeed());
    mountainBikePrototype.speedup(30);
    mountainBikePrototype.applyBrake(10);
    console.log("Mountain Bike Prototype Speed: " + mountainBikePrototype.getSpeed());


    //USING CLASS CONSTRUCT
    class Bicycle {
        constructor(){
            this._speed = 0;
        }
        applyBreak(val){
            if(val > 0 && this._speed > 0){
                this._speed -= val;
            }
        }
        speedUp(val){
            this._speed += val;
        }

        log(){
            console.log("Bicycle: speed: " + this._speed);
        }

    }

    class MountainBike extends Bicycle{
        constructor(){
            super();
            this.gear = 0;
        }

        setGear(val){
            this.gear = val;
        }
        log(){
            console.log("Mountain Bike: speed: " + this._speed + "; gear: " + this.gear);
        }
    }

    let bicycle = new Bicycle();
    let mountainBike = new MountainBike();

    bicycle.speedUp(50);
    bicycle.applyBreak(5);
    bicycle.log();

    mountainBike.speedUp(50);
    mountainBike.applyBreak(5);
    mountainBike.setGear(3);
    mountainBike.log();

})();