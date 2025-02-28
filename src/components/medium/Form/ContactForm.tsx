import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
function ContactForm() {
  type contactFormTypes = {
    name: string;
    email: string | undefined;
    phone: number;
    subject: string;
    message: string;
  };

  const Schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email()
      .matches(/^(?!.*@[^,]*,)/)
      .required("email is required"),
    subject: yup.string().required("Message Subject is required"),
    phone: yup.number().required("Phone number is required"),
    message: yup.string().required("Message is required"),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(Schema),
  });
  const onSubmit: SubmitHandler<contactFormTypes> = (data) => {
    console.log(data);
  };

  const inputStyle = `w-full md:w-[45%] rounded-md bg-gray-200 h-[55px]`;

  return (
    <div className="bg-gray-100 px-7 py-10 rounded-[20px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap justify-between gap-5"
      >
        <div className={`${inputStyle}`}>
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="w-full h-full px-2 bg-transparent"
          />
        </div>
        <div className={`${inputStyle}`}>
          <input
            type="text"
            {...register("email")}
            placeholder="Email Address"
            className="w-full h-full px-2 bg-transparent"
          />
        </div>
        <div className={`${inputStyle}`}>
          <input
            type="text"
            {...register("phone")}
            placeholder="Phone Number"
            className="w-full h-full px-2 bg-transparent"
          />
        </div>
        <div className={`${inputStyle}`}>
          <input
            type="text"
            {...register("subject")}
            placeholder="Subject"
            className="w-full h-full px-2 bg-transparent"
          />
        </div>
        <div className={`w-full bg-gray-200 rounded-lg`}>
          <textarea
            cols={5}
            rows={5}
            {...register("message")}
            placeholder="message"
            className="px-2 bg-transparent w-full"
          />
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
