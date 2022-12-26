import React from 'react';
import { useForm } from 'react-hook-form';

const AddmissionForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const testSubmit = data =>{
        console.log(data);
    }
    return (
        <div className='form-control w-full mx-auto max-w-xl mt-6 ' data-theme="light">
            <h1>Enter Details: </h1>
            <form onSubmit={handleSubmit(testSubmit)} className='border m-3 p-2'>

                <div className="max-w-xs mx-auto bg-slate-700 p-2 rounded mt-1">
                    <label className="label "> <span className="label-text text-purple-100">Students Name</span></label>
                    <input type="text" {...register("studentName", {
                        required: "Student name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.studentName && <p className='text-orange-600'>{errors.studentName.message}</p>}
                </div>
                <div className="max-w-xs mx-auto bg-slate-700 p-2 rounded mt-1">
                    <label className="label "> <span className="label-text text-purple-100">Guardian Name</span></label>
                    <input type="text" {...register("guardianName", {
                        required: "Guardian Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.guardianName && <p className='text-orange-600'>{errors.guardianName.message}</p>}
                </div>
                <div className="max-w-xs mx-auto bg-slate-700 p-2 rounded mt-1">
                    <label className="label "> <span className="label-text text-purple-100">Before Institution Name</span></label>
                    <input type="text" {...register("XInstitutionName", {
                        required: "Before Institution name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.XInstitutionName && <p className='text-orange-600'>{errors.XInstitutionName.message}</p>}
                </div>
                <div className="max-w-xs mx-auto bg-slate-700 p-2 rounded mt-1">
                    <label className="label "> <span className="label-text text-purple-100">Guardian Contact Number</span></label>
                    <input type="number" {...register("guardianPhone", {
                        required: "Guardian Contact Number is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.guardianPhone && <p className='text-orange-600'>{errors.guardianPhone.message}</p>}
                </div>
                <div className="max-w-xs mx-auto bg-slate-700 p-2 rounded mt-1">
                    <label className="label "> <span className="label-text text-purple-100">Image</span></label>
                    <input type="file" {...register("studentsPic", {
                        required: "Image is Required"
                    })} className="w-full " />
                    {errors.studentsPic && <p className='text-orange-600'>{errors.studentsPic.message}</p>}
                </div>

                <div className='max-w-xs mx-auto bg-slate-700 p-2 rounded mt-1'>
                    <label className="label"> <span className="text-purple-100">Select Class</span></label> <br />
                    <select {...register("selectedClass", { required: true })} className="w-full text-center">
                        <option value="Six">Six</option>
                        <option value="Seven">Seven</option>
                        <option value="Eight">Eight</option>
                        <option value="Nine">Nine</option>
                        <option value="Ten">Ten</option>
                        <option value="Extra">Coaching Section</option>

                    </select>
                </div>

                
                <button className='btn mt-1' type='submit'>Admit</button>

            </form>
            {/* <input type="text" {...register("name", {required: "Name is Required"})} className="input input-bordered w-full max-w-xs" /> */}
        </div>
    );
};

export default AddmissionForm;