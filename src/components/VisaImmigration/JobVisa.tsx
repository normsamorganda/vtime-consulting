'use client'
import Image from "next/image"
const JobVisa = ({key, title, job1, job2, job3, job4, job5, img} : any) => {

  return (
    <>
        <div className="shadow-lg shadow-[#fcfcfc]-500/50  py-5 mt-12 rounded-lg md:w-[450px]">
            <Image src={img} alt="" height={80} className="inline ml-12"></Image>
            <div className="font-bold px-5 ml-5">{title}</div>
                <ul className="mt-5 ml-12 font-semibold px-3 pb-3 text-[11px] md:text-sm">
                    <li className={job1 == undefined ? "hidden" : "list-disc"}>{job1}</li>
                    <li className={job2 == undefined ? "hidden" : "list-disc"}>{job2}</li>
                    <li className={job3 == undefined ? "hidden" : "list-disc"}>{job3}</li>
                    <li className={job4 == undefined ? "hidden" : "list-disc"}>{job4}</li>
                    <li className={job5 == undefined ? "hidden" : "list-disc"}>{job5}</li>
                </ul>
            
        </div>
    </>
  )
}

export default JobVisa