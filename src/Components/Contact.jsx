import { useState } from "react";
import validator from "validator";

const Contact = () => {

    const [data, setData] = useState({
        name: "",
        mobile: "",
        email: "",
        discription: ""
    });

    const [valid, setValid] = useState({
        name: "",
        mobile: "",
        email: "",
        discription: ""
    });
    const inputData = (event) => {
        const { name, value } = event.target;


        setValid((preValidData) => {

            return {
                ...preValidData,
                [name]: (() => {

                    if (name === "name") {
                        return (validator.isLength(data.name, { min: 4, max: 20 }));
                    }
                    if (name === "mobile") {

                        return (validator.isMobilePhone(data.mobile));
                    }
                    if (name === "mobile") {

                        return (validator.isLength(data.mobile), { min: 10, max: 10 });
                    }
                    if (name === "email") {
                        return (validator.isEmail(data.email));
                    }
                })()
            }


        })

        setData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    }




    const submitForm = (e) => {
        e.preventDefault();
        alert(`your name is ${data.name}, 
                mobile: ${data.mobile} 
                and your email Id: ${data.email} 
                and you say:
                ${data.discription}`);

    }
    return (<>
        <h1 className="text-center my-3">Contact Us</h1>
        <div className="container-md p-3 ">
            <div className="row">
                <div className="col-md-6  mx-auto">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" value={data.name} onChange={inputData} name="name" autoCapitalize="true"/>
                            <span className="text-danger">{valid.name ? "" : "**Enter your Full Name"}</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Mobile Number:</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Mobile Number" value={data.mobile} onChange={inputData} name="mobile" />
                            <span className="text-danger">{valid.mobile ? "" : "**Enter Correct Mobile Number"}</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address:</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={data.email} onChange={inputData} name="email" />
                            <span className="text-danger">{valid.email ? "" : "**Enter Correct E-mail Add."}</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Discription:</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Discription" value={data.discription} onChange={inputData} name="discription" />
                        </div>
                        <button className="btn btn-primary" onClick={submitForm}> Submit Your Form</button>
                    </form>
                </div>
            </div>
        </div>

    </>);
}

export default Contact;