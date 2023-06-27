'use client'
import { Text } from "@/components/Text"
import cx from 'clsx'
import { one, two, three } from "@/assets/VisaImmigration";
import ProcessVisa from '@/components/VisaImmigration/ProcessVisa'
import JobVisa from "@/components/VisaImmigration/JobVisa";
import { TitleText } from "@/components/TitleText"
import {
    others,
    tourist,
    working,
    immigrant} from '@/assets/VisaImmigration'
const ContainerVisa = () => {

        let visaProcesses = [
            {
                id:1,
                img:one,
                desc:'Determine the Type of Visa needed. (Determined/Decide)'
            },
            {
                id:2,
                img:two,
                desc:'Guide you in acquiring the visa you need. (Acquire/Obtain)'
            },
            {
                id:3,
                img:three,
                desc:'Process required documents to the relevant goverment agencies. (Process/Act)'
            },
        ]

        let visaJobs = [
            {
                id:1,
                title:'Tourist Visa',
                job1:'9(a) Temporary Visa Extention',
                job2:'Visa on Arrival',
                img:tourist

            },
            {
                id:2,
                title:'Working Visa',
                job1:'Work Permit (SWP/PWVP)',
                job2:'Alien Employment Permit (AEP)',
                job3:'9(g) Pre-arranged Employment Visa  Application & Extension',
                img:working

            },
            {
                id:3,
                title:'Immigrant Visa',
                job1:'47(a)(2) Special Non-Immigrant Visa',
                job2:'Special Investor Resident Visa (SIRV)',
                job3:'Special Resident Retirees Visa (SRRV)',
                img:immigrant

            },
            {
                id:4,
                title:'Others',
                job1:'Airport VIP Escort',
                job2:'Visa Downgrading',
                job3:'Emigration Clearance Certificate (ECC)',
                job4:'N B I Clearance',
                job5:'Blacklist name removal',
                job6:'Global Visa Processing',
                img:others
            },
        ]
  return (
    <>
    <div className="w-full text-center flex justify-center mt-12">
            <TitleText
            size='head'
            direction='center'>
            Visa & Immigration
          </TitleText>
    </div>
     <div className="flex flex-col justify-center text-left w-3/5 mx-auto tablet:w-[90%]">
        
        <div className="text-center">
        <Text
          size='normal'
          className={cx('text-black mt-5 leading-6', 'tablet:!text-sm', 'phone:!text-sm')}>
        FHI International Consulting Co. Inc.  express service allows you to attain appropriate visas and permits faster and easier.
        </Text>
        </div>
        <Text
          size='normal'
          className={cx('text-black mt-5 leading-6 text-justify', 'tablet:!text-sm', 'phone:!text-sm')}>
            <span className="text-[#2a9df4] font-bold">FHI International Consulting Co. Inc. </span> team of professionals is equipped to assist you with all your immigration concerns. Depending on your requirements
            as a local or foreign individual or company, we assist with the process of obtaining the appropriate visas and permits with different goverment agencies.
        </Text>
        <div className="pt-8">
            <h1 className="font-bold pb-8">Our Process</h1>
        
            <div className="flex flex-col lg:flex-row">
                {visaProcesses.map((process) => {
                        return (
                            <ProcessVisa key={process.id} pic={process.img} desc={process.desc} />
                        )
                    })}
            </div>
        </div>

        <div className="lg:grid grid-cols-2 md:gap-2">
            {visaJobs.map((job) => {
                return (
                    <JobVisa key={job.id} title={job.title} job1={job.job1} job2={job.job2} job3={job.job3} job4={job.job4} job5={job.job5} job6={job.job6} img={job.img} />
                )
            })}
        </div>
    </div>
    </>
   
  )
}

export default ContainerVisa