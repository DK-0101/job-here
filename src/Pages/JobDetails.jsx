import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../components/PageHeader';

const JobDetails = ({card}) => {
    const {id} = useParams();
    const [job, setJob] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5173/all-job/${id}`).then(res => res.json()).then(data => setJob(data))
    }, [])

    const handleApply = async() => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
          });
          if (url) {
            Swal.fire(`Entered URL: ${url}`);
          }
    }

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <PageHeader title={"Single Job Page"} path={"Single job"}/>
        <h2>JobDetails: {id}</h2>
        <h1>{job.jobTitle}</h1>
    
        <button className=' bg-purple-700 px-8 py-2 text-white mr-4'>Full-time</button>
        <button className="bg-blue px-8 py-2 text-white" onClick={handleApply}>Apply Now</button>

        <div className="flex mt-16">
            <div className="left container">
                <h2 className='text-2xl mb-4'>Benefits</h2>
                <p className='text-gray-500 mb-2'>Pulled from the job description</p>
                <h1 className='mb-2'>1. $50-80k</h1>
                <h1 className='mb-1'>2. Disbility insurance</h1>
                <h1 className='mb-1'>3. Employee discount</h1>
                <h1 className='mb-1'>4. Flexible spending account</h1>
                <h1 className='mb-1'>5. Health insurence</h1>
                <h1 className='mb-1'>6. Paid time off</h1>
                <h1 className='mb-1'>7. Vision insurance</h1>
                <h1 className='mb-1'>Volunteer time off</h1>
                <h1 className='mb-1'>Dental insurance</h1>
            </div>

            <div className="centerr container mr-14">
                <h1 className='text-2xl mb-4'>Outline</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo inventore, ducimus esse culpa dolores nulla exercitationem obcaecati voluptatem velit aliquam, deserunt nihil ipsa laboriosam repudiandae. Sunt possimus accusantium deleniti pariatur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellendus doloribus cumque numquam, perspiciatis necessitatibus quam? Atque, possimus illo! Omnis deleniti deserunt quibusdam quis vel architecto eaque quos veritatis voluptatibus!</p>
            </div>

            <div className="right container">
                <h1 className='text-2xl mb-4'>Future Growth</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veniam eaque perferendis nemo suscipit nobis ullam quae est facilis natus adipisci eum maiores, tenetur officiis minus! Vitae suscipit minus voluptas!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ab, quaerat quisquam inventore dignissimos doloribus pariatur. Nisi voluptatibus qui nobis. Nisi aspernatur eligendi illum, fugiat enim minus perspiciatis fugit odit?</p>
            </div>
        </div>

        <p className='mt-16'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic minima aut asperiores? Libero maiores reprehenderit perferendis quos! Qui nihil iusto eos inventore rerum minima, repellat distinctio dolor, doloribus commodi expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio vel ipsam perferendis consequuntur iure placeat, vero minus obcaecati iusto voluptatem at nihil rerum perspiciatis debitis quis, nobis hic deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor velit ipsum beatae ipsa molestiae, maiores libero perferendis dolorem consequuntur iste nesciunt quia et debitis, quo numquam ab cupiditate. Quia, architecto!</p>
    </div>
  )
}

export default JobDetails
