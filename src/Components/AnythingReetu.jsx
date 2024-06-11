
export default function Counter() {
    let count = 0;

    const increase = () => {
        count = count +  1;
        console.log(count)
    };

    const decrease = () => {
        if (count > 0) {
            count = count - 1;
            console.log(count)
        }
    };
    return (
        <>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button><br></br>
            <p>{count}</p>
        </>
    )
}


