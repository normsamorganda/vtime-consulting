'use-client'
import Image from "next/image"
import {legal, center, tax} from "@/assets/Outsourcing";


const OutsourcingServices = () => {
  return (
<>
     <div className="mx-auto w-[90%] mb-12 text-xs md:w-3/5">
      <h1 className="text-lg font-semibold pb-6">Bookkeeping And <br></br> Tax Compliance</h1>
      <p className="text-justify text-sm">Let us take care of your books and taxes, so you can focus on growing your business</p>
      <div className="flex flex-col justify-between shadow-lg rounded-xl shadow-gray-500/50 mt-6 md:flex-row">
          <ul className="list-disc order-2 pl-12 pb-4 font-semibold text-sm md:order-1 md:px-[80px] ">
            <li className="pt-3 md:pt-6">Trial Balance</li> 
            <li className="pt-3 md:pt-6">Comparative Balance Sheets (Yearly)</li> 
            <li className="pt-3 md:pt-6">Comparative Income Statements (Montly and Yearly)</li> 
            <li className="pt-3 md:pt-6">
              Copy of filed goverment reports
                  <ul className="list-disc pl-3 pt-3">
                    <li>1601 E, 1604E, 1702Q, 1702,2550M,  2550Q for Vat registered</li>
                    <li>2551M, 2551Q for non-VAT registered  clients</li>
                  </ul>
              </li> 
              <li className="pt-3">Financial Audit</li> 
          </ul>
          <div className="md:order-2">
            <Image src={tax} alt="tax" width={500} className="lg:h-[23rem]"></Image>
          </div>
      </div>
    </div>
  <div className="mx-auto w-[90%] mb-12 text-[12px] md:w-3/5 ">

      <h1 className="text-lg font-semibold pb-6">Business Center</h1>
      <p className="text-justify text-sm pb-3">Our services include basic adminitrative and corporate seretarial support, as well as dedicated guidance and assistance with desk and meeting room rental.</p>
      <p className="text-justify text-sm pb-3">We are here to provide you with hands-on support, whether you need a complete back-office solution or shared office space</p><br></br>

    <div className="flex flex-col justify-between shadow-lg rounded-xl shadow-gray-500/50 mt-6 text-sm md:flex-row">
        <ul className="list-disc order-2 pl-12 pb-4 md:order-1 md:px-[80px] md:pt-6">
          <li className="pt-3 md:pt-6">
            <span className="font-semibold">Virtual Office</span>
                <ul className="list-disc pl-3 pt-3">
                  <li>Prestigious office address for  business registration</li>
                  <li>Access to administrative support</li>
                  <li>Receptionist to greet guests</li>
                  <li>Incoming call forwarding</li>
                  <li>Mail handling</li>
                </ul>
              </li> 
          <li className="pt-3 md:pt-6">
                <span className="font-semibold">Flexi-desk / Shared Offices</span>
                <ul className="list-disc pl-3 pt-3">
                    <li>Located in Central Business  Districts within Metro Manila</li>
                    <li>24/7 building security</li>
                    <li>Secure, business-grade internet and  WiFi</li>
                    <li>Booking of the meeting room on an  occasional basis </li>
                    <li>Mail handling</li>
                </ul>
          </li> 
        </ul>
        <div className="md:order-2">
          <Image src={center} alt="center" width={500} className="lg:h-[23rem]"></Image>
        </div>
    </div>
  </div>
  <div className="mx-auto w-[90%] mb-12 text-sm md:w-3/5 ">

    <h1 className="text-xl font-semibold pb-6">Legal</h1>
    <p className="text-justify pb-3">Our legal team is a blend of seasoned consultants, lawyers, and audit and risk professionals.</p>
    <p className="text-justify pb-3">We can help you deliver your strategic objectives, improve efficiency and navigate the increasingly complex regulatory and compliance challenges that you may face.</p>
    <p className="text-justify pb-3">With our relationship and connections with different local goverment units, the processing of your documents will be prioritized.</p>
    <div className="flex flex-col justify-between shadow-lg rounded-xl shadow-gray-500/50 mt-6 text-sm md:flex-row">
        <ul className="list-disc order-2 pl-12 pb-4 font-semibold md:order-1 md:px-[80px] md:pt-6">
          <li className="pt-3 md:pt-6">Corporate Structuring</li> 
          <li className="pt-3 md:pt-6">Mergers and Acquisitions</li> 
          <li className="pt-3 md:pt-6">Private Equity</li> 
          <li className="pt-3 md:pt-6">Corporate Governance</li> 
          <li className="pt-3 md:pt-6">Due Diligence</li> 
          <li className="pt-3 md:pt-6">Commercial Transactions</li> 
          <li className="pt-3 md:pt-6">Employee Relations Management</li> 
        </ul>
        <div className="md:order-2">
          <Image src={legal} alt="tax" width={500} className="lg:h-[23rem]"></Image>
        </div>
    </div>
</div>



</>
   
  )
}

export default OutsourcingServices