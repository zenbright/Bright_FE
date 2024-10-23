import React from "react"
import { Calendar, Home, Inbox, Search, Settings, ChevronDown, Layers2, User2, ChevronUp, CircleUser, HelpCircle, Cable, Quote, Gem, Newspaper, Plus } from "lucide-react"

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
} from "@components/ui/sidebar"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@components/ui/dropdown-menu"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@components/ui/collapsible"

// Menu items.
const items = [
    {
        title: "Home",
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
        icon: Calendar,
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
            {actionTitle && (
                <SidebarGroupAction title={actionTitle}>
                    <Plus /> <span className="sr-only">{actionTitle}</span>
                </SidebarGroupAction>
            )}
            <CollapsibleContent>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map(item => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url} className="flex gap-4 py-5">
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
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
                <CollapsibleSidebarGroup label="Main" items={items} actionTitle="Add Project" />
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
