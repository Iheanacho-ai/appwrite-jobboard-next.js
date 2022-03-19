import { Appwrite } from 'appwrite';
import { useEffect, useState } from "react";
import Link from 'next/link'


const CreateJob = () => {
    // Init your Web SDK
    const sdk = new Appwrite();

    sdk
        .setEndpoint('http://localhost/v1') // Your API Endpoint
        .setProject('62344efd2fc3d5d96374') // Your project ID
    ;

    async function createAnonymousSession(){
        try{
            await sdk.account.createAnonymousSession();

        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(()=> {
        createAnonymousSession()
    }, [])
    
      
      

    const [job, setJobTitle] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [place, setPlace] = useState('')

    const handleJobBoard = () => {

        console.log('wetin dey occur', job)
     
        let promise = sdk.database.createDocument('62344f0d239ea91e9c6d', 'unique()', {
           "jobTitle" : job,
           "companyName": companyName,
           "place": place
        });
        
        promise.then(function (response) {
            setJobTitle('');
            setCompanyName('');
            setPlace('');
            
            alert('your job item has been successfully saved'); // Success

        }, function (error) {
            console.log(error)
        });
        

        
    }

    return(
        <div className="create-job">
            <h2>Create a Job Post</h2>
            <form action="">
                <div className='txt-field'>
                    <input type="text" value={job} onChange = {(e) => setJobTitle(e.target.value)}/>
                    <span></span>
                    <label htmlFor="input">Job Title</label>
                </div>
                <div className='txt-field'>
                    <input type="text" value={companyName} onChange = {(e) => setCompanyName(e.target.value)}/>
                    <span></span>
                    <label htmlFor="input">Company Name</label>
                </div>
                <div className='txt-field'>
                    <input type="text" value={place} onChange = {(e) => setPlace(e.target.value)}/>
                    <span></span>
                    <label htmlFor="input">Place</label>
                </div>
                <div className='submit' onClick={handleJobBoard}>Add Job</div>
            </form>
            <p>See your Job Board <Link href="/list-job"><a>here</a></Link></p>
        </div>
    )
}

export default CreateJob;