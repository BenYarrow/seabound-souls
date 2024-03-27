import { Dialog } from '@headlessui/react'


export default function InfoModal({children, isOpen, setIsOpen}) {

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}>
                <span className="sr-only">Information</span>
            </button>

            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-[1000]"
            >
                <div className="fixed inset-0 flex w-screen items-center justify-center bg-blue-darker/70 p-6 overflow-scroll">
                    <Dialog.Panel className="grid gap-y-6 w-full max-md:max-h-[75vh] max-w-3xl bg-white p-6 max-md:overflow-scroll">
                        <div>{children}</div>

                        <div className="flex justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="border-2 border-blue px-3 py-1 hover:bg-blue hover:text-white transition duration-300"
                            >
                                Close
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}