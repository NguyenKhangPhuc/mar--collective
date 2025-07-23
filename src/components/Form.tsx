'use client'
import constants from "@/constants"
import { useFormContext } from "@/contexts/FormContext"
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
    experience: string,
    groupSize: string,
    startDate: string,
    duration: string,
    specialRequests: string
}

const Form = () => {
    const context = useFormContext()
    const { isOpen, setIsOpen } = context
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            experience: "",
            groupSize: "",
            startDate: "",
            duration: "",
            specialRequests: ""
        },
        mode: 'onSubmit'
    })
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-y-hidden")
        } else {
            document.body.classList.remove("overflow-y-hidden")
        }
    }, [isOpen])
    if (!isOpen) {
        console.log('Context is null')
        return null
    }
    console.log(errors)
    const onSubmit = (values: FormValues) => {
        console.log(values)
        setIsOpen(false)
    }
    return (
        <div className="bg-black/30 w-screen h-screen fixed flex items-center justify-center top-0  z-100" >
            <form className="md:p-10 p-5 min-w-3/7 min-h-auto max-h-full bg-white flex flex-col md:gap-5 gap-2 rounded-lg  overflow-y-auto" onSubmit={handleSubmit(onSubmit)}>

                <div className="md:text-3xl text-xl font-bold">Book Your Experience</div>

                <div className="flex gap-3 md:mt-5 mt-1">
                    <label className="flex flex-col w-1/2 text-gray-600 md:text-lg text-sm gap-2">
                        First Name
                        <input
                            className="p-5 w-full md:h-[50px] h-[35px] border border-gray-400  rounded-lg hover:outline-double"
                            {...register("firstName", { required: "First name is required" })}
                        />
                        {errors.firstName && <div className="error_message">{errors.firstName.message}</div>}
                    </label>
                    <label className="flex flex-col w-1/2 text-gray-600 md:text-lg text-sm gap-2">
                        Last Name
                        <input
                            className="p-5 w-full md:h-[50px] h-[35px] border border-gray-400  rounded-lg hover:outline-double"
                            {...register("lastName", { required: "Last name is required" })}
                        />
                        {errors.lastName && <div className="error_message">{errors.lastName.message}</div>}
                    </label>
                </div>
                <label className="flex flex-col w-full text-gray-600 md:text-lg text-sm gap-2">
                    Email
                    <input
                        className="p-5 w-full md:h-[50px] h-[35px] border border-gray-400  rounded-lg hover:outline-double"
                        {...register("email",
                            {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid Email",
                                }
                            })}
                    />
                    {errors.email && <div className="error_message">{errors.email.message}</div>}
                </label>

                <div className="w-full flex gap-3">
                    <label className="flex flex-col w-1/2 text-gray-600 md:text-lg text-sm gap-2">
                        Experiences
                        <select
                            className="px-4 w-full md:h-[50px] h-[35px] border border-gray-400  rounded-lg hover:outline-double"
                            {...register("experience", { required: "Please select experience field" })}
                        >
                            {constants.experienceSelection.map((element, index) => {
                                return (
                                    <option key={`${element.title} ${index}`} value={element.value}>{element.title}</option>
                                )
                            })}
                        </select>
                        {errors.experience && <div className="error_message">{errors.experience.message}</div>}
                    </label>
                    <label className="flex flex-col w-1/2 text-gray-600 md:text-lg text-sm gap-2">
                        Group Size
                        <select
                            className="px-4 w-full md:h-[50px] h-[35px] border border-gray-400  rounded-lg hover:outline-double"
                            {...register("groupSize", { required: "Please select the group size" })}
                        >
                            {constants.groupSizeSelection.map((element, index) => {
                                return (
                                    <option key={`${element.title} ${index}`} value={element.value}>{element.title}</option>
                                )
                            })}
                        </select>
                        {errors.groupSize && <div className="error_message">{errors.groupSize.message}</div>}
                    </label>
                </div>

                <div className="w-full flex gap-3">
                    <label className="flex flex-col w-1/2 text-gray-600 md:text-lg text-sm gap-2">
                        Preferred Start Date
                        <input
                            className="px-4 w-full md:h-[50px] h-[35px] border border-gray-400  rounded-lg hover:outline-double" type="date"
                            {...register("startDate", { required: "Please choose the start date" })}
                            placeholder="dd/mm/yyyy"
                        />
                        {errors.startDate && <div className="error_message">{errors.startDate.message}</div>}
                    </label>
                    <label className="flex flex-col w-1/2 text-gray-600 md:text-lg text-sm gap-2">
                        Duration
                        <select
                            className=" w-full md:h-[50px] h-[35px] border border-gray-400  rounded-lg hover:outline-double"
                            {...register("duration", { required: "Please choose your duration" })}
                        >
                            {constants.durationSelection.map((element, index) => {
                                return (
                                    <option key={`${element.title} ${index}`} value={element.value}>{element.title}</option>
                                )
                            })}
                        </select>
                        {errors.duration && <div className="error_message">{errors.duration.message}</div>}
                    </label>
                </div>

                <label className="flex flex-col w-full text-gray-600 md:text-lg text-sm gap-2">
                    Special Requests
                    <textarea
                        className="p-5 w-full max-h-[120px] border border-gray-400  rounded-lg hover:outline-double"
                        placeholder="Tell us about your interests, dietary restrictions, or special occasions..."
                        {...register("specialRequests")}
                    />
                    {errors.specialRequests && <div className="error_message">{errors.specialRequests.message}</div>}
                </label>

                <div className="w-full flex md:flex-row flex-col md:gap-3 gap-1 ">
                    <button type="submit" className="md:w-1/2 p-3 w-full flex items-center justify-center text-center gap-3 bg-gradient-to-r from-blue-700 to-blue-400 text-white rounded-lg md:text-lg text-base font-bold shadow-xl hover:opacity-60 duration-300 cursor-pointer">
                        <AssignmentTurnedInIcon />
                        <div>Submit Booking Request</div>
                    </button>
                    <button onClick={() => setIsOpen(false)} className="md:w-1/2 w-full p-3 flex justify-center items-center text-center bg-gray-600 text-white rounded-lg md:text-lg text-base font-bold shadow-xl hover:opacity-60 duration-300 cursor-pointer">
                        Cancel
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Form