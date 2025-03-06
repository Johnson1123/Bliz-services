import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
function ContactForm() {
  type contactFormTypes = {
    name: string;
    email: string | undefined;
    phone: string;
    subject: string;
    message: string;
  };

  const Schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid Email Address")
      .matches(/^(?!.*@[^,]*,)/, "Invalid Email Address")
      .required("email is required"),
    subject: yup.string().required("Subject is required"),
    phone: yup
      .string()
      .matches(/^(\+?\d{1,3})\s?\-?\s?\d{10}$/, "example +123 1234567890")
      .required("Phone number is required"),
    message: yup.string().required("Message is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });
  const onSubmit: SubmitHandler<contactFormTypes> = (data) => {
    console.log(data);
  };

  const inputStyle = `w-full md:w-[45%] rounded-md h-[50px]`;

  return (
    <div className="bg-white px-7 py-10 rounded-[20px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap justify-between gap-5"
      >
        <div className={`${inputStyle}`}>
          <input
            type="text"
            {...register("name")}
            placeholder="Your Name"
            className="w-full h-[35px] px-2 bg-gray-100 focus:outline-pink rounded-sm"
          />
          <p className="text-xs text-red-500 my-1 w-full text-wrap">
            {errors.name && errors.name.message}
          </p>
        </div>
        <div className={`${inputStyle}`}>
          <input
            type="text"
            {...register("email")}
            placeholder="Email Address"
            className="w-full h-[35px] px-2 bg-gray-100 focus:outline-pink rounded-sm"
          />
          <p className="text-xs text-red-500 my-1 w-full truncate ">
            {errors.email && errors.email.message}
          </p>
        </div>
        <div className={`${inputStyle}`}>
          <input
            type="tel"
            {...register("phone")}
            placeholder="Phone Number"
            className="w-full h-[35px] px-2 bg-gray-100 focus:outline-pink rounded-sm"
          />
          <p className="text-xs text-red-500 my-1 w-full truncate">
            {errors.phone && errors.phone.message}
          </p>
        </div>
        <div className={`${inputStyle}`}>
          <input
            type="text"
            {...register("subject")}
            placeholder="Subject"
            className="w-full h-[35px] px-2 bg-gray-100 focus:outline-pink rounded-sm"
          />
          <p className="text-xs text-red-500 my-1 w-full text-wrap">
            {errors.subject && errors.subject.message}
          </p>
        </div>
        <div className={`w-full  rounded-lg`}>
          <textarea
            cols={5}
            rows={5}
            {...register("message")}
            placeholder="message"
            className="px-2 bg-gray-100 w-full focus:outline-pink py-1"
          />
          <p className="text-xs text-red-500 my-1 w-full text-wrap">
            {errors.message && errors.message.message}
          </p>
        </div>

        <input
          type="submit"
          className="bg-blue rounded-full px-10 py-3 text-white"
          value={"Send a Message"}
        />
      </form>
    </div>
  );
}

export default ContactForm;
