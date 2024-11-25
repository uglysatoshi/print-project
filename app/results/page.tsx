"use client";

import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";
import { useUserContext } from "@/context/UserContext";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {PolarAngleAxis, PolarGrid, Radar, RadarChart} from "recharts";





const chartConfig = {
} satisfies ChartConfig

const ResultsPage = () => {
    const { name, group, date, score, theme1, theme2, theme3, theme4, theme5, theme6 } = useUserContext();

    const chartData = [
        { theme: "Современные технологии цифровой печати", "Верные ответы": theme1 },
        { theme: "Электрофотография", "Верные ответы": theme2 },
        { theme: "Импульсная и непрерывная струйная печать", "Верные ответы": theme3 },
        { theme: "Термографические и термосублимационные технологии", "Верные ответы": theme4 },
        { theme: "Цифровая фотопечать", "Верные ответы": theme5 },
        { theme: "Технологии Computer", "Верные ответы": theme6 },
    ]

    return (
        <div className="flex flex-col items-center min-h-screen p-4 gap-6">
            <Card className="w-[350px] max-w-2xl">
                <CardHeader>
                    <CardTitle>Данные о прохождении теста</CardTitle>
                    <CardDescription>При обновлении страницы прогресс будет сброшен. </CardDescription>
                </CardHeader>
                <Separator className="my-3" />
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-3">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">ФИО: {name}</Label>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="group">Группа: {group}</Label>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Дата прохождения: {date}</Label>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Результат: {score} / 60</Label>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <Separator className="my-2"/>
                <CardHeader className="items-center">
                    <CardTitle>Распределение ответов по тематикам</CardTitle>
                    <CardDescription>
                        Наведитесь, чтобы увидеть подробности
                    </CardDescription>
                </CardHeader>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square"
                >
                    <RadarChart accessibilityLayer data={chartData}>
                        <ChartTooltip
                            cursor={true}
                            content={<ChartTooltipContent />}
                        />
                        <PolarGrid gridType="circle" radialLines={true} />
                        <PolarAngleAxis dataKey="theme" tick={false} />
                        <Radar
                            dataKey="Верные ответы"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                            dot={{
                                r: 4,
                                fillOpacity: 1,
                            }}
                        />
                    </RadarChart>
                </ChartContainer>
            </Card>
        </div>
    );
};

export default ResultsPage;
