"use client";

import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";

export function WhatsAppEnquiry() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Hello Go Limitless, I am interested in trying a class.",
      "",
      `Name: ${data.get("name")}`,
      `My WhatsApp number: ${data.get("phone")}`,
      `Class: ${data.get("class")}`,
      `Experience: ${data.get("level")}`,
      `Preferred day/time: ${data.get("preferredTime")}`,
    ];
    const extra = String(data.get("message") || "").trim();
    if (extra) lines.push(`Message: ${extra}`);
    window.location.assign(
      `https://wa.me/212666664225?text=${encodeURIComponent(lines.join("\n"))}`,
    );
  }

  return (
    <div className="enquiry-panel" id="try-a-class">
      <p className="eyebrow">Your first session</p>
      <h2 className="display">Interested in trying a class?</h2>
      <p>
        Leave your details and tell us what you would like to try. Your enquiry will open in
        WhatsApp, ready to send directly to Go Limitless.
      </p>
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="enquiry-name">Your name</label>
          <Input className="form-control" id="enquiry-name" name="name" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="enquiry-phone">Your WhatsApp number</label>
          <Input
            className="form-control"
            id="enquiry-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="enquiry-class">Class you want to try</label>
          <NativeSelect
            className="form-select"
            id="enquiry-class"
            name="class"
            defaultValue=""
            required
          >
            <NativeSelectOption value="" disabled>
              Choose a class
            </NativeSelectOption>
            <NativeSelectOption>Jiu-Jitsu (BJJ) / Grappling</NativeSelectOption>
            <NativeSelectOption>Muay Thai</NativeSelectOption>
            <NativeSelectOption>Women’s Strength</NativeSelectOption>
            <NativeSelectOption>Rooftop Strength</NativeSelectOption>
            <NativeSelectOption>Community Open Mat BJJ</NativeSelectOption>
            <NativeSelectOption>Online Coaching</NativeSelectOption>
            <NativeSelectOption>Not sure yet</NativeSelectOption>
          </NativeSelect>
        </div>
        <div className="form-field">
          <label htmlFor="enquiry-level">Experience level</label>
          <NativeSelect
            className="form-select"
            id="enquiry-level"
            name="level"
            defaultValue=""
            required
          >
            <NativeSelectOption value="" disabled>
              Choose your level
            </NativeSelectOption>
            <NativeSelectOption>Complete beginner</NativeSelectOption>
            <NativeSelectOption>Some experience</NativeSelectOption>
            <NativeSelectOption>Experienced</NativeSelectOption>
          </NativeSelect>
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="enquiry-time">Preferred day and time</label>
          <Input
            className="form-control"
            id="enquiry-time"
            name="preferredTime"
            placeholder="For example: Monday at 17:30"
            required
          />
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="enquiry-message">Anything else we should know? (optional)</label>
          <Textarea
            className="form-control form-textarea"
            id="enquiry-message"
            name="message"
            placeholder="Questions, injuries or anything that will help us guide you"
          />
        </div>
        <div className="form-submit">
          <Button className="form-button" type="submit">
            Send enquiry on WhatsApp <ArrowUpRight aria-hidden="true" />
          </Button>
          <p className="form-help">
            WhatsApp will open with your details ready to send. Press send there to complete your
            enquiry.
          </p>
        </div>
      </form>
    </div>
  );
}
