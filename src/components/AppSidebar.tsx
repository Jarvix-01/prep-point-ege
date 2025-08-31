import { Home, BookOpen, ClipboardList, BarChart3, Users, CheckSquare, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";

const publicItems = [
  { title: "Главная", url: "/", icon: Home },
  { title: "Варианты", url: "/variants", icon: ClipboardList },
  { title: "Каталог заданий", url: "/catalog", icon: BookOpen },
];

const studentItems = [
  { title: "Все курсы", url: "/courses", icon: BookOpen },
  { title: "Мои задания", url: "/assignments", icon: ClipboardList },
  { title: "Статистика", url: "/statistics", icon: BarChart3 },
];

const teacherItems = [
  { title: "Модерация курсов", url: "/manage-courses", icon: Users },
  { title: "Проверка ДЗ", url: "/check-homework", icon: CheckSquare },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const { user } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;

  const isCollapsed = state === "collapsed";
  const isActive = (path: string) => currentPath === path;
  const getNavClass = (active: boolean) =>
    active 
      ? "bg-primary text-primary-foreground font-medium" 
      : "hover:bg-accent/50 text-sidebar-foreground";

  return (
    <Sidebar className={`${isCollapsed ? "w-14" : "w-64"} border-r border-border/50`}>
      <SidebarContent className="bg-sidebar/90 backdrop-blur-lg">
        {/* Public sections */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-sidebar-foreground/70 uppercase tracking-wider">
            Общие разделы
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {publicItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavClass(isActive(item.url))}
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Student sections */}
        {user && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs text-sidebar-foreground/70 uppercase tracking-wider">
              Моя учёба
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {studentItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        className={getNavClass(isActive(item.url))}
                      >
                        <item.icon className="h-4 w-4" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Teacher sections - TODO: Add role checking */}
        {user && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs text-sidebar-foreground/70 uppercase tracking-wider">
              Для учителя
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {teacherItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        className={getNavClass(isActive(item.url))}
                      >
                        <item.icon className="h-4 w-4" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Auth section */}
        {!user && (
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to="/auth" 
                      className={getNavClass(isActive("/auth"))}
                    >
                      <User className="h-4 w-4" />
                      {!isCollapsed && <span>Войти</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}