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
    const { name, group, date, score, theme1, theme2, theme3, theme4, theme5, theme6, semiScore, rightScore } = useUserContext();

    const chartData = [
        { theme: "Современные технологии цифровой печати", "Верные ответы": theme1 },
        { theme: "Электрофотография", "Верные ответы": theme2 },
        { theme: "Импульсная и непрерывная струйная печать", "Верные ответы": theme3 },
        { theme: "Термографические и термосублимационные технологии", "Верные ответы": theme4 },
        { theme: "Цифровая фотопечать", "Верные ответы": theme5 },
        { theme: "Технологии Computer", "Верные ответы": theme6 },
    ]

    function themeKnowledge(theme: number) {
        if (theme/10 >= 0.8) {
            return "Отличное знание темы."
        }
        if (theme/10 < 0.8 && theme/10 >= 0.4) {
            return "Хорошее знание темы. Можно повторить материал."
        }
        if (theme/10 < 0.4) {
            return "Плохое знание темы. Нужно учить материал."
        }
    }

    return (
        <div className="flex flex-col items-center min-h-screen p-4 gap-6">
            <Card className=" max-w-xl">
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
                                <Label htmlFor="framework">Общее количество баллов: {score} / 120</Label>
                                <Label htmlFor="framework">Правильных ответов: {rightScore} </Label>
                                <Label htmlFor="framework">Похожих ответов: {semiScore} </Label>
                                <Label htmlFor="framework">Неверных ответов: {60 - rightScore - semiScore} </Label>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <Separator className="my-2"/>
                <CardHeader>
                    <CardTitle>Критерии оценивания</CardTitle>
                    <CardDescription>Информация о знаниях по каждой тематике. </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">«Современные технологии цифровой печати»: {themeKnowledge(theme1)}</Label>
                        <Label htmlFor="framework">«Электрофотография»: {themeKnowledge(theme2)}</Label>
                        <Label htmlFor="framework">«Импульсная и непрерывная струйная печать»: {themeKnowledge(theme3)}</Label>
                        <Label htmlFor="framework">«Термографические и термосублимационные технологии»: {themeKnowledge(theme4)}</Label>
                        <Label htmlFor="framework">«Цифровая фотопечать»: {themeKnowledge(theme5)}</Label>
                        <Label htmlFor="framework">«Технологии Computer-to-»: {themeKnowledge(theme6)}
                        </Label>
                    </div>
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
