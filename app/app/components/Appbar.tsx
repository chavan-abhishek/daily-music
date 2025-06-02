"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export function Appbar () {
    const session = useSession();
    return <div>
        <div className="flex justify-between">
            <div>
                Appbar
            </div>
            <div>
                {session.data?.user && <button className="m-2 p-2 bg-blue-400" onClick={() => signOut()}>Sign Out</button>}
                {!session.data?.user && <button className="m-2 p-2 bg-blue-400" onClick={() => signIn()}>Sign In</button>}
            </div>
        </div>

    </div>
}