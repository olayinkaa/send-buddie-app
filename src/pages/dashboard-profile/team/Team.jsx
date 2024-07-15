import { HiOutlineUserPlus } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { TeamButton } from "./style";

export default function Team() {
    const navigate = useNavigate();

    return (
        <section className="w-3/5 ">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <h2 className="text-xl">Team</h2>
                    <TeamButton type="button" onClick={()=>navigate("/profile/invite-team-member")}>
                        <HiOutlineUserPlus />
                        <span>Invite a Team Member</span>
                    </TeamButton>
                </div>
                <div className="flex items-center gap-2 bg-blue-100/50 px-3 py-1.5 rounded-full">
                    <div className="w-3 h-3 rounded-full bg-blue-300" />
                    <span>2 admins</span>
                </div>
            </div>
            <div className="mt-20 text-gray-600">
                <div className="flex justify-between gap-4 border-b-2 border-gray-400/40 py-5">
                    <div className="flex flex-2 items-center gap-2">
                        <div className="bg-blue-200 p-3 rounded-lg">AO</div>
                        <div className="flex flex-col">
                            <span>Ayotunde Oloruneto (you)</span>
                            <span>smapleaghs@theideationhouse.com</span>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <span className="ring-2 ring-blue-400 text-blue-400 rounded-md self-start px-4 py-1">
                            Admin
                        </span>
                    </div>
                    <div className="flex-1">
                        <span>Last Active: Today</span>
                    </div>
                </div>
                <div className="flex justify-between gap-4 border-b-2 border-gray-400/40 py-5">
                    <div className="flex flex-2 items-center gap-2">
                        <div className="bg-blue-200 p-3 rounded-lg">AO</div>
                        <div className="flex flex-col">
                            <span>Ayotunde Oloruneto (you)</span>
                            <span>smapleaghs@theideationhouse.com</span>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <span className="ring-2 ring-purple-400 text-purple-400 rounded-md self-start px-4 py-1">
                            Custom
                        </span>
                    </div>
                    <div className="flex-1">
                        <span>Invite</span>
                    </div>
                </div>
                <div className="flex justify-between gap-4 border-b-2 border-gray-400/40 py-5">
                    <div className="flex flex-2 items-center gap-2">
                        <div className="bg-blue-200 p-3 rounded-lg">AO</div>
                        <div className="flex flex-col">
                            <span>Ayotunde Oloruneto (you)</span>
                            <span>smapleaghs@theideationhouse.com</span>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <span className="ring-2 ring-blue-400 text-blue-400 rounded-md self-start px-4 py-1">
                            Admin
                        </span>
                    </div>
                    <div className="flex-1">
                        <span>Last Active: Today</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
