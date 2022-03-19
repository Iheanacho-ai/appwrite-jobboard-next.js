import { Appwrite } from 'appwrite';
import { useEffect, useState } from "react";
import ListJobItem from '../components/list-job-item';

const ListJob = () => {

    const [jobList, setJobList] = useState()
    
    const sdk = new Appwrite();

    sdk
        .setEndpoint('http://localhost/v1') // Your API Endpoint
        .setProject('62344efd2fc3d5d96374') // Your project ID
    ;

    
    let promise = sdk.database.listDocuments('62344f0d239ea91e9c6d');


    useEffect(() => {
        promise.then(function (response) {
            console.log(response); // Success
            setJobList(response.documents)
            console.log(jobList)
        }, function (error) {
            console.log(error); // Failure
            alert('error encountered try again');
        });
    }, [])
    


    useEffect(() => {
        console.log('joblist',jobList)
    }, [jobList])



    const handleDelete = (documentid) => {
        promise = sdk.database.deleteDocument('62344f0d239ea91e9c6d', documentid);

        promise.then(function (response) {
            alert('succesfully deleted')
            console.log(response); // Success
        }, function (error) {
            alert('nope tf you thought??')
            console.log(error); // Failure
        });

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