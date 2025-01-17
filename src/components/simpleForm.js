import React, { useState } from "react";

const SimpleForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const [submittedData, setSubmittedData] = useState(null);
    const [errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {
        const{name,value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Validate the form
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        return newErrors;
    };

    // Handle form submittion
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
          setSubmittedData(formData);
          setErrors({});
          setFormData({ name: "", email: "" }); // Reset form
        } else {
          setErrors(validationErrors);
        }
    };

    return (
        <div>
          <h1>Simple React Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                />
              </label>
              {errors.fname && <p style={{ color: "red" }}>{errors.fname}</p>}
            </div>
            <div>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <button type="submit">Submit</button>
          </form>
    
    
          {submittedData && (
            <div>
              <h2>Submitted Data</h2>
              <p>Name: {submittedData.name}</p>
              <p>Email: {submittedData.email}</p>
            </div>
          )}
        </div>
    );
};
    
    
export default SimpleForm;
    
    
