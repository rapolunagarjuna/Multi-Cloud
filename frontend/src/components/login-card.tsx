import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginCard() {
    return (
        <Card className="w-[500px]">
            <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>Enter your email below to create your account</CardDescription>

                <div className={"flex justify-between pt-3 gap-3"}>
                    <Button className={"w-1/2"} ><FaGithub></FaGithub> <span className={"pl-2"}>Github</span></Button>
                    <Button className={"w-1/2"} ><FaGoogle></FaGoogle> <span className={"pl-2"}>Google</span></Button>
                </div>

                <div className={"flex w-full justify-between items-center pt-3"}>
                    <CardDescription className={"w-1/4 border-b"}></CardDescription>
                    <CardDescription>OR CONTINUE WITH</CardDescription>
                    <CardDescription className={"w-1/4 border-b"}></CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Email</Label>
                            <Input id="email" type={"email"} placeholder="m@example.com"/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Password</Label>
                            <Input id="password" type={"password"} placeholder=""/>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex w-full">
                <Button className={"w-full"}>Create Account</Button>
            </CardFooter>
        </Card>
    )
}
