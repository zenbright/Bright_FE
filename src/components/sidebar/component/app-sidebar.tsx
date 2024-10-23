import React from "react"
import { Calendar, Home, Inbox, Search, Settings, ChevronDown, Layers2, User2, ChevronUp, CircleUser, HelpCircle, Cable, Quote, Gem, Newspaper, Plus, PanelsTopLeft, ArrowRight } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarGroupAction,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
} from "@components/ui/sidebar"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@components/ui/dropdown-menu"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@components/ui/collapsible"

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Projects",
        url: "#",
        icon: PanelsTopLeft,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

const itemsHelp = [
    {
        title: "Help",
        url: "#",
        icon: HelpCircle,
    },
    {
        title: "Support",
        url: "#",
        icon: Cable,
    },
]

const itemsAbout = [
    {
        title: "About Us",
        url: "#",
        icon: Quote,
    },
    {
        title: "Subscription",
        url: "#",
        icon: Gem,
    },
    {
        title: "What's New",
        url: "#",
        icon: Newspaper,
    },
]

const listOfProjects = [
    {
        title: "Bright",
        url: "#",
        icon: Plus,
    },
    {
        title: "Eternal",
        url: "#",
        icon: Plus,
    },
    {
        title: "Hive",
        url: "#",
        icon: Plus,
    },
]

// Define the type for menu items
interface MenuItem {
    title: string;
    url: string;
    icon: any;
}

interface CollapsibleSidebarGroupProps {
    label: string;
    items: MenuItem[];
    actionTitle?: string;
}

const CollapsibleSidebarGroup: React.FC<CollapsibleSidebarGroupProps> = ({ label, items, actionTitle }) => (
    <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
            <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                    {label}
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map(item => {
                            if (item.title === "Projects") {
                                return (
                                    <Collapsible defaultOpen className="group/collapsible">
                                        <SidebarMenuItem>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton asChild>
                                                    <a href={item.url} className="flex gap-4 py-5 items-center">
                                                        <item.icon />
                                                        <span>{item.title}</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenuSub asChild>
                                                    {listOfProjects.map(project => (
                                                        <SidebarMenuSubItem key={project.title}>
                                                            <SidebarMenuSubButton asChild>
                                                                <a href={project.url} className="flex gap-4 py-2 items-center">
                                                                    <span>{project.title}</span>
                                                                    <ArrowRight className="ml-auto" />
                                                                </a>
                                                            </SidebarMenuSubButton>
                                                        </SidebarMenuSubItem>
                                                    ))}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        </SidebarMenuItem>
                                    </Collapsible>
                                )
                            } else {
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url} className="flex gap-4 py-3 items-center">
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            }
                        })}
                    </SidebarMenu>
                </SidebarGroupContent>
            </CollapsibleContent>
        </SidebarGroup>
    </Collapsible>
);

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className="text-base py-6 flex">
                                    <Layers2 />
                                    Workspace
                                    <ChevronDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                                <DropdownMenuItem>
                                    <span>Zen Bright</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Tutur3u</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <CollapsibleSidebarGroup label="Project Management" items={items} actionTitle="Add Project" />
                <CollapsibleSidebarGroup label="Help" items={itemsHelp} />
                <CollapsibleSidebarGroup label="About" items={itemsAbout} />
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className="py-6">
                                <SidebarMenuButton>
                                    <CircleUser className="h-6 w-6" />
                                    <span className="text-base">
                                        {"Mudoker"}
                                    </span>

                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
