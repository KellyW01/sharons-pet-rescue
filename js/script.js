const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function(name, species) {
    const pet = {
        name : name,
        species : species,
        isTired : 5,
        sleep : function(){
            console.log(`${name} needs a nap. Zzz...`);
            isTired = 1;
        },
        play : function (){
            if (this.isTired ===10){
                console.log(`${this.name} is too tired to play`);
                this.sleep();
            } else {console.log(`${this.name} loves to play!`);
                    isTired +1;
                    }
        },
    };
return pet();
};