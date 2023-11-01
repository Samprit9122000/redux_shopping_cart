import {Chance } from "chance";

const chance=Chance();

const fakeData=()=>{
    return (chance.name()+','+chance.country({ full: true }));

}

export default fakeData;
