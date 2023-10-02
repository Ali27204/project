

export default function Header2(props) {
    return(
       
        <div className="row">
            <div className="col-md-12">
                <h1 className="text-light abouttext">{props.About}</h1>
                <h5 className="text-light homeandcontact">{props.homeandcontact}</h5>
            </div>
        </div>
    
    );
}
