import React from 'react';
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div id="my_modal_1" className="flex h-screen items-center justify-center border-shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>

          <input
            {...register("Username", { required: true })}
            type="text"
            placeholder="Username"
            className="input input-bordered w-full mt-4"
          />
          {errors.Username && <span className='text-sm text-red-500'>This field is required</span>}

          <input
            {...register("Email", { required: true })}
            type="text"
            placeholder="Email"
            className="input input-bordered w-full mt-4"
          />
          {errors.Email && <span className='text-sm text-red-500'>This field is required</span>}

          <input
            {...register("Password", { required: true })}
            type="password"
            placeholder="Password"
            className="input input-bordered w-full mt-4"
          />
          {errors.Password && <span className='text-sm text-red-500'>This field is required</span>}

          <p className='text-sky-300'>*Password should contain special characters</p>

          <div className="modal-action flex justify-around mt-4">
            <button className="btn hover:bg-pink-500 hover:text-white" type="submit">SignUp</button>
            <button
              className="btn btn-outline"
              type="button"
              onClick={() => document.getElementById('my_modal_1').style.display = 'none'}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
