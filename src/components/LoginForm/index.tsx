import React from "react"
// import Card from "../Card"
import Text from "../Text"
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
    onSubmit: (data: Form) => void;
}

interface Form {
    email: string;
    password: string;
}

const LoginForm = ({ onSubmit } : Props) => {

    const {
        register,
        handleSubmit,
    } = useForm<Form>();
      
    const submit: SubmitHandler<Form> = (data) => onSubmit(data);
    
    return (
        <div>
            <Text>{'Login to continue'}</Text>
            <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <Text>{'Email'}</Text>
                    <input { ...register("email", { required: true }) } placeholder="email" />
                </div>
                <div>
                    <Text>{'Password'}</Text>
                    <input type="password" {...register("password", { required: true})} placeholder="password"/>
                </div>
                <button type="submit">{'Submit'}</button>
            </form>
            </div>
        </div>
    )
}

export default LoginForm