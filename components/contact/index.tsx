"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Check } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Email is required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      emailjs
        .send(
          "service_ua26v85",
          "template_qftrg52",
          values,
          "MA8057wIRyKE4i_kn"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      toast("Email sent successfully!");
      form.reset();
    } catch {
      toast("Email not send.");
    }
  };

  return (
    <div id="contact" className="container md:w-2/3 mx-auto py-20 ">
      <div className="text-center pb-16 space-y-2">
        <h1 className="text-sm leading-6 tracking-widest text-primary-yellow uppercase font-bold font-lustria">
          contact
        </h1>
        <h2 className="text-4xl font-semibold font-lato ">Get In Touch</h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 md:p-10">
          <div className="space-y-4">
            <h3 className="text-4xl leading-8 font-bold">
              I&apos;d love to work with you.
            </h3>
            <h4 className="text-xl font-lato ">
              Feel free to reach out through any of the following contact
              options.I&apos;ll reply as soon as possible!
            </h4>
          </div>
          <ul className="space-y-2 pt-2 text-dark-gray dark:text-light-gray">
            <li className="flex items-center gap-3">
              <span className="rounded-full text-white p-1 bg-primary-yellow">
                <Check className="h-5 w-5" />
              </span>
              <p>
                You can message me or send a job invite on{" "}
                <Link
                  href="https://www.upwork.com/freelancers/newtonm3"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-[#73bb44] hover:cursor-pointer font-lato hover:underline font-medium">
                    Upwork
                  </span>
                </Link>
              </p>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full text-white p-1 bg-primary-yellow">
                <Check className="h-5 w-5" />
              </span>
              <p>
                Drop me a mail at
                <Link
                  href="mailto:newtymathias@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="dark:text-gray-200 text-gray-600 hover:underline font-medium">
                    {" "}
                    newtymathias@gmail.com
                  </span>
                </Link>
              </p>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full text-white p-1 bg-primary-yellow">
                <Check className="h-5 w-5" />
              </span>
              <p>Feel free to reach out via</p>
              <Link
                href="https://twitter.com/newto97"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-[#1DA1F2] hover:cursor-pointer font-lato hover:underline font-medium">
                  Twitter
                </span>
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full text-white p-1 bg-primary-yellow">
                <Check className="h-5 w-5" />
              </span>
              <p>Schedule a video callvia my </p>
              <Link
                href="https://calendly.com/newtonmathias/30min"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-primary-yellow hover:cursor-pointer font-lato hover:underline font-medium">
                  calendly
                </span>
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full text-white p-1 bg-primary-yellow">
                <Check className="h-5 w-5" />
              </span>
              <p>Or fill out the form, I&apos;ll respond promptly via mail!</p>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 mt-4 p-6 border border-border rounded-md"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea disabled={isSubmitting} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-2">
                <Button disabled={!isValid || isSubmitting} type="submit">
                  Send
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
