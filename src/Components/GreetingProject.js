
export default function Greeting(){
    let currDate= new Date();
    currDate=currDate.getHours();
    let time=new Date().toLocaleTimeString()
    let cssStyle={};
    let Greeting_day ='';
    if(currDate >=  12 && currDate <= 20){
        Greeting_day ="Good AfterNoon";
        cssStyle.color="blue";
    }
    else if(currDate >= 1 && currDate  < 12){
        Greeting_day = "Good Morning";
        cssStyle.color="green";
    }else{
        Greeting_day = "Good Night";
        cssStyle.color="Orange";
    }
    return(
        <>
        <div>
            <h2>Hello Sir, <span style={cssStyle}>{Greeting_day}</span>
            </h2> 
        </div>
        </>
    )
}