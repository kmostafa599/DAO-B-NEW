import LoginForm from "../../components/Auth/LoginForm";
import RestoreForm from "../../components/Auth/RestoreForm";
import RightSection from "../../components/Auth/RightSection";

export default function Restore() {


    return (
        <section>
            <div className="flex items-center justify-between flex-wrap">
                <div className="flex flex-col items-center justify-center lg:w-[65%] md:w-[55%] 
                        w-full md:py-0 py-24">
                    <RestoreForm />
                </div>
                <RightSection />
            </div>
        </section>
    );
}
