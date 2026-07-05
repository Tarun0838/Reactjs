import React from 'react'
import './App.css'
import Card from './components/Card'
import User from './components/User'


const App = () => {

  const arr = [1 , 2, 3, 4];

  const jobs = [
  {
    id: 1,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    posted: "2 days ago",
    role: "Frontend Engineer",
    type: "Full-time",
    level: "Mid Level",
    salary: "$85/hr",
    location: "Bengaluru, India"
  },
  {
    id: 2,
    company: "Amazon",
    logo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part-time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    posted: "1 day ago",
    role: "Software Engineer",
    type: "Full-time",
    level: "SDE II",
    salary: "$95/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    company: "Meta",
    logo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    posted: "3 days ago",
    role: "React Developer",
    type: "Remote",
    level: "Mid Level",
    salary: "$105/hr",
    location: "London, UK"
  },
  {
    id: 5,
    company: "Apple",
    logo:"https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    posted: "Today",
    role: "iOS Engineer",
    type: "Full-time",
    level: "Senior",
    salary: "$130/hr",
    location: "California, USA"
  },
  {
    id: 6,
    company: "Netflix",
    logo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    posted: "4 days ago",
    role: "Backend Engineer",
    type: "Hybrid",
    level: "Senior",
    salary: "$115/hr",
    location: "Los Gatos, USA"
  },
  {
    id: 7,
    company: "NVIDIA",
    logo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    posted: "6 days ago",
    role: "AI Engineer",
    type: "Full-time",
    level: "Experienced",
    salary: "$150/hr",
    location: "Santa Clara, USA"
  },
  {
    id: 8,
    company: "Adobe",
    logo: "https://logo.clearbit.com/adobe.com",
    posted: "2 days ago",
    role: "Product Designer",
    type: "Remote",
    level: "Senior",
    salary: "$100/hr",
    location: "Noida, India"
  },
  {
    id: 9,
    company: "Uber",
    logo: "https://logo.clearbit.com/uber.com",
    posted: "1 week ago",
    role: "Full Stack Developer",
    type: "Full-time",
    level: "SDE II",
    salary: "$90/hr",
    location: "Gurugram, India"
  },
  {
    id: 10,
    company: "Airbnb",
    logo: "https://logo.clearbit.com/airbnb.com",
    posted: "3 days ago",
    role: "Frontend React Developer",
    type: "Remote",
    level: "Mid Level",
    salary: "$98/hr",
    location: "Singapore"
  }
];


  return (
    <div className='parent' >
      {jobs.map((e)=> {
        return <Card company= {e.company} posted={e.posted} role={e.role} salary = {e.salary} location={e.location} logo={e.logo} />
      })}
    </div>
  )
}

export default App
