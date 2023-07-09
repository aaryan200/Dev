import { useRef } from "react";
import { Input } from "../components/Input";

export default function Signup() {
    const userNameRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const imageUrlRef = useRef<HTMLInputElement>(null);
    return (
        <>
        <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
        <form className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-end">
            <label htmlFor="userName">Username</label>
            {/* \S* means no white space */}
            <Input id="userName" pattern="\S*" required ref={userNameRef}/>
            <label htmlFor="name">Name</label>
            {/* \S* means no white space */}
            <Input id="name" required ref={nameRef}/>
            <label htmlFor="imageUrl">Image URL</label>
            {/* \S* means no white space */}
            <Input id="imageUrl" ref={imageUrlRef} type="url"/>
        </form>
        </>
    )
}
