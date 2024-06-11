export default function ReactProperties() {
    const cards = [
        {

            imgSrc: "https://assets-prd.ignimgs.com/2024/05/07/baby-reindeer-blogroll-1715103483649.jpeg",
            sName: "A Netflix Original Series",
            title: "Dark"
        },
        {
           
            imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYleNNoDWg9PHJcsMfi5TsEKCucIu7uibm9b5wSHASHVNp7vtYd0rC3uTvCt5lVdUtkh-kF8dLlVgJopxuJsFJro0ASDiqjwmDlOaXCQ",
            sName: "A Netflix Original Series",
            title: "Extra Curicular"
        },
        {
            
            imgSrc: "https://www.geo.tv/assets/uploads/updates/2024-05-09/543211_7280883_updates.jpg",
            sName: "A Netflix Original Series",
            title: "Strander Things"
        },
        {
            
            imgSrc: "https://www.geo.tv/assets/uploads/updates/2024-05-09/543211_7280883_updates.jpg",
            sName: "A Netflix Original Series",
            title: "Dark"
        },
        {
            
            imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYleNNoDWg9PHJcsMfi5TsEKCucIu7uibm9b5wSHASHVNp7vtYd0rC3uTvCt5lVdUtkh-kF8dLlVgJopxuJsFJro0ASDiqjwmDlOaXCQ",
            sName: "Azon Original Series",
            title: "The Vampire Dairies"
        },
        {
           
            imgSrc: "https://assets-prd.ignimgs.com/2024/05/07/baby-reindeer-blogroll-1715103483649.jpeg",
            sName: "A Netflix Original Series",
            title: "My First-2 Love"
        },
        
    ];
    return (
        <>
        <h1>List of 5 netflix series in 2022</h1>
            <div className="cards">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <img src={card.imgSrc} alt={`Card ${index}`} className="card_img" />
                        <div className="card_info">
                            <span className="card_category">{card.sName}</span>
                            <h3 className="card_title">{card.title}</h3>
                            <a href="#" target="_blank">
                                <button>Watch Now</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
