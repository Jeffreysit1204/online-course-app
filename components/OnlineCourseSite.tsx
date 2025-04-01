import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

// 模擬課程資料
const courseList = [
  { title: "靈修課程", description: "深入靈修生活的操練與反思", id: 1 },
  { title: "神學入門", description: "基礎神學理念與歷史發展", id: 2 },
  { title: "聖經原文研讀", description: "學習希伯來文與希臘文聖經", id: 3 },
];

export default function OnlineCourseSite() {
  const [user, setUser] = useState(null);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [cardNumber, setCardNumber] = useState("");

  const handleLogin = () => {
    setUser("Issac");
  };

  const handlePurchase = () => {
    if (selectedCourse && cardNumber) {
      setPurchasedCourses([...purchasedCourses, selectedCourse]);
      alert(`成功購買課程：${selectedCourse.title}`);
      setSelectedCourse(null);
      setCardNumber("");
    } else {
      alert("請選擇課程並輸入信用卡號碼。");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">📚 網上課程平台</h1>
        {user ? (
          <span>👋 歡迎, {user}</span>
        ) : (
          <Button onClick={handleLogin}>登入</Button>
        )}
      </header>

      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">首頁</TabsTrigger>
          <TabsTrigger value="courses">課程一覽</TabsTrigger>
          <TabsTrigger value="dashboard">會員專區</TabsTrigger>
          <TabsTrigger value="payment">付款</TabsTrigger>
        </TabsList>

        <TabsContent value="home">
          <Card className="mt-4">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">歡迎來到我們的課程平台</h2>
              <p>探索各式各樣的線上課程，隨時隨地學習！</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {courseList.map((course) => (
              <Card key={course.id}>
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-1">{course.title}</h3>
                  <p className="text-sm mb-2">{course.description}</p>
                  <Button onClick={() => setSelectedCourse(course)}>加入購物車</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="dashboard">
          <Card className="mt-4">
            <CardContent className="p-6">
              {user ? (
                <>
                  <h2 className="text-xl font-semibold mb-2">👨‍🎓 我的課程</h2>
                  {purchasedCourses.length > 0 ? (
                    <ul className="list-disc pl-5">
                      {purchasedCourses.map((c, i) => (
                        <li key={i}>{c.title}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>尚未購買任何課程。</p>
                  )}
                </>
              ) : (
                <p>請先登入以查看個人課程內容。</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <Card className="mt-4">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">💳 付款資訊</h2>
              <p>請選擇您想購買的課程並填寫付款資料。</p>
              <div className="space-y-2">
                <label className="block">選擇課程：</label>
                <select
                  className="w-full p-2 rounded border"
                  value={selectedCourse?.id || ""}
                  onChange={(e) => {
                    const course = courseList.find(
                      (c) => c.id === parseInt(e.target.value)
                    );
                    setSelectedCourse(course);
                  }}
                >
                  <option value="">請選擇課程</option>
                  {courseList.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
              <Input
                placeholder="信用卡號碼 (模擬)"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <Button onClick={handlePurchase}>付款</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
