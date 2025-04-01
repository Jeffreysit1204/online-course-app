import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const courses = [
  {
    id: '1',
    title: '結他入門',
    level: '1',
    price: '$300',
    description: '從零開始學習基本彈奏技巧、握法與和弦。',
  },
  {
    id: '2a',
    title: '結他伴奏',
    level: '2',
    price: '$350',
    description: '學習如何為歌唱伴奏，節奏感與常用和弦進行。',
  },
  {
    id: '2b',
    title: '古典結他初級',
    level: '2',
    price: '$380',
    description: '彈奏古典曲目，培養右手指法與音色控制。',
  },
  {
    id: '2c',
    title: 'Fingerstyle',
    level: '2',
    price: '$380',
    description: '融合旋律與伴奏的獨奏風格，練習指法與節奏。',
  },
  {
    id: '3a',
    title: '古典結他中級',
    level: '3',
    price: '$420',
    description: '進階古典曲目、速度與樂句練習、音樂表達。',
  },
];

export default function OnlineCourseSite() {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const filteredCourses = selectedLevel === 'all'
    ? courses
    : courses.filter((c) => c.level === selectedLevel);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">🎸 Jeff's Guitar School 課程平台</h1>
        <p className="text-gray-600">選擇你適合的等級，展開音樂之旅！</p>
      </header>

      <div className="mb-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all" onClick={() => setSelectedLevel('all')}>全部課程</TabsTrigger>
            <TabsTrigger value="1" onClick={() => setSelectedLevel('1')}>Level 1</TabsTrigger>
            <TabsTrigger value="2" onClick={() => setSelectedLevel('2')}>Level 2</TabsTrigger>
            <TabsTrigger value="3" onClick={() => setSelectedLevel('3')}>Level 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-1">{course.title}</h2>
              <p className="text-sm text-gray-500 mb-2">Level {course.level}</p>
              <p className="mb-3 text-gray-700">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-green-600">{course.price}</span>
                <Button>報名課程</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
