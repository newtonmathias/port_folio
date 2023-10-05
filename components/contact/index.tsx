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

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Email is required",
  }),
  subject: z.string().min(1, {
    message: "Subject is required",
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
      subject: "",
      message: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
    } catch {}
  };
  return (
    <div className="container md:w-2/3 mx-auto py-20 ">
      <div className="text-center pb-16 space-y-2">
        <h5 className="text-sm leading-6 tracking-widest text-primary-yellow uppercase font-bold font-lustria">
          contact
        </h5>
        <h2 className="text-4xl font-semibold font-lato ">Get In Touch</h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 md:p-10">
          <div className="space-y-4">
            <h5 className="text-4xl leading-8 font-bold">
              Talk to our sales team
            </h5>
            <h2 className="text-xl font-lato ">
              Find out how Sanity can help your company or get a product demo.
              We'll be in touch shortly.
            </h2>
          </div>
          <ul className="space-y-2 pt-2 text-dark-gray dark:text-light-gray">
            <li className="flex items-center gap-3">
              <span className="rounded-full text-white p-1 bg-primary-yellow">
                <Check />
              </span>
              <p>
                You message send an invite on{" "}
                <span className="text-[#73bb44] hover:underline hover:cursor-pointer font-lato">
                  upwork
                </span>
              </p>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full text-white p-1 bg-primary-yellow">
                <Check />
              </span>
              <p>We are goal-driven and dedicated</p>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full text-white p-1 bg-primary-yellow">
                <Check />
              </span>
              <p>We are goal-driven and dedicated</p>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full text-white p-1 bg-primary-yellow">
                <Check />
              </span>
              <p>We are goal-driven and dedicated</p>
            </li>
            <li className="flex items-center gap-3">
              <span className="rounded-full text-white p-1 bg-primary-yellow">
                <Check />
              </span>
              <p>We are goal-driven and dedicated</p>
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
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
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
