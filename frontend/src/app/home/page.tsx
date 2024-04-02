import {LoginCard} from "@/components/login-card";
import {ProfileButton} from "@/components/profile-button";
import {ViewGroup} from "@/components/toggle-group";
import {SearchDialog} from "@/components/search-dialog";


export default function Home() {

    const name = "Nagarjuna"

    return (
        <div className={"w-full h-screen flex flex-col"}>
            <div className={"w-full p-3 flex flex-row sticky z-20 justify-between items-center"}>
                <p >Logo</p>

                <div className={"flex items-center"}>
                    <SearchDialog></SearchDialog>
                    <ViewGroup></ViewGroup>
                </div>


                <ProfileButton name={name} />

            </div>

            <div>


            </div>


        </div>
    )
}

