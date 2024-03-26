import { FormEvent, useContext, useState } from "react"
import { Button, Form, Input } from "../../components"
import { AUTH_TYPE, IPAYLOADUPDATE } from "../../@types"
import { AuthenticationContext } from "../../context"
import cogoToast from "cogo-toast"

export const UpdatePassword = () => {

    const { loading, onUpdate ,user } = useContext(AuthenticationContext) as AUTH_TYPE;
    const [state, setState] = useState<IPAYLOADUPDATE>({ newEmail: '', email: user, newPassword:'' })
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!state?.newPassword || state.newPassword?.length < 7) {
            return cogoToast.error("Please provide password of a length greater than 6");
        }
        state.email = user;
        await onUpdate(state);
    };
    const handleState = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setState({ ...state, [name]: value });
    };
    return (
        <div className="container bg-[#1b4235] text-white h-[100%] flex flex-col-reverse md:flex-row w-[100%] max-w-full">
            <div className="w-full h-full items-center">
        
                <Form
                    className="flex items-center justify-center w-full  p-10"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col gap-2  w-full md:w-[50%] items-center bg-[#EDD3C5] pt-[20px] pb-[20px] rounded-lg">
                    <h2 className="text-[#1b4235] text-[55px] font-semibold left-[0] tracking-[0] leading-[normal] text-center [text-shadow:0px_4px_4px_#00000040] mt-[20px]">
                            Update Password
                        </h2>
                        <Input
                            name="newPassword"
                            placeholder="New Password"
                            handleChange={handleState}
                            type="password"
                            className={`w-[70%] h-20 overflow-hidden bg-[#F3F3F3] text-[#1b4235] transition-all duration-[0.5s] text-[25px] mt-10 pl-[0.8em] rounded-[10px] border-[3px] border-solid  hover:border-[#1b4235] hover:bg-[white] hover:border-[3px] hover:border-solid;`}
                        />

                
                        <div className="w-full md:w-[50%] m-auto flex flex-col gap-2">
                            <Button
                                title={loading ? "Loading" : "Update"}
                                className={`border-2 py-4 px-6 bg-[#EDD3C5] border-black rounded-xl text-[#1b4235] text-[30px] hover:bg-[#2F4858] mt-[30px] hover:text-white transition ease-in-out duration-300 hover:scale-105 hover:shadow-lg`}
                                type="submit"
                                disabled={loading}
                            />
                        </div>
                    </div>
                </Form>
                
      
            </div>
        </div>
    )
} 