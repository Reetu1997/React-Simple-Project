import React from "react";

export const SlotM = (props) => {
    let {x,y,z}=props;
    if ((x === y) && (y === z)) {
        return (
            <>
                <div className="slot_dinner">
                    <h1>{x} {y} {z}</h1>
                    <h3>This is matching</h3>
                </div>
            </>
        );
    } else {
    }
    return (
        <>
            <div className="slot_dinner">
                <h1>{x} {y} {z}</h1>
                <h3>This is Not matching</h3>
            </div>
        </>
    );
};

const SlotMachineGame = () => {
    return (
        <>
            <h1 className="heading_style">
                🎰 Welcome To <span style={{ fontWeight: "bold" }}>Slot Machine Game 🎰</span>
            </h1>
            
            <div className="slotMachine">
                <SlotM x='🤩' y='🤩' z='🤩'/>
                <SlotM x='😏' y='😏' z='😏' />
                <SlotM x='🤩' y='🤩' z='⚾'/>
                <SlotM x='🍿' y='🍿' z='🍿'/>
            </div>
           
        </>
    );
};

export default SlotMachineGame;
