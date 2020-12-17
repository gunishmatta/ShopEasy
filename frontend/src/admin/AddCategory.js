import React, { useState } from 'react'
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { createCategory } from '../admin/helper/adminapicall'
const AddCategory = () => {

    const [categoryName, setCategoryName] = useState("");

    const [error, setError] = useState(false);

    const [success, setSuccess] = useState(false);

    const { user, token } = isAuthenticated();

    const handleChange = (event) => {
        setError("");
        setCategoryName(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess(false);

        //firing backend request
        createCategory(user._id, token, { categoryName }).then(data => {
            if (data.error) {
                setError(true);
            }
            else {
                setError(" ");
                setSuccess(true);
                setCategoryName("");
            }
        })
    }

    const goBack = () => {
        return (
            <div className="mt-5">
                <Link className="btn btn-sm btn-success mb-3" >Admin Home</Link>
            </div>
        )
    }

    const successMessage = () => {
        if (success) {
            return <h4 className="text-success">Category Created Successfully</h4>
        }

    }

    const warningMessage = () => {
        if (error) {
            return <h4 className="text-warning">Failed to Create Category</h4>
        }

    }

    const myCategoryForm = () => {
        return (
            <form>
                <div className="form-group">
                    <p className="lead">Enter The Category</p>
                    <input type="text" className="form-control my-3"
                        autoFocus
                        required
                        onChange={handleChange()}
                        placeholder="For Example Summer"
                        value={categoryName}
                    />
                    <button onClick={onSubmit()} className="btn btn-outline-">Create Category</button>info

</div>
            </form>
        )
    }


    return (
        <Base title="Create Category" description="Add a new Category" className="container bg-info p-4">
            <div className="row bg-white-rounded">
                <div className="col-md-8 offset-md-2">
                    {warningMessage()}
                    {successMessage()}
                    {myCategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Base>

    )
}

export default AddCategory;