const ListJobItem = ({jobList, handleDelete}) => {
    return (
        <div className="list-job-item">
            {
                jobList.map(({jobTitle, companyName, place, $id}) => (
                    <div className="item" id={$id}>
                        <h3>{jobTitle}</h3>
                        <p>{companyName}</p>
                        <p>{place}</p>
                        <button type="button" className="delete" onClick={() => handleDelete($id)}>delete</button>
                    </div>
                ))
            }
            
        </div> 
    )
}

export default ListJobItem;
