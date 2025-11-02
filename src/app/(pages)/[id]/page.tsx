import { FeedbackDetails, Overlay } from "@/app/components/__organism";
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>; 
}

export default async function Page({ params }: PageProps) {
  const { id } = await params; 
  return (
    <div className="relative ">
      <Overlay feedbackId={id} />
      <FeedbackDetails feedbackId={id} />
    </div>
  );
}