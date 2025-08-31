import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { BookOpen, Users, BarChart3, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <div className="inline-flex items-center gap-3 mb-6">
          <GraduationCap className="h-12 w-12 text-primary" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ЕГЭ Платформа
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Современная онлайн-платформа для подготовки 11-классников к сдаче ЕГЭ. 
          Качественные материалы, персональная статистика и профессиональные преподаватели.
        </p>
        {!user && (
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/auth">Начать обучение</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/variants">Демо-варианты</Link>
            </Button>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="glass-card hover:scale-105 transition-transform">
          <CardHeader className="text-center">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle>Обширный каталог</CardTitle>
            <CardDescription>
              Тысячи заданий по всем предметам ЕГЭ с подробными разборами
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="glass-card hover:scale-105 transition-transform">
          <CardHeader className="text-center">
            <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle>Персональная статистика</CardTitle>
            <CardDescription>
              Отслеживайте прогресс и работайте над ошибками с помощью аналитики
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="glass-card hover:scale-105 transition-transform">
          <CardHeader className="text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle>Опытные преподаватели</CardTitle>
            <CardDescription>
              Профессиональные учителя проверяют домашние задания и дают обратную связь
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* User-specific content */}
      {user && (
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Добро пожаловать, {user.user_metadata?.first_name || 'Студент'}!
          </h2>
          <p className="text-muted-foreground mb-6">
            Продолжите обучение или изучите новые материалы
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link to="/courses">Мои курсы</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/assignments">Задания</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
