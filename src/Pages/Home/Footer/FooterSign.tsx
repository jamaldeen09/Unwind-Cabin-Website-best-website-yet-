import React, { useState } from "react";


const FooterSign = () => {
  const [errMsg, setErrMsg] = useState<string>("");

  const [ usersEmail,setUsersEmail ] = useState<string>("")

  const handleUsersEmail = (event) => {
    setUsersEmail(event.target.value);
  }

  const validateEmail  = (email: string) => {
    if (!email) {
        return false
    }
    else if (!email.includes("@") && !email.includes(".")) {
        return false
    } 
    else{
        return true
    }
  }

  const handleSubmitting = () => {
    const validation = validateEmail (usersEmail);

    if (!validation) {
        setErrMsg ("Invalid Email")
    } else {
        
        setErrMsg ("");
    }
  }
  return (
    <div className="min-h-fit poppins border-b py-10 border-green-800 flex gap-10
    max-sm: flex-col
    sm:flex-col
    midLaptop:flex-col
    lg:flex-row">
      {/* sign text */}
      <div className="flex flex-col gap-6 w-full justify-center">
        <h1 className="text-green-200 text-2xl">Sign up to our Newsletter</h1>

        <h2 className="text-white">
          For a weekly curated collection of 3 things you can watch, read or{" "}
          <br />
          listen to switch off from the busyt everyday.
        </h2>
      </div>

      {/* sign up */}
      <div className="flex gap-4 flex-col w-full justify-center 
      sm:flex-col 
      midLaptop:items-start
      lg:items-end">
        <div className="flex gap-4 flex-col md:flex-row ">
          <input
            value={usersEmail}
            onChange={handleUsersEmail}
            type="text"
            placeholder="JasonLogan@gmail.com"
            className="h-[7vh] px-5 rounded-md
            midLaptop:w-[30vw]
            lg:w-[20vw] "
          />
          <button onClick={handleSubmitting} className="bg-yellow-400 px-5 py-4 rounded-md footerBtn">
            Join the mailing list
          </button>
        </div>

        <div className="text-center w-full max-w-xl">
          <p className={`${errMsg === "Invalid Email" ? "text-red-600" : null}`}>
            {
                errMsg
            }
            </p>
        </div>

      </div>
    </div>
  );
};

export default FooterSign;
