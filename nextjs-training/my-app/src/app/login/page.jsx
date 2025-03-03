"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState(null);
  

  const onSubmit = async (data) => {
    setError(null);
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (result.error) {
      setError("Invalid credentials. Try again.");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-gray-400 shadow-md rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="w-full p-2 border rounded mt-1"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="w-full p-2 border rounded mt-1"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
