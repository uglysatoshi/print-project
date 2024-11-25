import React from "react";
import '@/styles/globals.css';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Тест по цифровой печати</CardTitle>
                    <CardDescription>Заполните поля, чтобы начать</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Имя</Label>
                                <Input id="name" placeholder="Ложкин Иван Андреевич" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Группа</Label>
                                <Input id="group" placeholder="4-ZoV-7"/>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center items-center">
                    <Button>
                        <Link href="/quiz" legacyBehavior passHref>
                            Начать
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}