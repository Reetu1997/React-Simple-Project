export default function Caluculator(){
    function sum(a,b){
        return a+b;
    }
    function sub(a,b){
        return a-b;
    }
    function div(a,b){
        return a/b;
    }
    function mul(a,b){
        return a*b;
    }
    return (
        <>
            <ul>
                <li>Sum of two numbers {sum(5,6)}</li>
                <li>Subtract of two numbers {sub(10,2)}</li>
                <li>division  of two numbers {div(5,6)}</li>
                <li>multiple of two numbers {mul(10,2)}</li>
            </ul>
        </>
    )
}