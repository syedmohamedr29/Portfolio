"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const landingSectionStyle = "min-h-screen flex flex-col items-center justify-center p-4";
const sectionStyle = "min-h-screen flex flex-col p-4";
const cardStyle = "w-full md:w-3/4 lg:w-1/2 mx-auto";
const avatarStyle = "rounded-full h-32 w-32 relative overflow-hidden";

const contactInfo = {
  email: "syedmohamedr29@gmail.com",
  phone: "+91-9095486464",
  linkedIn: "https://www.linkedin.com/in/syed-mohamed-r-648a4824a/",
  gitHub: "https://github.com/SyedMohamedR",
  resume: "/Syed_Mohamed_R_Resume.pdf", // Ensure the resume is in the public directory
};

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    
      <SidebarProvider>
        <Sidebar className="w-60">
          <SidebarHeader>
            <Image
              src="https://i.pravatar.cc/60"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            Syed's Portfolio
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#home">Home</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#about">About</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#experience">Experience</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#projects">Projects</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#skills">Skills</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#certifications">Certifications</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#education">Education</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#contact">Contact</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          {isClient && (
            <ScrollArea>
              <section id="home" className={landingSectionStyle}>
                <h1 className="text-4xl font-bold">Syed Mohamed R</h1>
                <p className="text-xl">Associate Test Engineer</p>
                <p className="mt-2">Quality-Driven Associate Test Engineer</p>
              </section>

              <section id="about" className={sectionStyle}>
                <Card className={cardStyle}>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                    <CardDescription>
                      Brief bio, tools &amp; tech expertise, and career goals.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className={avatarStyle}>
                      <Image
                        src="https://i.imgur.com/nV29VQu.png"
                        alt="Software Testing"
                        width={300}
                        height={300}
                        layout="responsive"
                      />
                    </div>
                    <p className="mt-4">
                      Syed Mohamed R is an Associate Test Engineer with 1.6 years
                      of experience in UI automation, manual testing, and API
                      testing.
                    </p>
                    <p className="mt-4">
                      Tools &amp; Tech Expertise: Selenium, Python, Pytest, etc.
                    </p>
                    <p className="mt-4">
                      Career Goal: To become a skilled and reliable QA Engineer.
                    </p>
                    <Button asChild>
                      <Link href={contactInfo.resume} target="_blank" download>
                        Download Resume
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </section>

              <section id="experience" className={sectionStyle}>
                <Card className={cardStyle}>
                  <CardHeader>
                    <CardTitle>Experience</CardTitle>
                    <CardDescription>
                      Experience at COMM-IT India Pvt Ltd and Hibrise Technologies Pvt
                      Ltd.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Card className="mb-4">
                      <CardHeader>
                        <CardTitle>COMM-IT India Pvt Ltd</CardTitle>
                        <CardDescription>Oct 2023 – Dec 2024</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Role: Associate Software Tester</p>
                        <p>Project: Connexions HRMS</p>
                        <ul className="list-disc pl-5 mt-2">
                          <li>Responsibilities and key achievements</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Hibrise Technologies Pvt Ltd</CardTitle>
                        <CardDescription>Jan 2025 – Present</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Role: Associate Test Engineer</p>
                        <p>Project: Sahab Payroll</p>
                        <ul className="list-disc pl-5 mt-2">
                          <li>Responsibilities and contributions</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </section>

              <section id="projects" className={sectionStyle}>
                <Card className={cardStyle}>
                  <CardHeader>
                    <CardTitle>Projects</CardTitle>
                    <CardDescription>
                      Projects (Connexions HRMS, Sahab Payroll) with descriptions,
                      roles, tools/tech used.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Card className="mb-4">
                      <CardHeader>
                        <CardTitle>Connexions HRMS</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Description: HRMS project description.</p>
                        <p>Role: Automation Tester</p>
                        <p>Tools/Tech Used: Selenium, Python</p>
                        <ul className="list-disc pl-5 mt-2">
                          <li>Key contributions</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Sahab Payroll</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Description: Payroll project description.</p>
                        <p>Role: Manual Tester</p>
                        <p>Tools/Tech Used: JIRA, TestRail</p>
                        <ul className="list-disc pl-5 mt-2">
                          <li>Key contributions</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </section>

              <section id="skills" className={sectionStyle}>
                <Card className={cardStyle}>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>
                      Testing types, tools, languages, frameworks, DB, and other
                      skills.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge>Functional Testing</Badge>
                    <Badge>Regression Testing</Badge>
                    <Badge>API Testing</Badge>
                    <Badge>Selenium WebDriver</Badge>
                    <Badge>Python</Badge>
                    <Badge>Pytest</Badge>
                  </CardContent>
                </Card>
              </section>

              <section id="certifications" className={sectionStyle}>
                <Card className={cardStyle}>
                  <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                    <CardDescription>List of certifications.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge>Selenium with Python</Badge>
                    <Badge>Practical Software Testing 2024</Badge>
                  </CardContent>
                </Card>
              </section>

              <section id="education" className={sectionStyle}>
                <Card className={cardStyle}>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                    <CardDescription>Education details.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Degree: Bachelor of Engineering (EEE)</p>
                    <p>College: Mount Zion College of Engineering &amp; Technology</p>
                    <p>Year: 2019 – 2023</p>
                    <p>GPA: 8.1</p>
                  </CardContent>
                </Card>
              </section>

              <section id="contact" className={sectionStyle}>
                <Card className={cardStyle}>
                  <CardHeader>
                    <CardTitle>Contact</CardTitle>
                    <CardDescription>Contact information.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Email: {contactInfo.email}</p>
                    <p>Phone: {contactInfo.phone}</p>
                    <Link href={contactInfo.linkedIn} target="_blank">
                      LinkedIn
                    </Link>
                    <Link href={contactInfo.gitHub} target="_blank">
                      GitHub
                    </Link>
                  </CardContent>
                </Card>
              </section>

              <footer className="flex items-center justify-center p-4">
                <p>
                  © {new Date().getFullYear()} Syed Mohamed R. All rights reserved.
                </p>
              </footer>
            </ScrollArea>
          )}
        </SidebarInset>
      </SidebarProvider>
    
  );
}

