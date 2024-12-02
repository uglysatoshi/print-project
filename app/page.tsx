"use client";

import React, { useState } from "react";
import '@/styles/globals.css';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/UserContext";

export default function Home() {
    const { setUserData } = useUserContext();
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        group: "",
        date: "",
        score: 0,
        theme1: 0,
        theme2: 0,
        theme3: 0,
        theme4: 0,
        theme5: 0,
        theme6: 0,
        semiScore: 0,
        rightScore: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = () => {
        if (formData.name && formData.group && formData.date) {
            setUserData(formData); // Сохраняем данные в контекст
            router.push("/quiz"); // Переходим на страницу теста
        }
    };

    // Получаем текущую дату в формате YYYY-MM-DD
    const today = new Date().toISOString().split("T")[0];

    // Проверяем, заполнены ли все поля
    const isFormComplete = formData.name && formData.group && formData.date;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
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
                                <Input
                                    id="name"
                                    placeholder="Ложкин Иван Андреевич"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="group">Группа</Label>
                                <Input
                                    id="group"
                                    placeholder="4-ТИД-7"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Дата прохождения</Label>
                                <Input
                                    max={today} // Ограничение выбора дат из будущего
                                    type="date"
                                    id="date"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center items-center">
                    <Button
                        onClick={handleSubmit}
                        disabled={!isFormComplete} // Кнопка неактивна, если форма не заполнена
                        className={`w-full ${
                            !isFormComplete ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        Начать
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
