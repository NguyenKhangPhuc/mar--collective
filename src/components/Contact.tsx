'use client'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import constants from "@/constants";
import MailIcon from '@mui/icons-material/Mail';
import { useForm } from 'react-hook-form';

interface ContactForm {
    firstName: string,
    lastName: string,
    email: string,
    experience: string,
    message: string
}

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            experience: '',
            message: ''
        },
        mode: 'onSubmit'
    })

    const submit = (values: ContactForm) => {
        console.log(values)
    }
    return (
        <form className="w-full flex flex-col gap-5 lg:mt-0 mt-5" onSubmit={handleSubmit(submit)}>
            <div className="font-bold lg:text-2xl text-xl">Quick Inquiry</div>
            <div className="flex gap-3 mt-5">
                <label className="flex flex-col w-1/2 text-gray-600 lg:text-lg text-base gap-2 ">
                    First Name
                    <input
                        className="p-5 w-full h-[50px] border border-gray-400  rounded-lg hover:outline-double"
                        {...register("firstName", { required: "First name is required" })}
                    />
                    {errors.firstName && <div className="error_message">{errors.firstName.message}</div>}
                </label>
                <label className="flex flex-col w-1/2 text-gray-600 lg:text-lg text-base gap-2">
                    Last Name
                    <input
                        className="p-5 w-full h-[50px] border border-gray-400  rounded-lg hover:outline-double"
                        {...register("lastName", { required: "Last name is required" })}
                    />
                    {errors.lastName && <div className="error_message">{errors.lastName.message}</div>}
                </label>
            </div>
            <label className="flex flex-col w-full text-gray-600 lg:text-lg text-base gap-2">
                Email
                <input
                    className="p-5 w-full h-[50px] border border-gray-400  rounded-lg hover:outline-double"
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
            <label className="flex flex-col w-full text-gray-600 lg:text-lg text-base gap-2">
                Experiences Interest
                <select
                    className="px-5 w-full h-[50px] border border-gray-400  rounded-lg hover:outline-double"
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
            <label className="flex flex-col w-full text-gray-600 lg:text-lg text-base gap-2">
                Message
                <textarea
                    className="p-5 w-full min-h-[120px] border border-gray-400  rounded-lg hover:outline-double"
                    placeholder="Tell us about your interests, dietary restrictions, or special occasions..."
                    {...register("message")}
                />
                {errors.message && <div className="error_message">{errors.message.message}</div>}
            </label>
            <button type="submit" className="py-5 w-full flex items-center justify-center text-center gap-3 bg-gradient-to-r from-blue-700 to-blue-400 text-white rounded-lg lg:text-lg text-basefont-bold shadow-xl hover:opacity-60 duration-300 cursor-pointer">
                <SendIcon />
                <div>Send Your Inquiry</div>
            </button>
        </form>
    )
}

const Contact = () => {
    return (
        <div className="w-full py-20" id='contact'>
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-7 p-5">
                <div className="w-full text-center lg:text-6xl text-4xl font-bold">Start Your Journey</div>
                <div className="w-full text-center lg:text-2xl text-xl text-gray-500">Ready to discover Portugal&apos;s hidden treasures? Let&apos;s create your perfect experience. </div>
                <div className="w-full flex lg:flex-row flex-col py-5 gap-5">
                    <div className="w-1/2 flex flex-col gap-3">
                        <div className="lg:text-2xl text-xl font-bold pb-5">Get in touch</div>
                        <div className="flex gap-6 lg:text-lg text-base"><LocationOnIcon style={{ color: 'blue' }} /> <div>Cascais, Portugal</div></div>
                        <div className="flex gap-6 lg:text-lg text-base"><MailIcon style={{ color: 'blue' }} /> <div>hello@marecollective.pt</div></div>
                        <div className="flex gap-6 lg:text-lg text-base"><PhoneIcon style={{ color: 'blue' }} /> <div>+351 XXX XXX XXX</div></div>
                        <div className="lg:text-lg text-base  font-bold">Follow Us</div>
                        <div className="flex gap-6">
                            <div className={`w-10 h-10 rounded-full flex justify-center items-center bg-blue-600`}><InstagramIcon sx={{ fontSize: 20, color: 'white' }} /></div>
                            <div className={`w-10 h-10 rounded-full flex justify-center items-center bg-blue-600`}><FacebookIcon sx={{ fontSize: 20, color: 'white' }} /></div>
                            <div className={`w-10 h-10 rounded-full flex justify-center items-center bg-blue-600`}><LinkedInIcon sx={{ fontSize: 20, color: 'white' }} /></div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact