
function Project(props) {
    return (
        <div className="cardContainer col-lg-4 col-sm-12 my-lg-5 my-sm-4">
            <div className="card">
                <img src={'./images/'+props.img} className="card-img-top" alt="snake game board" />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.descr}</p>
                    </div>
                    <div className="mt-3">
                        <a href={props.deployedLink} target="_blank" className="btn btn-primary d-block">{props.btn}</a>
                        <a href={props.githubLink} target="_blank" className="btn btn-primary mt-2 d-block">Go to GitHub Repo</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Project;