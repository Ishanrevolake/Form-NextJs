import Head from 'next/head'
import Image from 'next/image'

import { useForm, ValidationError } from "@formspree/react";
import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react'
import { useRouter } from 'next/router'




export default function Home() {


  const router = useRouter()

  const [inputFields, setInputFields] = useState([{
    item: '',
  }]);

  const addInputField = () => {
    setInputFields([...inputFields, {
      item: '',
    }])

  }
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  }
  const handleChange = (index, evnt) => {

    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  }

  const registerUser = () => {
    console.log("Done");
    router.push('/nextPage');


  }

  return (

    <div


    >

      <nav class="navbar">
     
        <div class="logo">MUO</div>
    
        <ul class="nav-links">
        
         
       
          <div class="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
          
            <li><a href="/">Location</a></li>
            <li><a href="/">Contact</a></li>
          </div>
        </ul>
      </nav>


    <br></br>
      <div className="container">




        <div >
          <form onSubmit={registerUser}  >

            <div className="col-lg-6">

              <p>
                <label
                  htmlFor="namedash"
                  className="label"

                >
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="input"
                  id="namedash"
                  placeholder="Enter the name"
                />
              </p>


            </div>
            <div className="col-lg-6">

              <p>
                <label
                  htmlFor="namedash"
                  className="label"
                >
                  Hospital name
                </label>
                <input
                  required
                  type="text"
                  className="input"
                  id="namedash"
                  placeholder="Enter hospital name"
                />
              </p>

            </div>

            <div className="col-lg-6">

              <p>
                <label
                  htmlFor="namedash"
                  className="label"
                >
                  Contact Number
                </label>
                <input
                  required
                  type="text"
                  className="input"
                  id="namedash"
                  placeholder="Enter Phone number"
                />
              </p>

            </div>

            <div className="col-lg-6">

              <p>
                <label
                  htmlFor="namedash"
                  className="label"
                >
                  Email
                </label>
                <input
                  required
                  type="text"
                  className="input"
                  id="namedash"
                  placeholder="Enter Email "
                />
              </p>

            </div>

            <div className="cols-lg-12">

              <p className='textarea'>
                <label
                  htmlFor="aboutTextarea"
                  className="label"
                >
                  Description
                </label>



                <textarea

                  type="textarea"
                  maxLength="10"

                  name="textarea"
                  id="aboutTextarea"
                  placeholder="Type Description here"
                ></textarea>
              </p>
            </div>

            <div className="additem">

              <div className='itemMenu' >
                {
                  inputFields.map((data, index) => {
                    const { item } = data;
                    return (
                      <div className="items" key={index}>
                        <div className="col">
                          <div className="itemName">
                            <input type="text" onChange={(evnt) => handleChange(index, evnt)} required value={item} name="item" className="form-control" placeholder=" Item" />
                          </div>
                        </div>
                        <br></br>
                        <div className="col">
                          <div className="form-group">
                            <input type="text" onChange={(evnt) => handleChange(index, evnt)} required value={item} name="Description" className="form-control" placeholder=" Description" />
                          </div>
                        </div>

                        <div className="removeButtondiv">


                          {(inputFields.length !== 1) ? <button className="removebutton" type="button" onClick={removeInputFields}>x</button> : ''}


                        </div>
                      </div>
                    )
                  })
                }

              </div>
              <div className="col-sm-12">
                <button className="buttonAdd" type="button" onClick={(addInputField)}>Add Item</button>
              </div>


            </div>

            <center>


              <button
                type="submit"
                className="submitButton"

              >
                Submit
              </button>

            </center>




          </form>
        </div>



      </div>
    </div>

  )

}
