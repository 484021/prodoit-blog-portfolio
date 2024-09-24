"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  type FormData = {
    name: string;
    email: string;
    message: string;
  };

  const [pending, setIsPending] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //create formData

    const name = formData.name;
    const email = formData.email;
    const message = formData.message;

    setIsPending(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Email sent!",
          description: "I'll get back to you as soon as possible.",
        });

        setIsPending(false);
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          Fill out the form below and I'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              className="min-h-[120px] resize-none "
              value={formData.message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setFormData({ ...formData, message: e.target.value });
              }}
            />
          </div>
          <CardFooter className="flex justify-end">
            <Button type="submit" className="mt-4 -mb-5" disabled={pending}>
              {pending ? "Sending..." : "Send"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
