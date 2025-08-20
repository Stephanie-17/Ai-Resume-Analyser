import React, { useState, type FormEvent } from "react";
import FileUploader from "~/components/FileUploader";
import NavBar from "~/components/NavBar";

const Upload = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [statusText, setStatusText] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    
  }
	return (
		<main className="bg-[url('/images/bg-main.svg')] bg-cover">
			<NavBar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Smart feedback for your dream job</h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img src="/images/resume-scan.gif" className="w-full" alt="" />
            </>
          ):
          (
           <h2>Drop your resume for an Application Tracking System (ATS) score and improvement tips</h2> 
          )}
          {!isProcessing&& (
            <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
              <div className="form-div">
                <label htmlFor="company-name">Company Name</label>
                <input type="text" name="company-name"  placeholder="Company name" id="company-name"/>
              </div>

               <div className="form-div">
                <label htmlFor="job-title">Job title</label>
                <input type="text" name="job-title"  placeholder="Job Title" id="job-title"/>
              </div>

               <div className="form-div">
                <label htmlFor="job-description">Job Description</label>
                <textarea rows={5} name="job-description"  placeholder="Job description" id="job-description"/>
              </div>

               <div className="form-div">
                <label htmlFor="uploader">Upload Resume</label>
                <FileUploader />
              </div>

              <button className="primary-button" type="submit"> Analyze Resume</button>
            </form>
          )}
        </div>
      </section>
		</main>
	);
};

export default Upload;
