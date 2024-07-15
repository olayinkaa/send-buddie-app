import { HiDotsVertical, HiOutlineLibrary } from "react-icons/hi";
import { SendBuddiePopover } from "../../components/@ui-kits";

const { Menu, Item, Button } = SendBuddiePopover;

function Popover() {
    return (
        <SendBuddiePopover>
            <Button>
                <HiDotsVertical fontSize={20} />
            </Button>
            <Menu className="left-0 top-1/2 -translate-y-1/2 w-32">
                <Item>Suspend Card</Item>
                <Item>Delete Card</Item>
            </Menu>
        </SendBuddiePopover>
    );
}
 
function BankCards() {
    return (
        <div className="w-2/5 space-y-14">
            <h4 className="text-center text-xl font-normal">Banks and Cards</h4>
            <section className="space-y-4">
                <h3>Banks</h3>
                <section className="border-neutral flex justify-between rounded-lg border p-4 shadow-md">
                    <div className="flex items-center gap-3">
                        <HiOutlineLibrary fontSize={20} />
                        <span>GTBank</span>
                        <span>**** 4399</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span>10/24</span>
                        <Popover/>
                    </div>
                </section>{" "}
                <section className="border-neutral flex justify-between rounded-lg border p-4 shadow-md">
                    <div className="flex items-center gap-3">
                        <HiOutlineLibrary fontSize={20} />
                        <span>GTBank</span>
                        <span>**** 4399</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span>10/24</span>
                        <Popover/>
                    </div>
                </section>
            </section>
            <section className="space-y-4">
                <h3>Cards</h3>
                <section className="border-neutral flex justify-between rounded-lg border p-4 shadow-md dark:bg-dark-brand dark:text-white">
                    <div className="flex items-center gap-3">
                        <HiOutlineLibrary fontSize={20} />
                        <span>GTBank</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span>**** 4399</span>
                        <HiDotsVertical fontSize={20} />
                    </div>
                </section>{" "}
                <section className="border-neutral flex justify-between rounded-lg border p-4 shadow-md">
                    <div className="flex items-center gap-3">
                        <HiOutlineLibrary fontSize={20} />
                        <span>GTBank</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span>**** 4399</span>
                        <HiDotsVertical fontSize={20} />
                    </div>
                </section>
            </section>
        </div>
    );
}

export default BankCards;
