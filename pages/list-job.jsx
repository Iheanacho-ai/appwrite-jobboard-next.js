import sdk from '../utils/web-init';
import { useEffect, useState } from "react";
import ListJobItem from '../components/list-job-item';

const ListJob = () => {

    const [jobList, setJobList] = useState()

    const listProducts = async () => {
        try {
            let response = await sdk.database.listDocuments('6240861391d0880c7d38');
            setJobList(response.documents)
            
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        listProducts()
    }, [])
    

    const handleDelete = async (documentid) => {
        try {
            await sdk.database.deleteDocument('6240861391d0880c7d38', documentid);
            alert("item have been deleted successfully")
            listProducts()
            
        } catch (error) {
            console.log(error)
        }
    }
    


    return(
        <div className="list-job">
            {
                jobList ? <ListJobItem  jobList= {jobList} handleDelete= {handleDelete}/> : null
            }
        </div>
    )
};

export default ListJob;