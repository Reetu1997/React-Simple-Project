export default function Editable(){
    const img1="https://picsum.photos/200/300";
    const img2="https://picsum.photos/seed/picsum/200/300";
    const img3="https://picsum.photos/200/300/?blur=2";
    const img4 ="https://picsum.photos/200/300";
    const img5 ="https://picsum.photos/200/300";
    const links ="https://picsum.photos/"
    const colorHead={
        color:"blue",
        fontSize:30,
        textAlign:"center",
        paddingTop:30,
        fontFamily:"Georgia, serif",
        textShadow:"0px 2px 4px black"
    }
    const colorimage={
        width:400,
        display:"grid",
        gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",
        gap:46,alignItems:"center",
        padding:40
    }
    return(
        <>
        <h1 style={colorHead}>This is My Image Gallery</h1>
        <div style={colorimage}>
        <a href={links} target="_blank" >
            <img src={img1} alt="randomimages" />
        </a>
        <a href={links} target="_blank" >
            <img src={img2} alt="randomimages" />
        </a>
        <a href={links} target="_blank" >
                <img src={img3} alt="randomimages" />
        </a>
            <img src={img4} alt="randomimages" />
            <img src={img5} alt="randomimages" />
        </div>
        </>
    )
}