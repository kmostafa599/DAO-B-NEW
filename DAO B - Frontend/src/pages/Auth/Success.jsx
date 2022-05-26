import PageTitle from "../../components/Auth/PageTitle";
import Submit from "../../elements/Submit";
import RightSection from "../../components/Auth/RightSection";

export default function Success() {
    return (
        <section>
            <div className="flex items-center justify-between flex-wrap">
                <div className="flex flex-col items-center justify-center lg:w-[65%] md:w-[55%] 
                        w-full md:py-0 py-24">
                    <div>
                        <PageTitle>Success !</PageTitle>
                        <p>Your password has been restored. <br /> Check please your email and set new password</p>
                        <Submit classes="mt-10">Sign In</Submit>
                    </div>
                </div>
                <RightSection />
            </div>
        </section>
    )
}
