import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
const Login = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <dialog id="my_modal_1" className="modal">
      <form  onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Login</h3>
        <input   {...register("Email", { required: true })}type="text" placeholder="Username" className="input input-bordered w-full mt-4" />
        {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
        <input   {...register("password", { required: true })} type="password" placeholder="Password" className="input input-bordered w-full mt-4"  />
        {errors.password && <span  className='text-sm text-red-500 '>This field is required</span>}
        <br />
        <div className="modal-action flex justify-around mt-4">
          <button className="btn hover:bg-pink-500 hover:text-white" type="submit" >Login</button>
          <button className="btn btn-outline" type="button" onClick={() => document.getElementById('my_modal_1').close()}>Cancel</button>
          <p>Not register <Link to="/signup"className='text-sky-400 underline cursor -pointer'>/SignUp</Link></p>
        </div>
      </form>
    </dialog>
  );
};

export default Login;
