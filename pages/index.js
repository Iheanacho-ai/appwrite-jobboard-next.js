import sdk from '../utils/web-init';
import { useEffect, useState } from "react";
import Link from 'next/link'


const CreateJob = () => {

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

     
        let promise = sdk.database.createDocument('6240861391d0880c7d38', 'unique()', {
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
                <button type= "button" className='submit' onClick={handleJobBoard}>Add Job</button>
            </form>
            <p>See your Job Board <Link href="/list-job"><a>here</a></Link></p>
        </div>
    )
}

export default CreateJob;