import {LoginCard} from "@/components/login-card";
import {ModeToggle} from "@/components/theme-toggle-button";


export default function Home() {

    return (
        <div className={"w-full h-screen flex flex-col"}>
            <div className={"flex w-full justify-between p-3"}>
                <p>Logo</p>
                <ModeToggle></ModeToggle>
            </div>
            <div className={"flex flex-row w-full justify-center my-auto"}>
                <LoginCard />
            </div>
        </div>
    )
}

