export default function Title({mainTitle,subTitle}){
    return(
        <div>
            <h1 style={{backgroundColor:'#6DA0A6',borderBottom:'5px solid ',color:'white',textAlign:"center"}}>
                {mainTitle}
                <br/>
                {subTitle}

            </h1> 
        </div>
    )
}